
import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import AuthenticateSubModulo from '../components/Layout/authenticate/authenticate-sub-module';
import { IAuthentication } from '../services/Intefaces/IAuthenticacion';
//page presentacion
const SplashScreem = lazy(() => import('../pages/splash-screem/index'));
// inicio
const IndexInformacionUsuario = lazy(() => import('../pages/informacion-usuario/informacion-usuario'));

const Tablero = lazy(() => import('../pages/Tablero/tablero'));
const Index = lazy(() => import('../pages/consolidado/consolidado/index'));
const Report = lazy(() => import('../pages/consolidado/generar-consolidado/reports'));
const PagoConsolidad = lazy(() => import('../pages/consolidado/pago-consolidado/index-pago-consolidado'));
const AuthenticateModulo = lazy(() => import('../components/Layout/authenticate/authenticate-module'));

const Sistema = lazy(() => import('../pages/sistema/servicios-jobs/index'));
const ListModulos = lazy(() => import('../pages/sistema/modulos/index'));
const Modulo = lazy(() => import('../pages/sistema/modulos/modulo'));

const Incentivos = lazy(() => import('../pages/web-comisiones/pages/incentivos/incentivo'));
const Mapas = lazy(() => import('../pages/web-comisiones/pages/mapas/mapas'));
const Notificacion = lazy(() => import('../pages/web-comisiones/pages/notificaciones/notificaciones'));

//configuracion
const ListaUsuario = lazy(() => import('../pages/configuracion/usuario/lista-usuario'));
const ListaRoles = lazy(() => import('../pages/configuracion/roles/lista-roles'));

//red
const Red = lazy(() => import('../pages/Red/index'));

//asesores
const ListAsesores = lazy(() => import('../pages/asesores/index'));
const Asesores = lazy(() => import('../pages/asesores/asesor'));

//empresa
const ListEmpresas = lazy(() => import('../pages/empresa/indexEmpresa'));
const ListComplejo = lazy(() => import('../pages/complejo/indexComplejo'));
const ListCiclos = lazy(() => import('../pages/ciclo/indexCiclo'));
const ListNiveles = lazy(() => import('../pages/niveles/indexNiveles'));

//proyecciones
const ListProyeccion = lazy(() => import('../pages/proyeccion/ventas/index'));

//venta grupo
const ListVentaGrupo = lazy(() => import('../pages/venta-grupo/lista-venta-grupo/lista-venta-grupo'));
const VentaGrupo = lazy(() => import('../pages/venta-grupo/venta/venta-grupo'));

export const modules = (authorizacion: IAuthentication) => {
    const modules: RouteObject[] = [
        {
            path: "",
            element: < AuthenticateModulo modulo={'Bienvenido'} authorizacion={authorizacion} />,
            children: [
                {
                    path: "",
                    element: <IndexInformacionUsuario />,
                }
            ]
        },
        {
            path: "tablero",
            element: < AuthenticateModulo modulo={'Tablero'} authorizacion={authorizacion} />,
            children: [
                {
                    path: "",
                    element: <Tablero />
                }
            ]
        },
        {
            path: "comisiones",
            element: < AuthenticateModulo modulo={'Comisiones'} authorizacion={authorizacion} />,
            children: [
                {
                    path: "Consolidados",
                    element: <Index />
                },
                {
                    path: "generar-consolidados",
                    element: <Report />,
                },
                {
                    path: "pago-consolidados",
                    element: <PagoConsolidad />,
                }
            ]
        },
        {
            path: "configuracion",
            element: < AuthenticateModulo modulo={'Configuracion'} authorizacion={authorizacion} />,
            children: [
                {
                    path: "usuarios",
                    element: <ListaUsuario />
                },
                {
                    path: "accesos",
                    element: <></>
                },
                {
                    path: "roles",
                    element: <ListaRoles />
                },
            ]
        },
        {
            path: "web-comisiones",
            element: <AuthenticateModulo modulo={'Web comisiones'} authorizacion={authorizacion} />,
            children: [
                {
                    path: "incentivos",
                    element: <AuthenticateSubModulo subModulo={'Incentivos'} />,
                    children: [
                        {
                            path: "",
                            element: <Incentivos />,
                        }
                    ]
                },
                {
                    path: "mapas",
                    element: <AuthenticateSubModulo subModulo={'Mapas'} />,
                    children: [
                        {
                            path: "",
                            element: <Mapas />,
                        }
                    ]
                },
                {
                    path: "notificaciones",
                    element: <AuthenticateSubModulo subModulo={'Notificaciones'} />,
                    children: [
                        {
                            path: "",
                            element: <Notificacion />,
                        }
                    ]
                },
            ]
        },
        {
            path: "sistema",
            element: < AuthenticateModulo modulo={'Sistema'} authorizacion={authorizacion} />,
            children: [
                {
                    path: "trabajos-recurrentes",
                    element: <AuthenticateSubModulo subModulo={'Sistema'} />,
                    children: [
                        {
                            path: "",
                            element: <Sistema />,
                        }
                    ]
                },
                {
                    path: "lista-modulos",
                    element: <AuthenticateSubModulo subModulo={'ListaModulos'} />,
                    children: [
                        {
                            path: "",
                            element: <ListModulos />,
                        }
                    ]
                },
                {
                    path: "modulo/:id",
                    element: <AuthenticateSubModulo subModulo={'Modulo'} />,
                    children: [
                        {
                            path: "",
                            element: <Modulo />
                        }
                    ]
                }
            ]
        },
        {
            path: "red",
            element: < AuthenticateModulo modulo={'Red'} authorizacion={authorizacion} />,
            children: [
                {
                    path: "reporte-red",
                    element: <Red />
                }
            ],

        },
        {
            path: "asesores",
            element: < AuthenticateModulo modulo={'Asesores'} authorizacion={authorizacion} />,
            children: [
                {
                    path: "lista-asesores",
                    element: <ListAsesores />
                },
                {
                    path: "asesor/:id",
                    element: <Asesores />
                }
            ],
        },
        {
            path: "general",
            element: < AuthenticateModulo modulo={'General'} authorizacion={authorizacion} />,
            children: [
                {
                    path: "empresas",
                    element: <ListEmpresas />
                },
                {
                    path: "complejos",
                    element: <ListComplejo />
                },
                {
                    path: "ciclos",
                    element: <ListCiclos />
                },
                {
                    path: "comision",
                    element: <Asesores />
                },
                {
                    path: "tipo-contrato",
                    element: <Asesores />
                },
                {
                    path: "niveles",
                    element: <ListNiveles />
                },
            ],
        },
        {
            path: "proyeccion",
            element: <AuthenticateModulo modulo={'Proyeccion'} authorizacion={authorizacion} />,
            children: [
                {
                    path: "ventas",
                    element: <ListProyeccion />
                },
            ],
        },
        {
            path: "venta-grupo",
            element: <AuthenticateModulo modulo={'Venta grupo'} authorizacion={authorizacion} />,
            children: [
                {
                    path: "",
                    element: <ListVentaGrupo />
                },
                {
                    path: "freelancer/:lcontactoId/:cicloId",
                    element: <VentaGrupo />
                }
            ],
        }
    ];
    return modules;
}