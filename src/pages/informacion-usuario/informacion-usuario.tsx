import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { Cbreadcrumbs } from '../../components/cbreadcrumbs/cbreadcrumbs'
import 'dayjs/locale/es';
import dayjs from 'dayjs'
import { useOutletContext } from 'react-router-dom';
import { IAuthentication, IModulos } from '../../services/Intefaces/IAuthenticacion';

dayjs.locale("es");

const IndexInformacionUsuario = () => {
    const context  = useOutletContext<IAuthentication>();
    
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} lg={12} md={12}>
                {/*  <Cbreadcrumbs icon={<WorkIcon />} nombreRoute='Lista complejo' nombresRoutes={[]} route='#' routes={[]} /> */}
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {`${dayjs().format('dddd, DD')} de ${dayjs().format('MMMM')} de ${dayjs().format('YYYY')}`}
                        </Typography>
                        <Typography variant="h5" component="div">
                            Bienvenido, {context.nombre} {context.apellido}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {context.cargo}
                        </Typography>
                        <Typography variant="body2">
                            Sistema de gestion comisiones.
                        </Typography>
                    </CardContent>
                    {/*  <CardActions>
                        <Button size="small"></Button>
                    </CardActions> */}
                </Card>
            </Grid>
        </Grid>

    )
}

export default IndexInformacionUsuario
