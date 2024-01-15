export interface IDataTableRed {
    cantidad: number,
    snombreCompleto: string,
    dtfecha: string,
    lcicloId: number,
    lcontacto_id: number,
    lcontrato_id: number,
    lgeneracion: number;
    cbaja: string
    scedulaidentidad: string;
    total_vendido: number;
}
export const initialDataTableRed: IDataTableRed[] = [
    {
        cantidad: 0,
        dtfecha: '',
        lcicloId: 0,
        lcontacto_id: 0,
        lcontrato_id: 0,
        lgeneracion: 0,
        cbaja: '',
        scedulaidentidad: '',
        snombreCompleto: '',
        total_vendido: 0
    }
]