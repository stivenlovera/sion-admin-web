import axios from "axios";
import { IResponse } from "../Intefaces/IResponse";
import { setupInterceptors } from "../../utils/axiosInterceptor";
import { AuthenticationDto, ResIAuthenticacion, ResIVerificarAuthenticacion, loginDto } from "../../interfaces/ILogin";
import { IAutorizacion } from "../../interfaces/IAutorize";
setupInterceptors(axios);
export async function login(values: loginDto) {
    return await axios.post<IResponse<ResIAuthenticacion>>(`${process.env.REACT_APP_API_GUARDIAN}api/authenticate/login`, values);
}
export async function VerificarAuthenticate() {
    return await axios.get<IResponse<ResIVerificarAuthenticacion>>(`${process.env.REACT_APP_API_GUARDIAN}api/authenticate`);
}
export async function refreshToken() {
    return await axios.get<IResponse<AuthenticationDto>>(`${process.env.REACT_APP_API_GUARDIAN}api/authenticate/refresh-token`);
}
export async function logout() {
    return await axios.get<IResponse<ResIAuthenticacion>>(`${process.env.REACT_APP_API_GUARDIAN}api/authenticate/logout`);
}
export async function editAuthenticate(autorizacionId: number) {
    return await axios.get<IResponse<IAutorizacion>>(`${process.env.REACT_APP_API_GUARDIAN}api/autorizado/${autorizacionId}`);
}
export async function updateAuthenticate(values: IAutorizacion, autorizacionId: number) {
    return await axios.put<IResponse<IAutorizacion>>(`${process.env.REACT_APP_API_GUARDIAN}api/autorizado/${autorizacionId}`,values);
}
