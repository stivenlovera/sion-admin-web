import axios from "axios";
import { IResponse } from "../Intefaces/IResponse";
import { setupInterceptors } from "../../utils/axiosInterceptor";
import { ResIAuthenticacion, loginDto } from "../../interfaces/ILogin";
import { IDataTableFuncionario } from "../../interfaces/IDataTableFuncionario";
import { IFuncionario } from "../../interfaces/funcionarios";
setupInterceptors(axios);
export async function dataTableFuncionarioService() {
    return await axios.get<IResponse<IDataTableFuncionario[]>>(`${process.env.REACT_APP_API_GUARDIAN}api/funcionario/data-table`);
}
export async function storeFuncionarioService(funcionario: IFuncionario) {
    return await axios.post<IResponse<ResIAuthenticacion>>(
        `${process.env.REACT_APP_API_GUARDIAN}api/funcionario`,funcionario,
        { headers: { "Content-Type": "multipart/form-data" } });
}
export async function editFuncionarioService(funcionarioId: number) {
    return await axios.get<IResponse<IFuncionario>>(`${process.env.REACT_APP_API_GUARDIAN}api/funcionario/${funcionarioId}`);
}