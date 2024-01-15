import {
    Template,
    TemplatePlaceholder,
    Plugin,
    TemplateConnector
} from "@devexpress/dx-react-core";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { ButtonAdd } from "../../buttons/buttons";
interface SearchDataTablerops {
    onValueChange: (e: string) => void,
    value: string,
    selectionCount: number;
}
const SearchDataTable = ({ onValueChange, value, selectionCount }: SearchDataTablerops) => {
    return (
        <Grid container spacing={2} justify-content='flex-end'>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                <TextField
                    size='small'
                    fullWidth
                    label="Buscar"
                    placeholder="Buscar"
                    onChange={(e) => { onValueChange(e.target.value) }}
                    value={value}
                    disabled={false}
                />
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                <Typography
                    align="right"
                    variant='subtitle2'
                    sx={{ pt: 2 }}
                >
                    Total filas seleccionada:
                    {' '}
                    {selectionCount}
                </Typography>
            </Grid>
        </Grid>

    )
}

export default SearchDataTable
