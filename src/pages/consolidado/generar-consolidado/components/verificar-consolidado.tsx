import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material'
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { useSnackbar } from 'notistack';

export interface VerificarConsolidadoProp {
    onclick: () => void
    data: (string | number)[]
}
const VerificarConsolidado = ({ onclick, data }: VerificarConsolidadoProp) => {
    const { enqueueSnackbar } = useSnackbar();
    const onEnviar = () => {
        if (data.length > 0) {
            onclick()
        } else {
            enqueueSnackbar({ message:'seleccione uno o mas registros' , variant: 'warning', autoHideDuration: 3000 });
        }
    }
    return (
        <Paper style={{ position: 'relative' }}>
            <Typography
                sx={{ p: 1, flexGrow: 1 }} variant="subtitle1" style={{ fontWeight: 'bold' }}>
                Generar consolidado
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
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Button
                            fullWidth
                            variant="contained"
                            startIcon={<TextSnippetIcon />}
                            disabled={false}
                            onClick={onEnviar}
                        >
                            Guardar consolidado
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}

export default VerificarConsolidado
