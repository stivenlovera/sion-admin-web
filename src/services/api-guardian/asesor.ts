import axios from "axios";
import { IResponse } from "../Intefaces/IResponse";
import { setupInterceptors } from "../../utils/axiosInterceptor";

import { IAsesor } from "../../interfaces/IAsesor";
setupInterceptors(axios);

export async function ObtenerTodoAsesores() {
    return await axios.get<IResponse<IAsesor[]>>(`${process.env.REACT_APP_API_GUARDIAN}api/asesor`);
}
export async function ObtenerTodoAsesoresSelect() {
    return await axios.get<IResponse<IAsesor[]>>(`${process.env.REACT_APP_API_GUARDIAN}api/asesor/asesor-select`);
}