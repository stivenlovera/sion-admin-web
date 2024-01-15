import React from 'react'
import ModalStandar from '../../../components/modal-standar/modal-standar';
import { Form, FormikProvider } from 'formik';
import { DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from '@mui/material';
import { useFormikEmpresa } from '../hooks/useFormEmpresa';
import { ButtonClose, ButtonSave } from '../../../components/buttons/buttons';
import { DataModalEmpresaProps, IEmpresa } from '../../../interfaces/IEmpresa';

interface ModalEmpresaProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (value: IEmpresa) => void;
    data: DataModalEmpresaProps
}
const ModalEmpresa = ({ onClose, open, data, onSubmit }: ModalEmpresaProps) => {
    const { empresa, edit } = data;
    const { formEmpresa } = useFormikEmpresa({ data: empresa, onEnviar: onSubmit });
    const {
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
        setValues
    } = formEmpresa;
    return (
        <ModalStandar
            maxWidth='md'
            open={open}
            onClose={onClose}
        >
            <FormikProvider value={formEmpresa}>
                <Form onSubmit={onClose}>
                    <DialogTitle variant='h6'>{edit ? 'Editar empresa' : 'Crear empresa'}</DialogTitle>
                    <DialogContent>
                        <Typography variant='subtitle2' color={'GrayText'}>Registre informacion de una empresa.</Typography>
                        <br />
                        <Grid container spacing={2}>
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                <TextField
                                    size='small'
                                    fullWidth
                                    label="Empresa"
                                    name="empresa"
                                    placeholder="Empresa"
                                    value={values.empresa}
                                    onChange={handleChange}
                                    error={Boolean(touched.empresa && errors.empresa)}
                                    helperText={touched.empresa && errors.empresa}
                                />
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                <TextField
                                    size='small'
                                    fullWidth
                                    label="Nit"
                                    name="snit"
                                    placeholder="Nit"
                                    value={values.snit}
                                    onChange={handleChange}
                                    error={Boolean(touched.snit && errors.snit)}
                                    helperText={touched.snit && errors.snit}
                                />
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                <TextField
                                    size='small'
                                    fullWidth
                                    label="Descripción"
                                    name="snommbre"
                                    placeholder="Descripción"
                                    value={values.snombre}
                                    onChange={handleChange}
                                    error={Boolean(touched.snombre && errors.snombre)}
                                    helperText={touched.snombre && errors.snombre}
                                />
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                <TextField
                                    size='small'
                                    fullWidth
                                    label="Fecha registro"
                                    name="fechaCreacion"
                                    placeholder="Fecha registro"
                                    value={values.fechaCreacion}
                                    onChange={handleChange}
                                    error={Boolean(touched.fechaCreacion && errors.fechaCreacion)}
                                    helperText={touched.fechaCreacion && errors.fechaCreacion}
                                    disabled={true}
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
        </ModalStandar>
    )
}

export default ModalEmpresa
