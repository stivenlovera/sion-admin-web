import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import { IAuthentication } from "../../../services/Intefaces/IAuthenticacion";
interface AuthenticateProps {
    modulo?: string,
    authorizacion: IAuthentication
}
const AuthenticateModulo = ({ modulo }: AuthenticateProps) => {
    const context: IAuthentication = useOutletContext();
    //const moduloDetectado = context.modulo.filter(x => { return x.modulo == modulo });

    if (context != undefined) {
        //context.modulo = moduloDetectado;
        //console.log('a pasar', authorizado)
        return <Outlet context={ context } />
    } else {
        return <Navigate to="/" />
    }
}

export default AuthenticateModulo
