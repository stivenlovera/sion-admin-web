import React from 'react'
import { useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from "react-redux";
import LoadingButton from '@mui/lab/LoadingButton';

import { useNavigate } from "react-router-dom";
import { setToken } from '../../Reducers/Slices/LoginSlice';
import { Box, Container } from '@mui/system';
import { Avatar, Card, CardContent, CssBaseline, FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { loginDto } from '../../interfaces/ILogin';
import { login } from '../../services/api-guardian/authenticacion';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { enqueueSnackbar } from 'notistack';
import { useAuthenticate } from './hooks/useAuthenticate';


const initialLogin: loginDto = {
    browserVersion: '',
    browserName: '',
    osName: '',
    password: '',
    usuario: '',
    mobile: false
}
const Login = () => {
    const [loading, setLoading] = useState(false);
    const { onLogin } = useAuthenticate();
    const {
        values,
        handleSubmit,
        handleBlur,
        handleChange,
        handleReset,
        touched,
        errors,
        setErrors
    } = useFormik({
        initialValues: initialLogin,
        onSubmit: async (value: loginDto) => {
            setLoading(true);
            await onLogin(value);
            setLoading(false)
        },
        validationSchema: Yup.object({
            usuario: Yup.string()
                .min(5, 'El valor debe ser almenos 3 caracteres')
                .required('Usuario es requerido!'),
            password: Yup.string()
                .min(5, 'El valor debe ser almenos 3 caracteres')
                .required('Contraseña es requerido!'),
        })
    });

    const [showPassword, setShowPassword] = useState(true);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (<Container component="main"
        maxWidth={false}
        sx={{
            backgroundImage: `url("/img/fondo.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        }}>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh" //100vh

        >
            <Card sx={{ maxWidth: 380 }} >
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                        <LockOutlinedIcon />
                                    </Avatar>
                                    <Typography component="h1" variant="h5" style={{ fontWeight: 'bold' }}>
                                        GESTION COMISIONES
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <TextField
                                    size='small'
                                    fullWidth
                                    label="Usuario"
                                    name="usuario"
                                    autoComplete="off"
                                    autoFocus
                                    value={values.usuario}
                                    onChange={handleChange}
                                    error={Boolean(touched.usuario && errors.usuario)}
                                    helperText={touched.usuario && errors.usuario}
                                    disabled={loading}
                                />
                            </Grid>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel size='small' htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        id="outlined-adornment-password"
                                        size='small'
                                        type={showPassword ? 'password' : 'text'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    disabled={loading}
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                        name='password'
                                        onChange={handleChange}
                                        disabled={loading}
                                        error={Boolean(touched.password && errors.password)}
                                    //helperText={touched.usuario && errors.usuario}
                                    />
                                    {(touched.password && errors.password) && (
                                        <FormHelperText error id="accountId-error">
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                                <p style={{ fontSize: '14px' }}>

                                </p>
                                <LoadingButton
                                    type="submit"
                                    loading={loading}
                                    fullWidth
                                    variant="contained"
                                >
                                    <span>INGRESAR</span>
                                </LoadingButton>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Box>
    </Container >)
}

export default Login
