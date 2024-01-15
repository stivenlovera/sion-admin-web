import ModalStandar from '../../../../components/modal-standar/modal-standar'
import { Form, FormikProvider } from 'formik';
import { DialogActions, DialogContent, DialogTitle, Grid, Paper, TextField, Typography } from '@mui/material';
import { ButtonClose, ButtonSave } from '../../../../components/buttons/buttons';
import { HistorialConsolidado } from '../hooks/useModalGenerarConsolidado';
import { useFormModalConsolidado } from '../hooks/useFormModalConsolidado';
import AutoCompleteAsync from '../../../../components/autocomplete-async/autocomplete-async';
import { useAutocompleteAsync } from '../../../configuracion/hooks/useAutoCompleteCargo';
import { useEffect } from 'react';
import { IEstadoReporte, initilalStateEstadoReporte } from '../../../../interfaces/IEstadoReporte';
import { listEstadoReporte } from '../../../../services/api-guardian/estadoReporte';

interface ModalGenerarConsolidadoProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (value: HistorialConsolidado) => void;
    data: HistorialConsolidado
}
const ModalGenerarConsolidado = ({ open, onClose, onSubmit, data }: ModalGenerarConsolidadoProps) => {
    const { formHistorialConsolidado } = useFormModalConsolidado({ data: data, onEnviar: onSubmit });
    const {
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
        setValues
    } = formHistorialConsolidado;


    const isOptionEqualToValueEstadoReporte = (option: IEstadoReporte, value: IEstadoReporte) => option.estadoReporteId === value.estadoReporteId
    const getOptionLabelEstadoReporte= (option: IEstadoReporte) => option.nombreEstado
    const {
        listAutocomplete,
        loadingAutocomplete,
        onLoadAutocomplete,
        openAutocomplete,
        refresListaAutoComplete
    } = useAutocompleteAsync({ apiLista: listEstadoReporte });

    useEffect(() => {
        setFieldValue('dataTable', data.dataTable)
    }, [open])

    return (
        <ModalStandar
            maxWidth='md'
            open={open}
            onClose={onClose}
        >
            <FormikProvider value={formHistorialConsolidado}>
                <Form onSubmit={(e) => { console.log(errors, values); handleSubmit(e) }}>
                    <DialogTitle variant="subtitle1"  style={{ fontWeight: 'bold' }}>Guardar consolidado</DialogTitle>
                    <DialogContent>
                        <Typography variant='subtitle2' color={'GrayText'}>Asegurese de seleccionar los registros que desea guardar como consolidado</Typography>
                        <br />
                        <Grid container spacing={2}>
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                <TextField
                                    size='small'
                                    fullWidth
                                    label="Nombre"
                                    name="nombre"
                                    placeholder="Nombre"
                                    value={values.nombre}
                                    onChange={handleChange}
                                    error={Boolean(touched.nombre && errors.nombre)}
                                    helperText={touched.nombre && errors.nombre}
                                />
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                <AutoCompleteAsync
                                    defaultValue={values.estadoReporte}
                                    disabled={false}
                                    errors={Boolean(touched.estadoReporte && errors.estadoReporte)}
                                    getOptionLabel={getOptionLabelEstadoReporte}
                                    helperText={touched?.estadoReporte?.nombreEstado && errors?.estadoReporte?.nombreEstado}
                                    isOptionEqualToValue={isOptionEqualToValueEstadoReporte}
                                    label='Seleccione estado'
                                    loading={loadingAutocomplete}
                                    name='estadoReporte'
                                    onChange={(event, val) => {
                                        if (val) {
                                            setFieldValue('estadoReporte', val)
                                        }
                                        else {
                                            setFieldValue('estadoReporte', initilalStateEstadoReporte)
                                        }
                                    }}
                                    onClose={refresListaAutoComplete}
                                    onOpen={onLoadAutocomplete}
                                    open={openAutocomplete}
                                    options={listAutocomplete}
                                    value={values.estadoReporte}
                                />
                            </Grid>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <TextField
                                    size='small'
                                    fullWidth
                                    label="Descripcion"
                                    name="descripcion"
                                    placeholder="Descripcion"
                                    value={values.descripcion}
                                    onChange={handleChange}
                                    error={Boolean(touched.descripcion && errors.descripcion)}
                                    helperText={touched.descripcion && errors.descripcion}
                                />
                            </Grid>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
                                    <Typography> {data.dataTable.length} regisros seleccionados para guardar como consolidado.</Typography>
                                </Paper>
                            </Grid>

                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <ButtonSave />
                        <ButtonClose
                            onclick={() => {
                                onClose();
                                resetForm();
                            }}
                        />
                    </DialogActions>
                </Form>
            </FormikProvider>
        </ModalStandar>
    )
}

export default ModalGenerarConsolidado
