import { Box, Button, Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material'

import SearchButtons from '../../../../components/search-buttons/search-buttons'
import { Form, FormikProvider } from 'formik'
import { IFiltroConsolidado, useFormikFiltroConsolidado } from '../hooks/useFormikFiltroConsolidado'
import { ICiclo, initialCiclo } from '../../../../interfaces/ICiclo'
import { IEmpresa, initialStateEmpresa } from '../../../../interfaces/IEmpresa'
import { AutoCompleteMultipleAsync } from '../../../../components/autocomplete-async/autocomplete-async-multiple'
import { GetAllCiclo } from '../../../../services/api-guardian/ciclo'
import { useAutocompleteAsync } from '../../../configuracion/hooks/useAutoCompleteCargo'
import { listEmpresa } from '../../../../services/api-guardian/empresa'
import AutoCompleteAsync from '../../../../components/autocomplete-async/autocomplete-async'

interface FiltroConsolidadoProps {
  value: IFiltroConsolidado,
  onSubmit: (value: IFiltroConsolidado) => void;
  onReset: () => void;
}
const FiltroConsolidado = ({ value, onSubmit, onReset }: FiltroConsolidadoProps) => {
  const { formFiltroConsolidado } = useFormikFiltroConsolidado({ data: value, onEnviar: onSubmit });
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
    setValues,
  } = formFiltroConsolidado;


  const isOptionEqualToValueCiclo = (option: ICiclo, value: ICiclo) => option.lcicloId === value.lcicloId
  const getOptionLabelCiclo = (option: ICiclo) => option.snombre
  const {
    listAutocomplete,
    loadingAutocomplete,
    onLoadAutocomplete,
    openAutocomplete,
    refresListaAutoComplete
  } = useAutocompleteAsync({ apiLista: GetAllCiclo });

  const isOptionEqualToValueEmpresa = (option: IEmpresa, value: IEmpresa) => option.lempresaId === value.lempresaId
  const getOptionLabelEmpresas = (option: IEmpresa) => option.snombre
  const {
    listAutocomplete: listAutocompleteEmpresa,
    loadingAutocomplete: loadingAutocompleteEmpresa,
    onLoadAutocomplete: onLoadAutocompleteEmpresa,
    openAutocomplete: openAutocompleteEmpresa,
    refresListaAutoComplete: refresListaAutoCompleteEmpresa
  } = useAutocompleteAsync({ apiLista: listEmpresa });

  //generar consolidado


  return (
    <FormikProvider value={formFiltroConsolidado}>
      <Form onSubmit={(e) => { console.log(errors); handleSubmit(e) }}>
        <Paper style={{ position: 'relative' }}>
          <Typography
            sx={{ p: 1, flexGrow: 1 }} variant="subtitle1" style={{ fontWeight: 'bold' }}>
            Opciones de busqueda
          </Typography>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: 2,
              m: 0,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <AutoCompleteMultipleAsync
                  defaultValue={values.empresas}
                  errors={Boolean(touched.empresas && errors.empresas)}
                  getOptionLabel={getOptionLabelEmpresas}
                  helperText={errors?.empresas?.toString()}
                  isOptionEqualToValue={isOptionEqualToValueEmpresa}
                  label='Seleccione empresas'
                  loading={loadingAutocompleteEmpresa}
                  name='empresas'
                  onChange={(event, val) => {
                    if (val) {
                      console.log(value)
                      setFieldValue('empresas', val)
                    }
                    else {
                      setFieldValue('empresas', values.empresas)
                    }
                  }}
                  onClose={refresListaAutoCompleteEmpresa}
                  onOpen={onLoadAutocompleteEmpresa}
                  open={openAutocompleteEmpresa}
                  options={listAutocompleteEmpresa}
                  value={values.empresas}
                  disabled={false}
                />
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <AutoCompleteAsync
                  defaultValue={values.ciclo}
                  disabled={false}
                  errors={Boolean(touched.ciclo && errors.ciclo)}
                  getOptionLabel={getOptionLabelCiclo}
                  helperText={touched?.ciclo?.snombre && errors?.ciclo?.snombre}
                  isOptionEqualToValue={isOptionEqualToValueCiclo}
                  label='Seleccione ciclo'
                  loading={loadingAutocomplete}
                  name='ciclo'
                  onChange={(event, val) => {
                    if (val) {
                      setFieldValue('ciclo', val)
                    }
                    else {
                      setFieldValue('ciclo', value.ciclo)
                    }
                  }}
                  onClose={refresListaAutoComplete}
                  onOpen={onLoadAutocomplete}
                  open={openAutocomplete}
                  options={listAutocomplete}
                  value={values.ciclo}
                />
              </Grid>
              <Grid item xl={6} lg={4} md={4} sm={6} xs={12}>

              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <SearchButtons
                  onReset={() => { resetForm(); onReset(); }}
                  onEnviar={() => { }}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper >
      </Form>
    </FormikProvider>
  )
}

export default FiltroConsolidado
