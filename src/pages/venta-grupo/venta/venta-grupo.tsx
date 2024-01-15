import { Grid } from '@mui/material'
import React, { useState } from 'react'
import LoaderPage from '../../../components/loader-page/loader-page'
import { Cbreadcrumbs } from '../../../components/cbreadcrumbs/cbreadcrumbs'
import Diversity3Icon from '@mui/icons-material/Diversity3';

const VentaGrupo = () => {
    const [loadPage, setloadPage] = useState(false)
  return (
    <Grid container spacing={2}>
      <LoaderPage
        load={loadPage}
      />
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Cbreadcrumbs icon={<Diversity3Icon />} nombreRoute='Venta grupo' nombresRoutes={['freelacer']} route='/venta-grupo' routes={['#']} />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        
      </Grid>
    </Grid>

  )
}

export default VentaGrupo
