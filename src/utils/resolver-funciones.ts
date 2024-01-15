import { IAuthentication } from "../services/Intefaces/IAuthenticacion";

interface ResolverFunciones {
    component: string;
    visible: boolean;
}
export const ResolverFunciones = (nombreModulo: string, nombreSubModulo: string, context: IAuthentication): string[] => {
    const modulo = context.modulo.find(m => m.modulo == nombreModulo);
    if (modulo!=undefined) {
        const subModulo = modulo.subModulo.find(sm => sm.nombre == nombreSubModulo);
        return subModulo?.funcionalidad!;
    }
    else{
        return [];
    }
    
}