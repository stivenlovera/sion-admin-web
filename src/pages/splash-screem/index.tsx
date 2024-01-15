import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Index = () => {
    return (
        <Container
            component="main"
            maxWidth={false}
            sx={{
                backgroundImage: `url("/img/grupo-sion.jpg")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'
            }}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh" //100vh

            ></Box>
        </Container>
    )
}

export default Index
