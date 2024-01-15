export interface IAsesor {
    susuarioadd: string;
    dtfechaadd: Date;
    susuariomod: string;
    dtfechamod: Date;
    lcontactoId: number;
    scodigo: string;
    stelefonofijo: string;
    stelefonomovil: string;
    scorreoelectronico: string;
    cestado: string;
    bifoto: string;
    dtfechanacimiento: Date;
    sdireccion: string;
    lpaisId: number;
    sciudad: string;
    scedulaidentidad: string;
    lpatrocinanteId: number;
    lnivelId: number;
    dtfecharegistro: Date;
    snombrecompleto: string;
    dtfechacalculo: Date;
    dlotes: number;
    dproduccion: number;
    cvolante: string;
    cpresentacion: string;
    ccena: string;
    ctv: string;
    cperiodico: string;
    cradio: string;
    cweb: string;
    sotro: string;
    ccorreo: string;
    ltipocontactoId: number;
    cpresentafactura: string;
    ddescuentolote: number;
    snotadescuentolote: string;
    stelefonooficina: string;
    scontrasena: string;
    lpatrotempId: number;
    lnit: number;
    lcuentabanco: string;
    lcodigobanco: number;
    ctienecuenta: string;
    cbaja: string;
    dtfechabaja: Date;
    ltipobaja: number;
    smotivobaja: string;
    pmax: number;
    pvitalicio: number;
}
export const initialStateIAsesor:IAsesor={
    susuarioadd: '',
    dtfechaadd: new Date,
    susuariomod: '',
    dtfechamod: new Date,
    lcontactoId: 0,
    scodigo: '',
    stelefonofijo: '',
    stelefonomovil: '',
    scorreoelectronico: '',
    cestado: '',
    bifoto: '',
    dtfechanacimiento: new Date,
    sdireccion: '',
    lpaisId: 0,
    sciudad: '',
    scedulaidentidad: '',
    lpatrocinanteId: 0,
    lnivelId: 0,
    dtfecharegistro: new Date,
    snombrecompleto: '',
    dtfechacalculo: new Date,
    dlotes: 0,
    dproduccion: 0,
    cvolante: '',
    cpresentacion: '',
    ccena: '',
    ctv: '',
    cperiodico: '',
    cradio: '',
    cweb: '',
    sotro: '',
    ccorreo: '',
    ltipocontactoId: 0,
    cpresentafactura: '',
    ddescuentolote: 0,
    snotadescuentolote: '',
    stelefonooficina: '',
    scontrasena: '',
    lpatrotempId: 0,
    lnit: 0,
    lcuentabanco: '',
    lcodigobanco: 0,
    ctienecuenta: '0',
    cbaja: '',
    dtfechabaja: new Date,
    ltipobaja: 0,
    smotivobaja: '',
    pmax: 0,
    pvitalicio: 0,
}
