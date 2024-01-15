import axios from "axios";
import { IResponse } from "../Intefaces/IResponse";
import { setupInterceptors } from "../../utils/axiosInterceptor";
import { ICiclo } from "../../interfaces/ICiclo";
setupInterceptors(axios);
export async function GetAllCiclo() {
    return await axios.get<IResponse<ICiclo[]>>(`${process.env.REACT_APP_API_GUARDIAN}api/ciclo`);
}
export async function editarCiclo(lcicloId: number) {
    return await axios.get<IResponse<ICiclo>>(`${process.env.REACT_APP_API_GUARDIAN}api/ciclo/${lcicloId}`);
}
export async function storeCiclo(ciclo: ICiclo) {
    return await axios.post<IResponse<ICiclo>>(`${process.env.REACT_APP_API_GUARDIAN}api/ciclo`, ciclo);
}
export async function updateCiclo(ciclo: ICiclo) {
    return await axios.put<IResponse<ICiclo>>(`${process.env.REACT_APP_API_GUARDIAN}api/ciclo`, ciclo);
}
export async function deleteCiclo(lcicloId: number) {
    return await axios.delete<IResponse<ICiclo>>(`${process.env.REACT_APP_API_GUARDIAN}api/ciclo/${lcicloId}`);
}