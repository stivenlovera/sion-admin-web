import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Autocomplete, Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Transition } from '../../roles/components/modal-roles';
import { useFormikAutorizacion } from '../../hooks/useFormikAutorizacio';
import { Form, FormikProvider } from 'formik';
import { ModalAccesosProps } from './modal-roles';
import { ButtonClose, ButtonSave } from '../../../../components/buttons/buttons';
import { IRol } from '../../../../interfaces/roles';
import { useAutocompleteAsync } from '../../hooks/useAutoCompleteCargo';
import { GetAllRolService } from '../../../../services/api-guardian/rol';
import { AutoCompleteMultipleAsync } from '../../../../components/autocomplete-async/autocomplete-async-multiple';
import ModalStandar from '../../../../components/modal-standar/modal-standar';

export const ModalAccesos = ({ onClose, open, data, onSubmit }: ModalAccesosProps) => {
    const { autorizacion, edit } = data;
    const [showPassword, setShowPassword] = useState(true);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const isOptionEqualToValueCiclo = (option: IRol, value: IRol) => option.rolId === value.rolId
    const getOptionLabelCiclo = (option: IRol) => option.nombreRol
    const {
        listAutocomplete,
        loadingAutocomplete,
        onLoadAutocomplete,
        openAutocomplete,
        refresListaAutoComplete
    } = useAutocompleteAsync({ apiLista: GetAllRolService });

    const { formAutorizacion } = useFormikAutorizacion({ data: autorizacion, onEnviar: onSubmit });
    const {
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
        setValues
    } = formAutorizacion;

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleClose = () => {
        onClose();
    };
    const inizialize = () => {
        if (edit) {
            setValues(autorizacion);
        }
    };
    useEffect(() => {
        inizialize()
    }, [open]);

    return (
        <ModalStandar
            maxWidth='md'
            open={open}
            onClose={handleClose}
        >
            <FormikProvider value={formAutorizacion}>
                <Form onSubmit={handleSubmit}>
                    <DialogTitle variant='h6'>{edit ? 'Editar acceso' : 'Crear acceso'}</DialogTitle>
                    <DialogContent>
                        <Typography variant='subtitle2' color={'GrayText'}>Asigne usuario y contraseña y selecione roles para que pueda acceder al sistemas.</Typography>
                        <br />
                        <Grid container spacing={2}>
                            <Grid item xs={4} lg={4} md={4}>
                                <TextField
                                    size='small'
                                    fullWidth
                                    label="Usuario"
                                    name="usuario"
                                    placeholder="Usuario"
                                    value={values.usuario}
                                    onChange={handleChange}
                                    error={Boolean(touched.usuario && errors.usuario)}
                                    helperText={touched.usuario && errors.usuario}
                                    disabled={values.activo == 1 ? false : true}
                                />
                            </Grid>
                            <Grid item xs={4} lg={4} md={4}>
                                <FormControl variant="outlined">
                                    <InputLabel size='small' htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        size='small'
                                        name="password"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange}
                                        error={Boolean(touched.password && errors.password)}
                                        type={showPassword ? 'password' : 'text'}
                                        disabled={(values.activo == 1) ? false : true}
                                        endAdornment={<InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                disabled={(values.activo == 1) ? false : true}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>}
                                        label="Password" />
                                    {!!errors.password && (
                                        <FormHelperText error id="username-error">
                                            {touched.password && errors.password}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} lg={4} md={4}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox checked={values.activo == 1 ? true : false} />}
                                        label={values.activo == 1 ? 'Acceso activo' : 'Acceso bloqueado'}
                                        name='activo'
                                        value={values.activo}
                                        onChange={(event, checked) => {
                                            if (checked) {
                                                setFieldValue('activo', '1');
                                            } else {
                                                setFieldValue('activo', '0');
                                            }
                                        }}
                                    />
                                </FormGroup>
                            </Grid>
                            <Grid item xs={12} lg={12} md={12}>
                                <AutoCompleteMultipleAsync
                                    defaultValue={values.roles}
                                    errors={Boolean(touched.roles && errors.roles)}
                                    getOptionLabel={getOptionLabelCiclo}
                                    //helperText={errors?.roles}
                                    isOptionEqualToValue={isOptionEqualToValueCiclo}
                                    label='Selecione rol'
                                    loading={loadingAutocomplete}
                                    name='roles'
                                    onChange={(event, value) => {
                                        if (value) {
                                            setFieldValue('roles', value)
                                        }
                                        else {
                                            setFieldValue('roles', [])
                                        }
                                    }}
                                    onClose={refresListaAutoComplete}
                                    onOpen={onLoadAutocomplete}
                                    open={openAutocomplete}
                                    options={listAutocomplete}
                                    value={values.roles}
                                    disabled={(values.activo == 1) ? false : true}
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
    );
};
