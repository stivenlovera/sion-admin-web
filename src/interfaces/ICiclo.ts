import { DataModalICicloProps } from "../pages/ciclo/components/modal-ciclo";
import dayjs from "dayjs";

export interface ICiclo {
    lcicloId: number;
    snombre: string;
    dtfechainicio: string;
    dtfechafin: string;
    lestado: number;
    dtfechacierre: string;
    dtfechaprecierre1: string;
    dtfechaprecierre2: string;
    cverenweb: string;
    estadogestor: string;
}

export const initialCiclo: ICiclo = {
    lcicloId: 0,
    snombre: '',
    dtfechainicio: '',
    dtfechafin: '',
    lestado: 1,
    dtfechacierre: dayjs().format('YYYY-MM-DD'),
    dtfechaprecierre1: '',
    dtfechaprecierre2: '',
    cverenweb: '0',
    estadogestor: '',
}
export const initialDataCiclo: DataModalICicloProps = {
    edit: false,
    ciclo: initialCiclo
}