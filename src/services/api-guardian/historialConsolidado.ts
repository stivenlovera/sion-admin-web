import axios from "axios";
import { IResponse } from "../Intefaces/IResponse";
import { setupInterceptors } from "../../utils/axiosInterceptor";
import { IGenerarConsolidados } from "../../interfaces/IGenerarConsolidados";
import { IFiltroConsolidado } from "../../pages/consolidado/generar-consolidado/hooks/useFormikFiltroConsolidado";
import { ICiclo } from "../../interfaces/ICiclo";
import { HistorialConsolidado } from "../../pages/consolidado/generar-consolidado/hooks/useModalGenerarConsolidado";
import { IcomisionConsolidado } from "../../interfaces/IComisionConsolidado";
import { IFormConfigCambioEmpresa } from "../../pages/consolidado/consolidado/hooks/useFormikCambioEmpresa";
import { IHistoricoComisionConsolidado } from "../../interfaces/IHistoricoConsolidado";

setupInterceptors(axios);

export async function listConsolidadoRegistrado() {
    return await axios.get<IResponse<IcomisionConsolidado[]>>(`${process.env.REACT_APP_API_GUARDIAN}api/historial-consolidado`);
}
export async function getConsolidadoRegistrado(comisionConsolidadoId: number) {
    return await axios.get<IResponse<IHistoricoComisionConsolidado[]>>(`${process.env.REACT_APP_API_GUARDIAN}api/historial-consolidado/consolidado/${comisionConsolidadoId}`);
}

export async function reportComisionConsolidadoEXCEL(consolidado: IcomisionConsolidado, dataTable: IHistoricoComisionConsolidado[]) {
    return await axios.post(`${process.env.REACT_APP_API_GUARDIAN}api/historial-consolidado/export-excel`, { consolidado, dataTable }, { responseType: 'blob' });
}
export async function reportComisionConsolidadoPDF(consolidado: IcomisionConsolidado, dataTable: IHistoricoComisionConsolidado[]) {
    return await axios.post(`${process.env.REACT_APP_API_GUARDIAN}api/historial-consolidado/export-pdf`, { consolidado, dataTable }, { responseType: 'blob' });
}

//verificar consolidado
export async function verficarConsolidado(ciclo: ICiclo) {
    return await axios.post<IResponse<boolean>>(`${process.env.REACT_APP_API_GUARDIAN}api/consolidado/verificar`, { ciclo });
}
export async function StoreConsolidado(historialConsolidado: HistorialConsolidado) {
    return await axios.post(`${process.env.REACT_APP_API_GUARDIAN}api/consolidado/generar-consolidado`, historialConsolidado);
}

// cambio empresa
export async function GetCambioEmpresa(comisionConsolidadoId: number) {
    return await axios.post<IResponse<IFormConfigCambioEmpresa>>(`${process.env.REACT_APP_API_GUARDIAN}api/historial-consolidado/config-pago-historico`, { comisionConsolidadoId });
}

export async function StoreCambioEmpresa(formConfigCambioEmpresa: IFormConfigCambioEmpresa) {
    return await axios.post<IResponse<boolean>>(`${process.env.REACT_APP_API_GUARDIAN}api/historial-consolidado/store-pago-historico`,  formConfigCambioEmpresa );
}