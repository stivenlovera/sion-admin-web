import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Autocomplete, Box, Button, Card, CardContent, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { FiltroIDataTableRedProps } from '..';
import AutoCompleteAsync from '../../../components/autocomplete-async/autocomplete-async';
//import { UseCicloAutcomplete } from '../../../hooks/useCilclo';
//import { initialAdministracionCiclo } from '../utils/utils';
import { ICiclo, initialCiclo } from '../../../interfaces/ICiclo';

interface FiltrosProps {
    onBuscar: (values: FiltroIDataTableRedProps) => void;
    disabled: boolean
}
const Filtros = ({ onBuscar, disabled }: FiltrosProps) => {
   /*  const {
        getOptionLabelCiclo,
        isOptionEqualToValueCiclo,
        listCicloAutcomplete,
        loadingCicloAutcomplete,
        onLoadCicloAutcomplete,
        openAutoCicloAutcomplete,
        refresListaCicloAutoComplete
    } = UseCicloAutcomplete(); */

    const [fechaInicio, setFechaInicio] = useState<Dayjs | null>(dayjs());
    const [fechaFin, setFechaFin] = useState<Dayjs | null>(dayjs());
    const [ciclo, setCiclo] = useState<ICiclo>(initialCiclo)
    const [baja, setBaja] = useState(false)
    const [autoVenta, setAutoVenta] = useState(false)

    const [selectedValue, setSelectedValue] = useState('nuevasRedes');
    const [selectedFiltro, setSelectedFiltro] = useState('fecha');
    
    const handleChangeFiltro = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value == 'fecha') {
            setCiclo(initialCiclo)
        }
        console.log(event.target.value)
        setSelectedFiltro(event.target.value);
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
    const handlerFilter = () => {
       /*  onBuscar({
            fechaFin: fechaFin!.format('YYYY-MM-DD'),
            fechaInicio: fechaInicio!.format('YYYY-MM-DD'),
            ciclo: ciclo!.lciclo_id,
            tipo: selectedValue,
            autoventas: autoVenta,
            baja: baja,
        }) */
    }
    return (
        <Paper style={{ position: 'relative' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 2,
                    m: 0,
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xl={4} lg={4} md={6} sm={8} xs={12}>
                        <Card>
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <FormControlLabel value="female" control={
                                            <Radio
                                                size='small'
                                                checked={selectedFiltro === 'fecha'}
                                                onChange={handleChangeFiltro}
                                                value="fecha"
                                                name="radio-buttons"
                                                inputProps={{ 'aria-label': 'B', }}
                                                defaultValue={'Por persona'}
                                            />
                                        } label={<Typography align='center' variant='body2'> Filtrar por fecha</Typography>} />
                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label="Fecha Inicio"
                                                value={fechaInicio}
                                                format='DD/MM/YYYY'
                                                onChange={(newValue) => {
                                                    console.log(newValue?.format('DD/MM/YYYY'))
                                                    setFechaInicio(newValue)
                                                }}
                                                slotProps={{ textField: { size: 'small', fullWidth: true } }}
                                                disabled={selectedFiltro == 'fecha' ? false : true}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label="Fecha Fin"
                                                value={fechaFin}
                                                format='DD/MM/YYYY'
                                                onChange={(newValue) => {
                                                    setFechaFin(newValue)
                                                }}
                                                slotProps={{ textField: { size: 'small', fullWidth: true } }}
                                                disabled={selectedFiltro == 'fecha' ? false : true}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={8} xs={12}>
                        <Card>
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <FormControlLabel value="female" control={
                                            <Radio
                                                size='small'
                                                checked={selectedFiltro === 'ciclo'}
                                                onChange={handleChangeFiltro}
                                                value="ciclo"
                                                name="radio-buttons"
                                                inputProps={{ 'aria-label': 'B', }}
                                                defaultValue={'Por persona'}
                                            />
                                        } label={<Typography align='center' variant='body2'> Filtrar por fecha</Typography>} />
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                       {/*  <AutoCompleteAsync
                                            defaultValue={ciclo}
                                            disabled={selectedFiltro == 'ciclo' ? false : true}
                                            errors={undefined}
                                            getOptionLabel={getOptionLabelCiclo}
                                            helperText=''
                                            isOptionEqualToValue={isOptionEqualToValueCiclo}
                                            label='Selecione un ciclo'
                                            loading={loadingCicloAutcomplete}
                                            name='ciclo'
                                            onChange={(e, value) => {
                                                if (value != null) {
                                                    setCiclo(value!);
                                                }
                                            }}
                                            onClose={refresListaCicloAutoComplete}
                                            onOpen={onLoadCicloAutcomplete}
                                            open={openAutoCicloAutcomplete}
                                            options={listCicloAutcomplete}
                                            value={ciclo}
                                        /> */}
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Typography align='center' variant='body2'>Buscar</Typography>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <FormControlLabel value="nuevasRedes" control={
                                    <Radio
                                        size='small'
                                        checked={selectedValue === 'nuevasRedes'}
                                        onChange={handleChange}
                                        value="nuevasRedes"
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'A' }}
                                        defaultValue={'Por red'}
                                    />
                                } label="Redes nuevas" />
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <FormControlLabel value="nuevasPersonas" control={
                                    <Radio
                                        size='small'
                                        checked={selectedValue === 'nuevasPersonas'}
                                        onChange={handleChange}
                                        value="nuevasPersonas"
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'B', }}
                                        defaultValue={''}
                                    />
                                } label="Nuevas personas" />
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            size='small'
                                            value={baja}
                                            onChange={(e) => {
                                                setBaja(e.target.checked);
                                            }}
                                        />}
                                    label="Ver solo activos" />
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            size='small'
                                            value={autoVenta}
                                            onChange={(e) => {
                                                setAutoVenta(e.target.checked);
                                            }}
                                        />
                                    }
                                    label="No incluir auto ventas" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Box textAlign='center'>
                            <Button
                                size='small'
                                sx={{ width: 250 }}
                                variant="contained"
                                startIcon={<SearchIcon />}
                                onClick={handlerFilter}
                                disabled={disabled}
                            >
                                Buscar
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Paper >
    )
}

export default Filtros
