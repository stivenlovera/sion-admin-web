import { IAuthentication } from "../services/Intefaces/IAuthenticacion";

export const authenticacionInitial: IAuthentication = {
    nombre: 'stiven',
    apellido:'lovera',
    rol: 'administrador',
    cargo:'',
    modulo: [
        {
            modulo: 'Tablero',
            subModulo: [
                {
                    url: '/report',
                    nombre: 'Report',
                    funcionalidad: [
                        'show'
                    ]
                }
            ]
        },
        {
            modulo: 'Web comisiones',
            subModulo: [
                {
                    url: '/report',
                    nombre: 'Incentivos',
                    funcionalidad: [
                        'component a',
                        /*  'component b',  */
                        'component c'
                    ]
                },
                {
                    url: '/mapas',
                    nombre: 'Mapas',
                    funcionalidad: [
                        'component a',
                        /*  'component b',  */
                        'component c'
                    ]
                },
                {
                    url: '/notificaciones',
                    nombre: 'Notificaciones',
                    funcionalidad: [
                        'component a',
                        /*  'component b',  */
                        'component c'
                    ]
                }
            ]
        },
        {
            modulo: 'Comisiones',
            subModulo: [
                {
                    url: '/reports',
                    nombre: 'Comisiones',
                    funcionalidad: [
                        'component a',
                        /*  'component b',  */
                        'component c'
                    ]
                }
            ]
        },
        {
            modulo: 'Sistema',
            subModulo: [
                {
                    url: '/trabajos-recurrentes',
                    nombre: 'Sistema',
                    funcionalidad: []
                },
                {
                    url: '/lista-modulos',
                    nombre: 'ListaModulos',
                    funcionalidad: []
                },
                {
                    url: '/modulo/:id',
                    nombre: 'Modulo',
                    funcionalidad: []
                },
            ]
        },
        {
            modulo: 'Configuracion',
            subModulo: [
                {
                    url: '/acceso',
                    nombre: 'Acceso',
                    funcionalidad: []
                },
            ]
        },
        {
            modulo: 'Red',
            subModulo: [
                {
                    url: '/reporte-red',
                    nombre: 'Reporte red',
                    funcionalidad: []
                },
            ]
        },
        {
            modulo: 'Asesores',
            subModulo: [
                {
                    url: '/lista-asesores',
                    nombre: 'Lista asesores',
                    funcionalidad: []
                },
                {
                    url: '/asesor/:id',
                    nombre: 'Asesores',
                    funcionalidad: []
                },
            ]
        },
        {
            modulo: 'Bienvenido',
            subModulo: [
                {
                    url: '',
                    nombre: 'Bienvenido',
                    funcionalidad: []
                }
            ]
        },
        {
            modulo: 'General',
            subModulo: [
                {
                    url: 'general/empresas',
                    nombre: 'Lista empresa',
                    funcionalidad: []
                },
                {
                    url: 'general/complejos',
                    nombre: 'Lista complejos',
                    funcionalidad: []
                },
                {
                    url: 'general/ciclos',
                    nombre: 'Lista ciclos',
                    funcionalidad: []
                },
                {
                    url: 'general/comision',
                    nombre: 'Tipo contrato',
                    funcionalidad: []
                },
                {
                    url: 'general/tipo-contrato',
                    nombre: 'Bienvenido',
                    funcionalidad: []
                },
                {
                    url: 'general/niveles',
                    nombre: 'Niveles',
                    funcionalidad: []
                }
            ]
        }
    ]
}
export const NoauthenticacionInitial: IAuthentication = {
    nombre: '',
    apellido:'',
    rol: '',
    cargo:'',
    modulo: [
        {
            modulo: 'Bienvenido',
            subModulo: [
                {
                    url: '/',
                    nombre: '404',
                    funcionalidad: [

                    ]
                }
            ]
        },
    ]
}