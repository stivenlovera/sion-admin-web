import { Grid, Typography } from '@mui/material';
import { Cbreadcrumbs } from '../../../components/cbreadcrumbs/cbreadcrumbs';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
const Index = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Cbreadcrumbs icon={<WorkHistoryIcon />} nombreRoute='Servicios Automaticos' nombresRoutes={[]} route='#' routes={[]} />
        <Typography variant="subtitle1" component="h6" style={{ fontWeight: 'bold' }} sx={{ pl: 1, pr: 1 }}>
          Servicios Automaticos
        </Typography>
        
      </Grid>
    </Grid>
  )
}

export default Index
