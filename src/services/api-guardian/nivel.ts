import axios from "axios";
import { IResponse } from "../Intefaces/IResponse";
import { setupInterceptors } from "../../utils/axiosInterceptor";
import { INivel } from "../../interfaces/INivel";
setupInterceptors(axios);

export async function ObtenerTodoNiveles() {
    return await axios.get<IResponse<INivel[]>>(`${process.env.REACT_APP_API_GUARDIAN}api/nivel`);
}