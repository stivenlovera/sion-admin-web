import { Box, Card, CardActionArea, CardContent, Grid, Skeleton, Stack, Tooltip, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
import './card.css'
import { IconosColores } from "./config";

const LoadCard = () => {
    return (
        <Grid container item sm={3} sx={{ p: 1 }}  >
            <Grid container item lg={12} style={{ marginBottom: 25 }} >
                <Stack spacing={1} sx={{ minWidth: '100%' }} style={{ alignItems: "center" }} >
                    <Skeleton variant="rounded" sx={{ width: '100%' }} height={90} />
                </Stack>
            </Grid>
        </Grid>
    )
}

export interface CardMenuResumenProps {
    color: string;
    valor: string;
    descripcion: string;
    icon: string;
    estado: boolean;
    route: string;
}

const CardMenuResumen = ({ color, descripcion, valor, icon, estado, route }: CardMenuResumenProps) => {
    const iconsColor = IconosColores(icon, color);
    const text = `Click para detalle de  ${descripcion}`;
    return (
        estado ? (<LoadCard />) : (
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3} >
                <Grid container >
                    <Tooltip title={text} arrow>
                        <Card sx={{ minWidth: '100%' }} style={{ background: iconsColor.color }} className="card" >
                            <CardActionArea component={Link} to={route}>
                                <CardContent sx={{ display: 'flex' }} style={{ padding: 0 }}>
                                    {iconsColor.icon}
                                    <Box style={{ width: '100%' }}>
                                        <CardContent>
                                            <Typography variant="h6" style={{ margin: 0, textAlign: 'center', fontWeight: 'bold', color: "white" }}>{valor}</Typography>
                                            <Typography variant="body2" style={{ margin: 0, textAlign: 'center', color: "white" }}>{descripcion}</Typography>
                                        </CardContent>
                                    </Box>
                                </CardContent>
                            </CardActionArea >
                        </Card>
                    </Tooltip>
                </Grid>
            </Grid >)
    );
}

export default CardMenuResumen;