import React, { useEffect, useRef, useState } from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, CardMedia, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import NoImagen from '../../../assets/blank.png'
import { ConvertToBase64 } from '../../../utils/ConvertToBase64';
import { IFormAsesor } from '../hooks/useFormikAsesor';
import { FormikErrors, FormikTouched } from 'formik';
import { handleImageUpload } from '../../../utils/compresionImagen';
interface FormAdicionalesProps {
    values: IFormAsesor;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
    touched: FormikTouched<IFormAsesor>,
    errors: FormikErrors<IFormAsesor>
    handleChange: {
        (e: React.ChangeEvent<any>): void;
        <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    };
}
const FormAdicionales = ({ values, setFieldValue, touched, errors, handleChange }: FormAdicionalesProps) => {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const ProcesarFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files);
        const files = e.target.files;
        const archivo = files![0];
        if (archivo != null) {
            const compresionImagen = await handleImageUpload(archivo);
            const base64 = await ConvertToBase64(compresionImagen!) as string;
            setFieldValue('contactoPerfil.imgPerfil', base64)
            console.log(base64)
        }
    }
    const OnRecibirImagen = () => {
        inputFileRef.current?.click();
    }
    const OnDeleteImagen = () => {
        setFieldValue('contactoPerfil.imgPerfil', '')
    }

    useEffect(() => {

    }, [values])

    return (
        <>
            <Paper style={{ position: 'relative' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 1,
                        m: 0,
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                Datos adicionales
                            </Typography>
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        alt={"alt"}
                                        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                        image={values.contactoPerfil.imgPerfil == '' ? NoImagen : values.contactoPerfil.imgPerfil}
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
                                            onClick={OnRecibirImagen}
                                        >
                                            Cargar imagen
                                        </Button>
                                        <input type="file" ref={inputFileRef} onChange={(e) => ProcesarFile(e)} hidden />
                                        <Button
                                            color='error'
                                            size='small'
                                            variant="outlined"
                                            startIcon={<DeleteIcon />}
                                            onClick={OnDeleteImagen}
                                        >
                                            Eliminar imagen
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <TextField
                                autoComplete="off"
                                fullWidth
                                size='small'
                                label="Comentarios"
                                name={'asesor.sotro'}
                                onChange={handleChange}
                                value={values.asesor.sotro}
                                error={Boolean(touched.asesor?.sotro && errors.asesor?.sotro)}
                                helperText={touched.asesor?.sotro && errors.asesor?.sotro}
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <FormControl size="small" fullWidth>
                                <InputLabel >Tiene cuenta</InputLabel>
                                <Select
                                    autoComplete="off"
                                    value={values.asesor.ctienecuenta}
                                    label="Tiene cuenta"
                                    onChange={handleChange}
                                    name={'asesor.ctienecuenta'}
                                >
                                    <MenuItem value={'0'}>No tiene cuenta</MenuItem>
                                    <MenuItem value={'1'}>Cuenta de banco dolares</MenuItem>
                                    <MenuItem value={'2'}>Cuentas de banco bolivianos</MenuItem>
                                    <MenuItem value={'3'}>Sion pay</MenuItem>
                                    <MenuItem value={'4'}>Pago a terceros</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Cuenta banco"
                                name={'asesor.lcuentabanco'}
                                onChange={handleChange}
                                value={values.asesor.lcuentabanco}
                                error={Boolean(touched.asesor?.lcuentabanco && errors.asesor?.lcuentabanco)}
                                helperText={touched.asesor?.lcuentabanco && errors.asesor?.lcuentabanco}
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Codigo bancario"
                                name={'asesor.lcodigobanco'}
                                onChange={handleChange}
                                value={values.asesor.lcodigobanco}
                                error={Boolean(touched.asesor?.lcodigobanco && errors.asesor?.lcodigobanco)}
                                helperText={touched.asesor?.lcodigobanco && errors.asesor?.lcodigobanco}
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Dado de baja" />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    )
}

export default FormAdicionales
