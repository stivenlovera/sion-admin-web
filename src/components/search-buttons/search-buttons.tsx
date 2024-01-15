import { Box, Button, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
interface SearchButtonsProps {
    onEnviar: () => void;
    onReset: () => void;
}
const SearchButtons = ({ onEnviar, onReset }: SearchButtonsProps) => {
    return (
        <Grid container spacing={0}>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-start'
                }}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<SearchIcon />}
                        disabled={false}
                        type='submit'
                    >
                        Buscar
                    </Button>
                </Box>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>

            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <Button
                        fullWidth
                        color='warning'
                        variant="contained"
                        startIcon={<RestartAltIcon />}
                        onClick={onReset}
                        disabled={false}
                    >
                        Limpiar
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SearchButtons
