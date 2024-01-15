import { Box, Button, CardMedia, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material'
import { Cbreadcrumbs } from '../../components/cbreadcrumbs/cbreadcrumbs'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import FormAdicionales from './components/form-adicionales';
import SaveIcon from '@mui/icons-material/Save';
import { ButtonBack } from '../../components/buttons/buttons';
import { IFormAsesor, useFormikAsesor } from './hooks/useFormikAsesor';
import { initialStateIAsesor } from '../../interfaces/IAsesor';
import { initialStateIPais } from '../../interfaces/IPais';
import { initilalStateINivel } from '../../interfaces/INivel';
import { useEffect, useState } from 'react';
import FormDatos from './components/form-datos';
import { Form, FormikProvider } from 'formik';
import { initialStateIContactoPeril } from '../../interfaces/IContactoPeril';


const Asesor = () => {
    const initialStateFormAsesor: IFormAsesor = {
        asesor: initialStateIAsesor,
        pais: initialStateIPais,
        nivel: initilalStateINivel,
        contactoPerfil: initialStateIContactoPeril,
        patrocinador:initialStateIAsesor
    }

    const [asesor, setAsesor] = useState<IFormAsesor>(initialStateFormAsesor);
    const onEnviar = (data: IFormAsesor) => {

    }

    const { formAsesor } = useFormikAsesor({ data: asesor, onEnviar });
    const {
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
        setValues
    } = formAsesor;

    useEffect(() => {
    }, [])

    return (
        <Grid container spacing={1}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Cbreadcrumbs icon={<AssignmentIndIcon />} nombreRoute='asesores' nombresRoutes={['asesor']} route='/asesores/lista-asesores' routes={['#']} />
            </Grid>
            <FormikProvider value={formAsesor}>
                <Form onSubmit={(e) => { console.log(errors); console.log(values); handleSubmit(e) }}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Grid container spacing={1}>
                            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                                <FormAdicionales
                                    values={values}
                                    errors={errors}
                                    handleChange={handleChange}
                                    setFieldValue={setFieldValue}
                                    touched={touched}
                                />
                            </Grid>
                            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                                <FormDatos
                                    values={values}
                                    errors={errors}
                                    handleChange={handleChange}
                                    setFieldValue={setFieldValue}
                                    touched={touched}
                                />
                            </Grid>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Paper style={{ position: 'relative' }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'end',
                                            p: 1,
                                            m: 0,
                                        }}
                                    >
                                        <Button
                                            color='success'
                                            size='small'
                                            variant="contained"
                                            sx={{ m: 1 }}
                                            startIcon={<SaveIcon />}
                                            type='submit'
                                        >
                                            Registrar
                                        </Button>
                                        <ButtonBack
                                        />
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Form>
            </FormikProvider>
        </Grid>
    )
}

export default Asesor
