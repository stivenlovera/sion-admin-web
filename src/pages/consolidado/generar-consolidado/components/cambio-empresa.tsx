import { Box, Button, Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import { Form, FormikProvider } from 'formik'
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import { IFiltroFacturacionConsolidado, useFormikFactucionConsolidado } from '../../consolidado/hooks/useFormikFactucionConsolidado'
import { useEffect } from 'react';
import { useSnackbar } from 'notistack';

interface useFormikFacturacionConsolidadProps {
    comisionConsolidadoId: number;
    onEnviar: (value: IFiltroFacturacionConsolidado) => void
}
const CambioEmpresa = ({ comisionConsolidadoId, onEnviar }: useFormikFacturacionConsolidadProps) => {
    const { enqueueSnackbar } = useSnackbar();
    const { formFiltroFacturacionConsolidado } = useFormikFactucionConsolidado({ comisionConsolidadoId, onEnviar });
    const {
        isValid,
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
        setValues,

    } = formFiltroFacturacionConsolidado;

    useEffect(() => {
        setFieldValue('comisionConsolidadoId', comisionConsolidadoId)
    }, [comisionConsolidadoId])

    //generar consolidado
    const enviarData = (e: React.FormEvent<HTMLFormElement>) => {
        if (isValid) {
            handleSubmit(e);
        } else {
            enqueueSnackbar({ message: 'Seleccione un consolidado', variant: 'warning', autoHideDuration: 3000 });
        }
    }
    return (
        <FormikProvider value={formFiltroFacturacionConsolidado} >
            <Form onSubmit={enviarData}>
                <Paper style={{ position: 'relative' }}>
                    <Typography
                        sx={{ p: 1, flexGrow: 1 }} variant="subtitle1" style={{ fontWeight: 'bold' }}>
                        Generar facturacion consolidado
                    </Typography>
                    <Divider />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            p: 2,
                            m: 0,
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start'
                                }}>
                                    <Button
                                        fullWidth
                                        color='success'
                                        variant="contained"
                                        startIcon={<PriceChangeIcon />}
                                        disabled={false}
                                        type='submit'
                                    >
                                        Generar pago consolidado
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end'
                                }}>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper >
            </Form>
        </FormikProvider>
    )
}

export default CambioEmpresa
