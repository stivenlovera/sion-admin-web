import { DialogActions, DialogContent, DialogTitle, Grid, Paper, TextField, Typography } from "@mui/material";
import ModalStandar from "../../../../components/modal-standar/modal-standar";
import { ButtonClose, ButtonSave } from "../../../../components/buttons/buttons";
import { useEffect } from "react";
import { initialStateEmpresa } from "../../../../interfaces/IEmpresa";
import { FieldArray, Form, FormikProvider } from "formik";
import { IFormCambioEmpresa, IFormConfigCambioEmpresa, useFormikCambioEmpresa } from "../hooks/useFormikCambioEmpresa";
import SelectEmpresa from "./selector-empresa";

interface ModalConsolidadoCambioEmpresaProps {
    open: boolean;
    onClose: () => void;
    onEnviar: (data: IFormConfigCambioEmpresa) => void
    data: IFormConfigCambioEmpresa
}
const ModalConsolidadoCambioEmpresa = ({ open, onClose, onEnviar, data }: ModalConsolidadoCambioEmpresaProps) => {

    const { formFormikCambioEmpresa } = useFormikCambioEmpresa({ data, onEnviar });
    const {
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
        setValues
    } = formFormikCambioEmpresa;

    useEffect(() => {
        setValues(data);
    }, [data])

    return (
        <ModalStandar
            maxWidth='md'
            open={open}
            onClose={onClose}
        >
            <DialogTitle sx={{ flexGrow: 1 }} variant="subtitle1" style={{ fontWeight: 'bold' }}>Generar Facturación Consolidado</DialogTitle>
            <FormikProvider value={formFormikCambioEmpresa}>
                <Form onSubmit={(e) => { console.log(errors); console.log(values); handleSubmit(e) }}>
                    <DialogContent>
                        <Grid container spacing={2}>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <TextField
                                    size='small'
                                    fullWidth
                                    label="Nombre de reporte"
                                    name={`pagoConsolidado.nombre`}
                                    placeholder="Nombre de reporte"
                                    value={values.pagoConsolidado.nombre}
                                    onChange={handleChange}
                                    error={false}
                                    helperText={null}
                                />
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <TextField
                                    size='small'
                                    fullWidth
                                    label="Descripcion"
                                    name={`pagoConsolidado.descripcion`}
                                    placeholder="Descripcion"
                                    value={values.pagoConsolidado.descripcion}
                                    onChange={handleChange}
                                    error={false}
                                    helperText={null}
                                />
                            </Grid>
                        </Grid>
                        <FieldArray
                            name="cambioEmpresa"
                            render={arrayCambioEmpresa => {
                                const cambioEmpresa = values.configCambioEmpresa;
                                return (
                                    <>
                                        <br />
                                        <Typography variant='subtitle2' color={'GrayText'}>Aplicar cambio de empresa</Typography>
                                        {
                                            cambioEmpresa && cambioEmpresa.length > 0 ? (
                                                cambioEmpresa.map((respuesta: IFormCambioEmpresa, index: number) => {
                                                    return (
                                                        <Grid container sx={{ pt: 2 }} spacing={2} key={index}>
                                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                                                                <SelectEmpresa
                                                                    label={'Empresa a pagar'}
                                                                    name={`configCambioEmpresa[${index}].empresa`}
                                                                    onChange={(event, val) => {
                                                                        if (val) {
                                                                            setFieldValue(`configCambioEmpresa[${index}].empresa`, val)
                                                                        }
                                                                        else {
                                                                            setFieldValue(`configCambioEmpresa[${index}].empresa`, initialStateEmpresa)
                                                                        }
                                                                    }}
                                                                    value={values.configCambioEmpresa[index].empresa}
                                                                    disabled={true}
                                                                />
                                                            </Grid>
                                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                                                                <SelectEmpresa
                                                                    label={'Cambio de empresa'}
                                                                    name={`configCambioEmpresa[${index}].pagoEmpresa`}
                                                                    onChange={(event, val) => {
                                                                        console.log(val)
                                                                        if (val) {
                                                                            setFieldValue(`configCambioEmpresa[${index}].pagoEmpresa`, val)
                                                                        }
                                                                        else {
                                                                            setFieldValue(`configCambioEmpresa[${index}].pagoEmpresa`, initialStateEmpresa)
                                                                        }
                                                                    }}
                                                                    value={values.configCambioEmpresa[index].pagoEmpresa}
                                                                    disabled={false}
                                                                />
                                                            </Grid>
                                                            <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                                                                <TextField
                                                                    size='small'
                                                                    fullWidth
                                                                    label="Nota"
                                                                    name={`confgCambioEmpresa[${index}].nota`}
                                                                    placeholder="Nota"
                                                                    value={values.configCambioEmpresa[index].nota}
                                                                    onChange={handleChange}
                                                                    error={false}
                                                                    helperText={null}
                                                                />
                                                            </Grid>
                                                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                                <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
                                                                    <Typography> {data.dataTable.length} registros seleccionados para guardar como pago consolidado.</Typography>
                                                                </Paper>
                                                            </Grid>
                                                        </Grid>
                                                    )
                                                })) : (<>no hay elemento</>)}
                                    </>)
                            }}
                        />
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

export default ModalConsolidadoCambioEmpresa
