import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IFuncionario } from '../../../../interfaces/funcionarios';
import { Autocomplete, Box, CardMedia, FormControlLabel, Grid, Switch, TextField, Typography } from '@mui/material';
import { Transition } from '../../roles/components/modal-roles';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DeleteIcon from '@mui/icons-material/Delete';
import imagenNoDiponible from '../../../../assets/no-disponible.png'
import { Form, FormikProvider } from 'formik';
import AutoCompleteAsync from '../../../../components/autocomplete-async/autocomplete-async';
import { useAutocompleteAsync } from '../../hooks/useAutoCompleteCargo';
import { GetAllCargoService } from '../../../../services/api-guardian/cargo';
import { Icargo, initialCargo } from '../../../../interfaces/ICargo';
import { useEffect, useState } from 'react';
import { ButtonClose, ButtonSave } from '../../../../components/buttons/buttons';
import { useAuthorizacion } from '../../hooks/useAuthorizacion';
import { useFormikFuncionario } from '../../hooks/useFormikFuncionario';
export interface DataModalFuncionarioProps {
    edit: boolean;
    funcionario: IFuncionario;
}
interface ModalFuncionarioProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (value: IFuncionario) => void;
    data: DataModalFuncionarioProps
}
const ModalFuncionario = ({ onClose, open, data, onSubmit }: ModalFuncionarioProps) => {
    const { edit, funcionario } = data;
    const handleClose = () => {
        onClose();
    };
    const [selectCargo, setSelectCargo] = useState(initialCargo)
    const { formFuncionario } = useFormikFuncionario({ data: funcionario, onEnviar: onSubmit });
    const { values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
        setValues
    } = formFuncionario;

    const isOptionEqualToValueCiclo = (option: Icargo, value: Icargo) => option.cargoId === value.cargoId
    const getOptionLabelCiclo = (option: Icargo) => option.nombreCargo
    const {
        listAutocomplete,
        loadingAutocomplete,
        onLoadAutocomplete,
        openAutocomplete,
        refresListaAutoComplete
    } = useAutocompleteAsync({ apiLista: GetAllCargoService });


    const resetFormulario = () => {
        resetForm();
        setSelectCargo(initialCargo);
        if (edit) {
            setValues(funcionario)
            setSelectCargo({
                cargoId: funcionario.cargoId,
                descripcion: '',
                nombreCargo: 'no definido'
            })
        }
    }

    const validateEmail = (value: string) => {
        const array = value.split('@');
        const alias = array[0];
        setFieldValue('alias', alias)
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
                <FormikProvider value={formFuncionario}>
                    <Form onSubmit={handleSubmit}>
                        <DialogTitle variant='h6' >{edit ? 'Editar usuario' : 'Crear usuario'}</DialogTitle>
                        <DialogContent>
                            <Typography variant='subtitle2' color={'GrayText'}>Registre personas para que pueda acceder al sistema.</Typography>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                            <TextField
                                                size='small'
                                                fullWidth
                                                label="Nro documento"
                                                name="nroDocumento"
                                                placeholder="Nro documento"
                                                value={values.nroDocumento}
                                                onChange={handleChange}
                                                error={Boolean(touched.nroDocumento && errors.nroDocumento)}
                                                helperText={touched.nroDocumento && errors.nroDocumento}
                                                disabled={false}
                                            />
                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                            <TextField
                                                size='small'
                                                fullWidth
                                                label="Fecha ingreso"
                                                name="fechaIngreso"
                                                placeholder="Fecha ingreso"
                                                value={values.fechaIngreso}
                                                onChange={handleChange}
                                                error={Boolean(touched.fechaIngreso && errors.fechaIngreso)}
                                                helperText={touched.fechaIngreso && errors.fechaIngreso}
                                                disabled={true}
                                            />
                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                            <TextField
                                                size='small'
                                                fullWidth
                                                label="Alias"
                                                name="alias"
                                                placeholder="Alias"
                                                value={values.alias}
                                                onChange={handleChange}
                                                error={Boolean(touched.alias && errors.alias)}
                                                helperText={touched.alias && errors.alias}
                                                inputProps={
                                                    { readOnly: true }
                                                }
                                                disabled={false}
                                            />
                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                            <AutoCompleteAsync
                                                defaultValue={selectCargo}
                                                disabled={false}
                                                errors={Boolean(touched.cargoId && errors.cargoId)}
                                                getOptionLabel={getOptionLabelCiclo}
                                                helperText={touched.cargoId && errors.cargoId}
                                                isOptionEqualToValue={isOptionEqualToValueCiclo}
                                                label='Selecione cargo'
                                                loading={loadingAutocomplete}
                                                name='cargoId'
                                                onChange={(event, value) => {
                                                    if (value) {
                                                        setFieldValue('cargoId', value.cargoId)
                                                        setSelectCargo(value)
                                                    }
                                                    else {
                                                        setFieldValue('cargoId', 0)
                                                        setSelectCargo(initialCargo)
                                                    }
                                                }}
                                                onClose={refresListaAutoComplete}
                                                onOpen={onLoadAutocomplete}
                                                open={openAutocomplete}
                                                options={listAutocomplete}
                                                value={selectCargo}
                                            />
                                        </Grid>
                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <TextField
                                                size='small'
                                                fullWidth
                                                label="Email"
                                                name="email"
                                                placeholder="Email"
                                                value={values.email}
                                                onChange={(e) => {
                                                    handleChange(e)
                                                    validateEmail(e.target.value)
                                                }}
                                                error={Boolean(touched.email && errors.email)}
                                                helperText={touched.email && errors.email}
                                                disabled={false}
                                            />
                                        </Grid>
                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <TextField
                                                size='small'
                                                fullWidth
                                                label="Nombre"
                                                name="nombres"
                                                placeholder="Nombre"
                                                value={values.nombres}
                                                onChange={handleChange}
                                                error={Boolean(touched.nombres && errors.nombres)}
                                                helperText={touched.nombres && errors.nombres}
                                                disabled={false}
                                            />
                                        </Grid>
                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <TextField
                                                size='small'
                                                fullWidth
                                                label="Apellidos"
                                                name="apellidos"
                                                placeholder="Apellidos"
                                                value={values.apellidos}
                                                onChange={handleChange}
                                                error={Boolean(touched.apellidos && errors.apellidos)}
                                                helperText={touched.apellidos && errors.apellidos}
                                                disabled={false}
                                            />
                                        </Grid>
                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <TextField
                                                size='small'
                                                fullWidth
                                                label="Observaciones"
                                                name="observaciones"
                                                placeholder="Observaciones"
                                                value={values.observaciones}
                                                onChange={handleChange}
                                                error={Boolean(touched.observaciones && errors.observaciones)}
                                                helperText={touched.observaciones && errors.observaciones}
                                                disabled={false}
                                                multiline
                                                rows={2}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                alt={"alt"}
                                                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                                image={imagenNoDiponible}
                                                title="foto perfil"
                                            />
                                        </Grid>
                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    p: 1,
                                                    m: 0,
                                                }}
                                            >
                                                <Button
                                                    color='success'
                                                    size='small'
                                                    variant="outlined"
                                                    startIcon={<AddAPhotoIcon />}
                                                >
                                                    Cargar
                                                </Button>
                                                <Button
                                                    color='error'
                                                    size='small'
                                                    variant="outlined"
                                                    startIcon={<DeleteIcon />}
                                                >
                                                    Eliminar
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <ButtonClose
                                onclick={onClose}
                            />
                            <ButtonSave />
                        </DialogActions>
                    </Form>
                </FormikProvider>
            </Dialog>
        </React.Fragment>
    );
}
export default ModalFuncionario