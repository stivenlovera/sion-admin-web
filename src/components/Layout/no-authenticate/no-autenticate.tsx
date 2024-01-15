import { Link, Outlet} from "react-router-dom";

const NoAuthenticate = () => {
/*     const { id } = useParams();
    const context: String = useOutletContext(); */
    return (
        <div>
            <Outlet context={{ hello: "world" }} />
        </div>
    )
}

export default NoAuthenticate
