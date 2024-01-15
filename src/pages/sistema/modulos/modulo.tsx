import { Box, Button, CardMedia, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Cbreadcrumbs } from '../../../components/cbreadcrumbs/cbreadcrumbs';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { DataTable } from '../../../components/dataTable/datatable';
import { CurrencyAcciones } from '../../../components/dataTable/components/cuztom-column-actions';
import { UseModulo } from './hooks/useModulos';
import { fakeModulos } from '../utils/initial-sistema';
import { IDataTableModulo } from '../../../interfaces/IDataTableModulo';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Modulo = () => {
    const [dataTable, setdataTable] = useState<IDataTableModulo[]>(fakeModulos)
    const {
        columns,
        tableColumnExtensions,
        selection,
        setSelection,
        setSorting,
        sorting
    } = UseModulo();

    useEffect(() => {

    }, [])

    return (
        <Grid container spacing={1}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Cbreadcrumbs icon={<ViewModuleIcon />} nombreRoute='Lista modulo' nombresRoutes={['Modulo']} route='/sistema/lista-modulos' routes={['#']} />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Paper style={{ position: 'relative' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            p: 1,
                            m: 1,
                        }}
                    >
                        <Grid container spacing={1}>
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                <Grid container spacing={1}>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <Typography
                                            variant='subtitle1'
                                            sx={{ fontWeight: 'bold', pb: 1 }}
                                        >
                                            Información de modulo
                                        </Typography>
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <TextField
                                            size='small'
                                            fullWidth
                                            label="Nombre"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <TextField
                                            size='small'
                                            fullWidth
                                            label="Url"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <TextField
                                            multiline
                                            minRows={2}
                                            size='small'
                                            fullWidth
                                            label="Descripcion"
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={'https://www.chuwi.com/public/upload/image/20230222/4ec3660f8d926f5ab3ca6049e0a6225c.jpg'}
                                    alt={'imagen'}
                                    title={'imagen'}
                                    sx={{ padding: "1em 1em 0 1em" }}
                                />
                            </Grid>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <Button
                                        sx={{ m: 1 }}
                                        size='small'
                                        variant="contained"
                                        startIcon={
                                            <AddIcon />
                                        }
                                    >
                                        Añadir sub modulo
                                    </Button>
                                </Box>
                                <Divider />
                            </Grid>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Box sx={{
                                    flexDirection: "column",
                                    height: 700,
                                    overflow: "hidden",
                                    overflowY: "scroll",
                                }}>
                                    <Box sx={{ borderRadius: '0px', background: '#FBFBFF', border: '2px solid #22A9DF', p: 2, m: 2, }}>
                                        <Grid container spacing={1}>
                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                <Grid container spacing={1}>
                                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                        <Typography
                                                            variant='subtitle1'
                                                            sx={{ fontWeight: 'bold', pb: 1 }}
                                                        >
                                                            Sub modulo
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                        <TextField
                                                            size='small'
                                                            fullWidth
                                                            label="Nombre"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                        <TextField
                                                            size='small'
                                                            fullWidth
                                                            label="Url"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                        <TextField
                                                            multiline
                                                            minRows={2}
                                                            size='small'
                                                            fullWidth
                                                            label="Descripcion"
                                                            variant="outlined"
                                                        />
                                                    </Grid>

                                                </Grid>
                                            </Grid>
                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                <CardMedia
                                                    component="img"
                                                    height="250"
                                                    image={'https://www.chuwi.com/public/upload/image/20230222/4ec3660f8d926f5ab3ca6049e0a6225c.jpg'}
                                                    alt={'imagen'}
                                                    title={'imagen'}
                                                    sx={{ padding: "1em 1em 0 1em" }}
                                                />
                                            </Grid>
                                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                    <Button
                                                        sx={{ m: 1 }}
                                                        color='primary'
                                                        size='small'
                                                        variant="contained"
                                                        startIcon={
                                                            <AddIcon />
                                                        }
                                                    >
                                                        Añadir componente
                                                    </Button>
                                                    <Button
                                                        sx={{ m: 1 }}
                                                        color='error'
                                                        size='small'
                                                        variant="contained"
                                                        startIcon={
                                                            <DeleteIcon />
                                                        }
                                                    >
                                                        Eliminar
                                                    </Button>
                                                </Box>
                                                <Divider />
                                            </Grid>
                                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                <Box sx={{ borderRadius: '0px', background: 'white', border: '2px solid #22A9DF', p: 2, m: 2 }}>
                                                    <Grid container spacing={1}>
                                                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                            <Grid container spacing={1}>
                                                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                                    <Typography
                                                                        variant='subtitle1'
                                                                        sx={{ fontWeight: 'bold', pb: 1 }}
                                                                    >
                                                                        Componente
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                                    <TextField
                                                                        size='small'
                                                                        fullWidth
                                                                        label="Nombre"
                                                                        variant="outlined"
                                                                    />
                                                                </Grid>
                                                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                                    <TextField
                                                                        size='small'
                                                                        fullWidth
                                                                        label="Url"
                                                                        variant="outlined"
                                                                    />
                                                                </Grid>
                                                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                                    <TextField
                                                                        multiline
                                                                        minRows={2}
                                                                        size='small'
                                                                        fullWidth
                                                                        label="Descripcion"
                                                                        variant="outlined"
                                                                    />
                                                                </Grid>

                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                            <CardMedia
                                                                component="img"
                                                                height="250"
                                                                image={'https://www.chuwi.com/public/upload/image/20230222/4ec3660f8d926f5ab3ca6049e0a6225c.jpg'}
                                                                alt={'imagen'}
                                                                title={'imagen'}
                                                                sx={{ padding: "1em 1em 0 1em" }}
                                                            />
                                                        </Grid>
                                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                                <Button
                                                                    color='error'
                                                                    size='small'
                                                                    variant="contained"
                                                                    startIcon={
                                                                        <DeleteIcon />
                                                                    }
                                                                >
                                                                    Eliminar
                                                                </Button>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>

                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ borderRadius: '0px', background: '#FBFBFF', border: '2px solid #22A9DF', p: 2, m: 2, }}>
                                        <Grid container spacing={1}>
                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                <Grid container spacing={1}>
                                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                        <Typography
                                                            variant='subtitle1'
                                                            sx={{ fontWeight: 'bold', pb: 1 }}
                                                        >
                                                            Sub modulo
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                        <TextField
                                                            size='small'
                                                            fullWidth
                                                            label="Nombre"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                        <TextField
                                                            size='small'
                                                            fullWidth
                                                            label="Url"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                        <TextField
                                                            multiline
                                                            minRows={2}
                                                            size='small'
                                                            fullWidth
                                                            label="Descripcion"
                                                            variant="outlined"
                                                        />
                                                    </Grid>

                                                </Grid>
                                            </Grid>
                                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                <CardMedia
                                                    component="img"
                                                    height="250"
                                                    image={'https://www.chuwi.com/public/upload/image/20230222/4ec3660f8d926f5ab3ca6049e0a6225c.jpg'}
                                                    alt={'imagen'}
                                                    title={'imagen'}
                                                    sx={{ padding: "1em 1em 0 1em" }}
                                                />
                                            </Grid>
                                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                    <Button
                                                        sx={{ m: 1 }}
                                                        color='primary'
                                                        size='small'
                                                        variant="contained"
                                                        startIcon={
                                                            <AddIcon />
                                                        }
                                                    >
                                                        Añadir componente
                                                    </Button>
                                                    <Button
                                                        sx={{ m: 1 }}
                                                        color='error'
                                                        size='small'
                                                        variant="contained"
                                                        startIcon={
                                                            <DeleteIcon />
                                                        }
                                                    >
                                                        Eliminar
                                                    </Button>
                                                </Box>
                                                <Divider />
                                            </Grid>
                                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                <Box sx={{ borderRadius: '0px', background: 'white', border: '2px solid #22A9DF', p: 2, m: 2 }}>
                                                    <Grid container spacing={1}>
                                                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                            <Grid container spacing={1}>
                                                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                                    <Typography
                                                                        variant='subtitle1'
                                                                        sx={{ fontWeight: 'bold', pb: 1 }}
                                                                    >
                                                                        Componente
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                                    <TextField
                                                                        size='small'
                                                                        fullWidth
                                                                        label="Nombre"
                                                                        variant="outlined"
                                                                    />
                                                                </Grid>
                                                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                                    <TextField
                                                                        size='small'
                                                                        fullWidth
                                                                        label="Url"
                                                                        variant="outlined"
                                                                    />
                                                                </Grid>
                                                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                                    <TextField
                                                                        multiline
                                                                        minRows={2}
                                                                        size='small'
                                                                        fullWidth
                                                                        label="Descripcion"
                                                                        variant="outlined"
                                                                    />
                                                                </Grid>

                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                                            <CardMedia
                                                                component="img"
                                                                height="250"
                                                                image={'https://www.chuwi.com/public/upload/image/20230222/4ec3660f8d926f5ab3ca6049e0a6225c.jpg'}
                                                                alt={'imagen'}
                                                                title={'imagen'}
                                                                sx={{ padding: "1em 1em 0 1em" }}
                                                            />
                                                        </Grid>
                                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                                <Button
                                                                    color='error'
                                                                    size='small'
                                                                    variant="contained"
                                                                    startIcon={
                                                                        <DeleteIcon />
                                                                    }
                                                                >
                                                                    Eliminar
                                                                </Button>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>

                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                                        onClick={() => { console.log('enviar data') }}
                                    >
                                        Registrar
                                    </Button>
                                    <Button
                                        color='primary'
                                        size='small'
                                        variant="contained"
                                        sx={{ m: 1 }}
                                        startIcon={<ArrowBackIcon />}

                                    >
                                        Volver a la lista
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Grid>

        </Grid>
    )
}

export default Modulo
