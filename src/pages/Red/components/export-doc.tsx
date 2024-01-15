import { Box, Button, Grid, Paper, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
interface FiltrosProps {
    onReportAll: () => void,
    disabled: boolean,
}
const GenerarDocument = ({ onReportAll, disabled }: FiltrosProps) => {
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
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}
                            textAlign='center'
                        >
                            <Button
                                sx={{ width: 250 }}
                                variant="contained"
                                color='success'
                                size='small'
                                startIcon={<PictureAsPdfIcon />}
                                onClick={onReportAll}
                                disabled={disabled}
                            >
                                Generar PDF
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Paper >
    )
}

export default GenerarDocument
