export interface INivel {
    susuarioadd: string;
    dtfechaadd: Date;
    susuariomod: string;
    dtfechamod: Date;
    lnivelId: number;
    ssigla: string;
    snombre: string;
    ddesde: number;
    dhasta: number;
    dbono: number;
    dbonomembresia: number;
}


export const initilalStateINivel: INivel = {
    susuarioadd: '',
    dtfechaadd: new Date,
    susuariomod: '',
    dtfechamod: new Date,
    lnivelId: 0,
    ssigla: '',
    snombre: '',
    ddesde: 0,
    dhasta: 0,
    dbono: 0,
    dbonomembresia: 0,
}