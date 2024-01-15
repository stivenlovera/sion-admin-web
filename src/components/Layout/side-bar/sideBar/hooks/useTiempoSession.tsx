import { useTimer } from "react-timer-hook";
import { useAuthenticate } from "../../../../../pages/login/hooks/useAuthenticate";

export const UseTiempoSession = () => {
    const time: number = parseInt(process.env.REACT_APP_LIFE_TOKEN!);
    const tiempo = new Date();
    tiempo.setSeconds(tiempo.getSeconds() + time);

    const { onLogout, onRefreshToken } = useAuthenticate();
    //SESSION
    const sesionActividad = useTimer({ expiryTimestamp: tiempo, onExpire: () => { onLogout() } });
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        restart
    } = sesionActividad;
    const reiniciarActividad = (reset: string) => {
        restart(tiempo)
    }
    //REFRESH TOKEN
    const refreshToken = useTimer({ expiryTimestamp: tiempo, onExpire: () => { } });
    const autoControl = () => {
        const tiempotranscurridoToken = (refreshToken.minutes * 60) + refreshToken.seconds;
        const tiempotranscurridoSession = (minutes * 60) + seconds;
        if (tiempotranscurridoToken == 5) {
            console.log(tiempotranscurridoSession, tiempotranscurridoToken);
            if (tiempotranscurridoSession > tiempotranscurridoToken) {
                console.log('actualizar token');
                onRefreshToken()
                refreshToken.restart(tiempo)
            }
        }
    }

    return {
        refreshToken,
        autoControl,
        sesionActividad,
        seconds,
        minutes,
        reiniciarActividad
    }
}
