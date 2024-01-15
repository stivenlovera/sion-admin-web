import axios from "axios";
import { IResponse } from "../Intefaces/IResponse";
import { setupInterceptors } from "../../utils/axiosInterceptor";
import { Icargo } from "../../interfaces/ICargo";
import { IRol } from "../../interfaces/roles";
setupInterceptors(axios);
export async function GetAllRolService() {
    return await axios.get<IResponse<IRol[]>>(`${process.env.REACT_APP_API_GUARDIAN}api/rol`);
}