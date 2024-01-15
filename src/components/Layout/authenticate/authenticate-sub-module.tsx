import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import { IAuthentication, IModulos } from "../../../services/Intefaces/IAuthenticacion";
interface AuthenticateSubModuloProps {
    subModulo: string;
}
const AuthenticateSubModulo = ({ subModulo }: AuthenticateSubModuloProps) => {
    const context: IModulos = useOutletContext();
    const authorizado = context.subModulo.find(x => { return x.nombre == subModulo });
    console.log('contexto submodulo',context)
    if (authorizado != undefined) {

        return <Outlet context={authorizado} />
    } else {
        return <Navigate to="/" />
    }
}

export default AuthenticateSubModulo
