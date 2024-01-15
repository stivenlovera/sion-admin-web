import axios from "axios";
import { IResponse } from "../Intefaces/IResponse";
import { setupInterceptors } from "../../utils/axiosInterceptor";
import { IPais } from "../../interfaces/IPais";
setupInterceptors(axios);

export async function ObtenerTodoPais() {
    return await axios.get<IResponse<IPais[]>>(`${process.env.REACT_APP_API_GUARDIAN}api/pais`);
}