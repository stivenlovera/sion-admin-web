import { ResIVerificarAuthenticacion } from "../../../interfaces/ILogin";
import { IAuthentication, IModulos, ISubModulos } from "../../../services/Intefaces/IAuthenticacion";

export const initialStateAuthenticacion: ResIVerificarAuthenticacion = {
    apellido: '',
    cargo: '',
    nombre: '',
    roles: '',
    modulo: []
}

export const centralizarAuthenticacion = (authenticacion: ResIVerificarAuthenticacion) => {

    let modulos: IModulos[] = []
    authenticacion.modulo.map(modulo => {
        let subModulo: ISubModulos[] = []
        modulo.subModulo.map(sub => {
            subModulo.push({
                funcionalidad: [],
                nombre:sub.moduloSubNombre,
                url:sub.url
            });
        })

        modulos.push({
            modulo: modulo.moduloNombre,
            subModulo: subModulo
        })
    })
    let authenticate: IAuthentication = {
        nombre: authenticacion.nombre,
        apellido: authenticacion.apellido,
        cargo: authenticacion.cargo,
        rol: authenticacion.roles,
        modulo: modulos,
    };
    return authenticate;
}