import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useTimer } from 'react-timer-hook';
import { setToken } from '../../../../../Reducers/Slices/LoginSlice';

export const AutoRefresh = () => {
    const [refresh, setRefresh] = useState(false)
    const dispatch = useDispatch();
    const updateToken = (token: boolean) => {
        dispatch(
            setToken({
                token: token
            })
        )
    }
    const tiempo = new Date();
    tiempo.setSeconds(tiempo.getSeconds() + 900);
    const timer = useTimer({
        expiryTimestamp: tiempo, onExpire: () => {
            /* delete token  */
            updateToken(false)
        }
    })

    const {
        minutes,
        seconds,
        restart
    } = timer;


    const verSession = () => {
        console.log(`${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)} para refresh token`)
        if (seconds == 5 && refresh == true) {
            console.log('actualizacion de token ')
            restart(tiempo)
            setRefresh(false);
        }
    }
    return {
        timer,
        verSession,
        setRefresh
    }
}
