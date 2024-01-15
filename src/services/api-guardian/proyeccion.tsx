import axios from "axios";
import { IResponse } from "../Intefaces/IResponse";
import { setupInterceptors } from "../../utils/axiosInterceptor";
import { IProyeccion } from "../../interfaces/IProyeccion";
setupInterceptors(axios);
export async function GetAllProyeccionService() {
    return await axios.get<IResponse<IProyeccion[]>>(`${process.env.REACT_APP_API_GUARDIAN}api/proyeccion/data-table`);
}