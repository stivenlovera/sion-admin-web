import React, { ReactNode } from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, CardMedia, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import { IFormAsesor } from '../hooks/useFormikAsesor';
import { FormikErrors, FormikTouched } from 'formik';
import moment from 'moment';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import AutoCompleteAsync from '../../../components/autocomplete-async/autocomplete-async';
import { IPais, initialStateIPais } from '../../../interfaces/IPais';
import { useAutocompleteAsync } from '../../configuracion/hooks/useAutoCompleteCargo';
import { ObtenerTodoPais } from '../../../services/api-guardian/pais';
import { ObtenerTodoNiveles } from '../../../services/api-guardian/nivel';
import { INivel } from '../../../interfaces/INivel';
import { ObtenerTodoAsesoresSelect } from '../../../services/api-guardian/asesor';
import { IAsesor, initialStateIAsesor } from '../../../interfaces/IAsesor';
interface FormDatosProps {
    values: IFormAsesor;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
    touched: FormikTouched<IFormAsesor>,
    errors: FormikErrors<IFormAsesor>
    handleChange: {
        (e: React.ChangeEvent<any>): void;
        <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    };
}
const FormDatos = ({ errors, handleChange, setFieldValue, touched, values }: FormDatosProps) => {

    const isOptionEqualToValuePais = (option: IPais, value: IPais) => option.lPaisId === value.lPaisId
    const getOptionLabelPais = (option: IPais) => option.snombre
    const {
        listAutocomplete,
        loadingAutocomplete,
        onLoadAutocomplete,
        openAutocomplete,
        refresListaAutoComplete
    } = useAutocompleteAsync({ apiLista: ObtenerTodoPais });

    const isOptionEqualToValueNivel = (option: INivel, value: INivel) => option.lnivelId === value.lnivelId
    const getOptionLabelNivel = (option: INivel) => option.snombre
    const {
        listAutocomplete: listAutocompleteNivel,
        loadingAutocomplete: loadingAutocompleteNivel,
        onLoadAutocomplete: onLoadAutocompleteNivel,
        openAutocomplete: openAutocompleteNivel,
        refresListaAutoComplete: refresListaAutoCompleteNivel
    } = useAutocompleteAsync({ apiLista: ObtenerTodoNiveles });

    const isOptionEqualToValueAsesor = (option: IAsesor, value: IAsesor) => option.lcontactoId === value.lcontactoId
    const getOptionLabelAsesor = (option: IAsesor) => option.snombrecompleto
    const {
        listAutocomplete: listAutocompleteAsesor,
        loadingAutocomplete: loadingAutocompleteAsesor,
        onLoadAutocomplete: onLoadAutocompleteAsesor,
        openAutocomplete: openAutocompleteAsesor,
        refresListaAutoComplete: refresListaAutoCompleteAsesor
    } = useAutocompleteAsync({ apiLista: ObtenerTodoAsesoresSelect });


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
                                Datos
                            </Typography>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Codigo"
                                name={'asesor.scodigo'}
                                onChange={handleChange}
                                value={values.asesor.scodigo}
                                error={Boolean(touched.asesor?.scodigo && errors.asesor?.scodigo)}
                                helperText={touched.asesor?.scodigo && errors.asesor?.scodigo}
                                disabled={true}
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Fecha registro"
                                onChange={handleChange}
                                name={'asesor.dtfecharegistro'}
                                value={moment(values.asesor.dtfecharegistro).format('DD/MM/YYYY')}
                                error={Boolean(touched.asesor?.dtfecharegistro && errors.asesor?.dtfecharegistro)}
                                //helperText={(touched.asesor?.dtfecharegistro && errors.asesor?.dtfecharegistro) == undefined ? '' : errors.asesor?.dtfecharegistro}
                                disabled={true}
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Nombre Completo"
                                onChange={handleChange}
                                name={'asesor.snombrecompleto'}
                                value={values.asesor.snombrecompleto}
                                error={Boolean(touched.asesor?.snombrecompleto && errors.asesor?.snombrecompleto)}
                                helperText={touched.asesor?.snombrecompleto && errors.asesor?.snombrecompleto}
                            //disabled={false}
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Nro identidad"
                                onChange={handleChange}
                                name={'asesor.scedulaidentidad'}
                                value={values.asesor.scedulaidentidad}
                                error={Boolean(touched.asesor?.scedulaidentidad && errors.asesor?.scedulaidentidad)}
                                helperText={touched.asesor?.scedulaidentidad && errors.asesor?.scedulaidentidad}
                            //disabled={true}
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Nit"
                                onChange={handleChange}
                                name={'asesor.lnit'}
                                value={values.asesor.lnit}
                                error={Boolean(touched.asesor?.lnit && errors.asesor?.lnit)}
                                helperText={touched.asesor?.lnit && errors.asesor?.lnit}
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Telefono movil"
                                onChange={handleChange}
                                name={'asesor.stelefonomovil'}
                                value={values.asesor.stelefonomovil}
                                error={Boolean(touched.asesor?.stelefonomovil && errors.asesor?.stelefonomovil)}
                                helperText={touched.asesor?.stelefonomovil && errors.asesor?.stelefonomovil}
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Telefono fijo"
                                onChange={handleChange}
                                name={'asesor.stelefonofijo'}
                                value={values.asesor.stelefonofijo}
                                error={Boolean(touched.asesor?.stelefonofijo && errors.asesor?.stelefonofijo)}
                                helperText={touched.asesor?.stelefonofijo && errors.asesor?.stelefonofijo}
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Telefono oficina"
                                onChange={handleChange}
                                name={'asesor.stelefonooficina'}
                                value={values.asesor.stelefonooficina}
                                error={Boolean(touched.asesor?.stelefonooficina && errors.asesor?.stelefonooficina)}
                                helperText={touched.asesor?.stelefonooficina && errors.asesor?.stelefonooficina}
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Dirrecion"
                                multiline
                                minRows={2}
                                maxRows={2}
                                onChange={handleChange}
                                name={'asesor.sdireccion'}
                                value={values.asesor.sdireccion}
                                error={Boolean(touched.asesor?.sdireccion && errors.asesor?.sdireccion)}
                                helperText={touched.asesor?.sdireccion && errors.asesor?.sdireccion}
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <AutoCompleteAsync
                                defaultValue={values.pais}
                                disabled={false}
                                errors={Boolean(touched.pais && errors.pais)}
                                getOptionLabel={getOptionLabelPais}
                                helperText={touched.pais?.lPaisId && errors.pais?.lPaisId}
                                isOptionEqualToValue={isOptionEqualToValuePais}
                                label='Seleccione Pais'
                                loading={loadingAutocomplete}
                                name='pais'
                                onChange={(event, val) => {
                                    if (val) {
                                        setFieldValue('pais', val);
                                        setFieldValue('asesor.lpaisId', val.lPaisId);
                                    }
                                    else {
                                        setFieldValue('pais', initialStateIPais)
                                        setFieldValue('asesor.lpaisId', initialStateIPais.lPaisId);
                                    }
                                }}
                                onClose={refresListaAutoComplete}
                                onOpen={onLoadAutocomplete}
                                open={openAutocomplete}
                                options={listAutocomplete}
                                value={values.pais}
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Ciudad"
                                onChange={handleChange}
                                name={'asesor.sciudad'}
                                value={values.asesor.sciudad}
                                error={Boolean(touched.asesor?.sciudad && errors.asesor?.sciudad)}
                                helperText={touched.asesor?.sciudad && errors.asesor?.sciudad}
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Correo electronico"
                                onChange={handleChange}
                                name={'asesor.scorreoelectronico'}
                                value={values.asesor.scorreoelectronico}
                                error={Boolean(touched.asesor?.scorreoelectronico && errors.asesor?.scorreoelectronico)}
                                helperText={touched.asesor?.scorreoelectronico && errors.asesor?.scorreoelectronico}
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <DatePicker
                                label="Fecha nacimiento"
                                value={dayjs(values.asesor.dtfechanacimiento)}
                                onChange={(newValue) => setFieldValue('asesor.dtfechanacimiento', newValue?.toDate())}
                                slotProps={{
                                    textField: {
                                        size: 'small',
                                        fullWidth: true,
                                        name: "asesor.dtfechanacimiento",
                                        error: Boolean(touched.asesor?.dtfechanacimiento && errors.asesor?.dtfechanacimiento),
                                        helperText: (touched.asesor?.dtfechanacimiento && errors.asesor?.dtfechanacimiento) as ReactNode,
                                        disabled: false
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <AutoCompleteAsync
                                defaultValue={values.nivel}
                                disabled={false}
                                errors={Boolean(touched.nivel && errors.nivel)}
                                getOptionLabel={getOptionLabelNivel}
                                helperText={touched.nivel?.lnivelId && errors.nivel?.lnivelId}
                                isOptionEqualToValue={isOptionEqualToValueNivel}
                                label='Seleccione nivel'
                                loading={loadingAutocompleteNivel}
                                name='nivel'
                                onChange={(event, val) => {
                                    if (val) {
                                        setFieldValue('nivel', val)
                                        setFieldValue('asesor.lnivelId', val.lnivelId)
                                    }
                                    else {
                                        setFieldValue('nivel', initialStateIPais)
                                        setFieldValue('asesor.lnivelId', initialStateIPais.lPaisId)
                                    }
                                }}
                                onClose={refresListaAutoCompleteNivel}
                                onOpen={onLoadAutocompleteNivel}
                                open={openAutocompleteNivel}
                                options={listAutocompleteNivel}
                                value={values.nivel}
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <AutoCompleteAsync
                                defaultValue={values.patrocinador}
                                disabled={false}
                                errors={Boolean(touched.patrocinador && errors.patrocinador)}
                                getOptionLabel={getOptionLabelAsesor}
                                helperText={touched.patrocinador?.lcontactoId && errors.patrocinador?.lcontactoId}
                                isOptionEqualToValue={isOptionEqualToValueAsesor}
                                label='Seleccione nivel'
                                loading={loadingAutocompleteAsesor}
                                name='nivel'
                                onChange={(event, val) => {
                                    if (val) {
                                        setFieldValue('patrocinador', val)
                                        setFieldValue('asesor.lpatrocinanteId', val.lcontactoId)
                                    }
                                    else {
                                        setFieldValue('patrocinador', initialStateIAsesor)
                                        setFieldValue('asesor.lpatrocinanteId', initialStateIAsesor.lcontactoId)
                                    }
                                }}
                                onClose={refresListaAutoCompleteAsesor}
                                onOpen={onLoadAutocompleteAsesor}
                                open={openAutocompleteAsesor}
                                options={listAutocompleteAsesor}
                                value={values.patrocinador}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    )
}

export default FormDatos
