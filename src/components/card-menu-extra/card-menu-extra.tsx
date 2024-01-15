import React, { useState } from 'react'
import { LoadSection } from '../load-skeleton/load-skeleton'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, Grid, Tooltip, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const CardMenuExtra = () => {
    const [loading, setLoading] = useState(false)
    return (
        loading ? (
            <LoadSection grid={4} height={320} />) : (
            <Card sx={{ minWidth: '100%' }}>
                <React.Fragment>
                    <CardContent>
                        <Box alignItems="center" >
                            <CardActionArea>
                                <Typography component="div" variant="subtitle2" align="center">
                                    Monte Sion
                                </Typography>
                            </CardActionArea>
                            <Tooltip title={'Comision total mes en curso'} arrow followCursor>
                                <CardActionArea onClick={() => { }}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        minHeight="11vh"
                                    >
                                        <Typography variant='h4' sx={{ fontWeight: 'bold', color: '#4D4D4D' }}> imagen</Typography>
                                    </Box>
                                </CardActionArea>
                            </Tooltip>
                            <Typography component="div" variant="subtitle2" align="center">
                                subtitulo
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="div" align="center" noWrap={false}>
                                descripcion
                            </Typography>
                            <Link to="#" style={{ fontSize: 13 }} onClick={() => { }} >text</Link>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            onClick={() => { console.log('ver') }} >
                            Ver Monte sion
                        </Button>
                    </CardActions>
                </React.Fragment>
            </Card>)
    )
}

export default CardMenuExtra
