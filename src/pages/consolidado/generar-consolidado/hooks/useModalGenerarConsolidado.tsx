import React, { useState } from 'react'
import { AlertaEvento } from '../../../../components/alerta-eventos/alerta-evento';
import { enqueueSnackbar } from 'notistack';
import { StoreConsolidado, verficarConsolidado } from '../../../../services/api-guardian/generarConsolidado';
import { ICiclo, initialCiclo } from '../../../../interfaces/ICiclo';
import { IGenerarConsolidados } from '../../../../interfaces/IGenerarConsolidados';
import { IEstadoReporte, initilalStateEstadoReporte } from '../../../../interfaces/IEstadoReporte';

export interface HistorialConsolidado {
    descripcion: string;
    nombre: string;
    estadoReporte: IEstadoReporte;
    cicloId: number;
    dataTable: IGenerarConsolidados[];
}
export const useModalGenerarConsolidado = () => {
    const [loader, setLoader] = useState(false);
    const [modalGenerarConsolidado, setModalGenerarConsolidado] = useState(false);
    const initialStateModalGenerarConsolidado: HistorialConsolidado = {
        descripcion: '',
        nombre: '',
        cicloId: 0,
        estadoReporte: initilalStateEstadoReporte,
        dataTable: []
    }
    const [historialConsolidado, sethistorialConsolidado] = useState<HistorialConsolidado>(initialStateModalGenerarConsolidado)
    const onVerificarConsolidado = async (ciclo: ICiclo) => {
        const { data } = await verficarConsolidado(ciclo);
        AlertaEvento({ data, enqueueSnackbar, success: false });
        if (data.status == 1) {
            if (data.data) {
                setModalGenerarConsolidado(true);
            } else {
                enqueueSnackbar({ message: data.message, variant: 'warning', autoHideDuration: 3000 });
            }
        }
    }
    const onStoreConsolidado = async (historialConsolidado: HistorialConsolidado, estado: (loader: boolean) => void) => {
        console.log(historialConsolidado)
        estado(true)
        const { data } = await StoreConsolidado(historialConsolidado);
        AlertaEvento({ data, enqueueSnackbar, success: true });
        if (data.status == 1) {
            if (data.data) {
                setModalGenerarConsolidado(false);
            }
        }
        estado(false)
    }

    return {
        loader,
        modalGenerarConsolidado,
        setModalGenerarConsolidado,
        onVerificarConsolidado,
        onStoreConsolidado,
        initialStateModalGenerarConsolidado,
        historialConsolidado,
        sethistorialConsolidado
    }
}
