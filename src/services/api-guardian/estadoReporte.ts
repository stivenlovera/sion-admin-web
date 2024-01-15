import axios from "axios";
import { IResponse } from "../Intefaces/IResponse";
import { setupInterceptors } from "../../utils/axiosInterceptor";
import { IEstadoReporte } from "../../interfaces/IEstadoReporte";
setupInterceptors(axios);

export async function listEstadoReporte() {
    return await axios.get<IResponse<IEstadoReporte[]>>(`${process.env.REACT_APP_API_GUARDIAN}api/estado-reporte`);
}