export interface IPais {
    lPaisId: number;
    snombre: string;
    susuarioadd: string;
    dtFechaadd: Date;
    susuariomod: string;
    dtFechamod: Date;
}

export const initialStateIPais: IPais = {
    lPaisId: 0,
    snombre: '',
    susuarioadd: '',
    dtFechaadd: new Date,
    susuariomod: '',
    dtFechamod: new Date,
}