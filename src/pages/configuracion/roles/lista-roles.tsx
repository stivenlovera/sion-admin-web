import { Grid } from '@mui/material'
import { Cbreadcrumbs } from '../../../components/cbreadcrumbs/cbreadcrumbs'
import RuleIcon from '@mui/icons-material/Rule';
import { DataTableRoles } from './components/data-table-roles';
const ListaRoles = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} lg={12} md={12}>
                <Cbreadcrumbs icon={<RuleIcon />} nombreRoute='Roles' nombresRoutes={[]} route='#' routes={[]} />
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
                <DataTableRoles
                    hidden={true}
                />
            </Grid>
        </Grid>
    )
}

export default ListaRoles
