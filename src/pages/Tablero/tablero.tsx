import { Box, Card, Grid, Paper } from "@mui/material"
import LoaderPage from "../../components/loader-page/loader-page"
import { useState } from "react"
import { Cbreadcrumbs } from "../../components/cbreadcrumbs/cbreadcrumbs";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CardMenu from "./components/card-menu/card-menu";
import MonteSionCard from "./components/card-menu-extra/monte-sion";
import BonoLiderazgo from "./components/card-menu-extra/bono-liderazgo";
import MejoresVendedores from "./components/mejores-vendedores/mejores-vendedores";
import FreelancerNuevo from "./components/freelancer-nuevo/freelancer-nuevo";
import ConsolidadoMes from "./components/consolidado/consolidado";
import IncetivoMes from "./components/incentivo-mes/incentivo-mes";
import VentasMesLineal from "./components/ventas-mes-lineal/ventas-mes-lineal";

const Tablero = () => {
    const [loadPage, setLoadPage] = useState(false);
    return (
        <Grid container spacing={2}>
            <LoaderPage
                load={loadPage}
            />
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Cbreadcrumbs icon={<DashboardIcon />} nombreRoute='Tablero' nombresRoutes={[]} route='#' routes={[]} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid container spacing={2}>
                    <CardMenu />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <MonteSionCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <BonoLiderazgo />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                <VentasMesLineal />
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                <MejoresVendedores />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <FreelancerNuevo />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <ConsolidadoMes />
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                <IncetivoMes />
            </Grid>

        </Grid>
    )
}

export default Tablero
