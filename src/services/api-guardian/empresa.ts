import axios from "axios";
import { IResponse } from "../Intefaces/IResponse";
import { setupInterceptors } from "../../utils/axiosInterceptor";
import { IEmpresa } from "../../interfaces/IEmpresa";
setupInterceptors(axios);

export async function listEmpresa() {
    return await axios.get<IResponse<IEmpresa[]>>(`${process.env.REACT_APP_API_GUARDIAN}api/empresa`);
}
export async function storeEmpresa(values: IEmpresa) {
    return await axios.post<IResponse<null>>(`${process.env.REACT_APP_API_GUARDIAN}api/empresa`, values);
}
export async function editEmpresa(empresaId: number) {
    return await axios.get<IResponse<IEmpresa>>(`${process.env.REACT_APP_API_GUARDIAN}api/empresa/${empresaId}`);
}
export async function updateEmpresa(empresaId: number,values: IEmpresa) {
    return await axios.put<IResponse<null>>(`${process.env.REACT_APP_API_GUARDIAN}api/empresa/${empresaId}`, values);
}
export async function deleteeEmpresa(empresaId: number) {
    return await axios.delete<IResponse<null>>(`${process.env.REACT_APP_API_GUARDIAN}api/empresa/${empresaId}`);
}
