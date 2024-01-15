import { Box, Button, Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

interface FiltroConsolidadoProps {
    onclick: () => void;
    reset: () => void;
}
const FiltroConsolidadoGenerados = ({ onclick, reset }: FiltroConsolidadoProps) => {
    return (
        <Paper style={{ position: 'relative' }}>
            <Typography
                sx={{ p: 1, flexGrow: 1 }} variant="subtitle1" style={{ fontWeight: 'bold' }}>
                Seleccione Consolidado
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
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-start'
                        }}>
                            <Button
                                fullWidth
                                variant="contained"
                                startIcon={<SearchIcon />}
                                disabled={false}
                                onClick={onclick}
                            >
                                Buscar consolidados
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}>
                            <Button
                                fullWidth
                                color='warning'
                                variant="contained"
                                startIcon={<RestartAltIcon />}
                                onClick={reset}
                                disabled={false}
                            >
                                Limpiar
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Paper >
    )
}

export default FiltroConsolidadoGenerados
