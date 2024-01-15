import * as React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControlLabel, Grid, Switch, TextField, Typography } from '@mui/material';
import { Form, FormikProvider } from 'formik';
import { useEffect, useState } from 'react';
import { ICiclo } from '../../../interfaces/ICiclo';
import { useFormikCiclo } from '../hook/useFormikCiclo';
import { Transition } from '../../configuracion/roles/components/modal-roles';
import { ButtonClose, ButtonSave } from '../../../components/buttons/buttons';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export interface DataModalICicloProps {
    edit: boolean;
    ciclo: ICiclo;
}
interface ModalCicloProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (value: ICiclo) => void;
    data: DataModalICicloProps
}
const ModalCiclo = ({ onClose, open, data, onSubmit }: ModalCicloProps) => {
    const { edit, ciclo } = data;
    const handleClose = () => {
        onClose();
    };

    const { formCiclo } = useFormikCiclo({ data: ciclo, onEnviar: onSubmit });
    const { values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
        setValues
    } = formCiclo;

    const resetFormulario = () => {
        resetForm();
        if (edit) {
            setValues(ciclo)
        }
    }
    useEffect(() => {
        resetFormulario()
    }, [open])

    return (
        <React.Fragment>
            <Dialog
                TransitionComponent={Transition}
                fullWidth={true}
                maxWidth={'md'}
                open={open}
                onClose={handleClose}
            >
                <FormikProvider value={formCiclo}>
                    <Form onSubmit={handleSubmit}>
                        <DialogTitle variant='h6' >{edit ? 'Editar ciclo' : 'Crear ciclo'}</DialogTitle>
                        <DialogContent>
                            <Typography variant='subtitle2' color={'GrayText'} sx={{ mb: 2 }}>
                                Registre y gestione ciclo.
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <TextField
                                        size='small'
                                        fullWidth
                                        label="Nombre"
                                        name="snombre"
                                        placeholder="Nombre"
                                        value={values.snombre}
                                        onChange={handleChange}
                                        error={Boolean(touched.snombre && errors.snombre)}
                                        helperText={touched.snombre && errors.snombre}
                                        disabled={true}
                                    />
                                </Grid>
                                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <DatePicker
                                            disabled
                                            label="Fecha cierre (ultima modificacion)"
                                            value={dayjs(values.dtfechacierre)}
                                            format='DD/MM/YYYY'
                                            onChange={(newValue) => setFieldValue('dtfechacierre', newValue)}
                                            slotProps={{
                                                textField: {
                                                    size: 'small',
                                                    fullWidth: true,
                                                    name: "dtfechacierre",
                                                    error: Boolean(touched.dtfechacierre && errors.dtfechacierre),
                                                    helperText: touched.dtfechacierre && errors.dtfechacierre,
                                                    disabled: false
                                                }
                                            }}
                                        />
                                </Grid>
                                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <DatePicker
                                            label="Fecha inicio"
                                            value={dayjs(values.dtfechainicio == '' ? null : values.dtfechainicio)}
                                            onChange={(newValue) => setFieldValue('dtfechainicio', newValue?.format('YYYY-MM-DD'))}
                                            slotProps={{
                                                textField: {
                                                    size: 'small',
                                                    fullWidth: true,
                                                    name: "dtfechainicio",
                                                    error: Boolean(touched.dtfechainicio && errors.dtfechainicio),
                                                    helperText: touched.dtfechainicio && errors.dtfechainicio,
                                                    disabled: false
                                                }
                                            }}
                                        />
                                  
                                </Grid>
                                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                  
                                        <DatePicker
                                            label="Fecha fin"
                                            value={dayjs(values.dtfechafin == '' ? null : values.dtfechafin)}
                                            onChange={(newValue) => setFieldValue('dtfechafin', newValue?.format('YYYY-MM-DD'))}
                                            slotProps={{
                                                textField: {
                                                    size: 'small',
                                                    fullWidth: true,
                                                    name: "dtfechafin",
                                                    error: Boolean(touched.dtfechafin && errors.dtfechafin),
                                                    helperText: touched.dtfechafin && errors.dtfechafin,
                                                    disabled: false
                                                }
                                            }}
                                        />
                                </Grid>
                                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={values.lestado == 0 ? true : false}
                                                name='lestado'
                                                size="medium"
                                                value={values.lestado}
                                                onChange={(a) => {
                                                    if (a.target.checked) {
                                                        setFieldValue('lestado', 0);
                                                    } else {
                                                        setFieldValue('lestado', 1);
                                                    }
                                                }} />
                                        }
                                        label={values.lestado == 1 ? 'Ciclo cerrado' : 'Ciclo abierto'}
                                    />
                                </Grid>
                                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                    
                                        <DatePicker
                                            label="Fecha pre-cierre 1"
                                            value={dayjs(values.dtfechaprecierre1 == '' ? null : values.dtfechaprecierre1)}
                                            onChange={(newValue) => setFieldValue('dtfechaprecierre1', newValue?.format('YYYY-MM-DD'))}
                                            slotProps={{
                                                textField: {
                                                    size: 'small',
                                                    fullWidth: true,
                                                    name: "dtfechaprecierre1",
                                                    error: Boolean(touched.dtfechaprecierre1 && errors.dtfechaprecierre1),
                                                    helperText: touched.dtfechaprecierre1 && errors.dtfechaprecierre1,
                                                    disabled: false
                                                }
                                            }}
                                        />
                                </Grid>
                                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={values.cverenweb == '1' ? true : false}
                                                name='cverenweb'
                                                size="medium"
                                                value={values.cverenweb}
                                                onChange={(a) => {
                                                    if (a.target.checked) {
                                                        setFieldValue('cverenweb', '1');
                                                    } else {
                                                        setFieldValue('cverenweb', '0');
                                                    }
                                                }} />
                                        }
                                        label={values.cverenweb == '1' ? 'Activar en la web' : 'Desactivar en la web'}
                                    />
                                </Grid>
                                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <DatePicker
                                            label="Fecha pre-cierre 2"
                                            value={dayjs(values.dtfechaprecierre2 == '' ? null : values.dtfechaprecierre2)}
                                            onChange={(newValue) => setFieldValue('dtfechaprecierre2', newValue?.format('YYYY-MM-DD'))}
                                            slotProps={{
                                                textField: {
                                                    size: 'small',
                                                    fullWidth: true,
                                                    name: "dtfechaprecierre2",
                                                    error: Boolean(touched.dtfechaprecierre2 && errors.dtfechaprecierre2),
                                                    helperText: touched.dtfechaprecierre2 && errors.dtfechaprecierre2,
                                                    disabled: false
                                                }
                                            }}
                                        />
                                    
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <ButtonSave />
                            <ButtonClose
                                onclick={onClose}
                            />
                        </DialogActions>
                    </Form>
                </FormikProvider>
            </Dialog>
        </React.Fragment>
    );
}
export default ModalCiclo