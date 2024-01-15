import axios from "axios";
import { IResponse } from "../Intefaces/IResponse";
import { setupInterceptors } from "../../utils/axiosInterceptor";
import { Icargo } from "../../interfaces/ICargo";
setupInterceptors(axios);
export async function GetAllCargoService() {
    return await axios.get<IResponse<Icargo[]>>(`${process.env.REACT_APP_API_GUARDIAN}api/cargo`);
}