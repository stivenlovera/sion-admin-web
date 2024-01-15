import { DataTypeProvider, FilterOperation } from "@devexpress/dx-react-grid";
import { Chip } from "@mui/material";
import { Stack } from "@mui/system";
import WebAssetIcon from '@mui/icons-material/WebAsset';

const columnAccionesVerWeb = ({ column, value, row }: DataTypeProvider.ValueFormatterProps) => {
    const descripcion = value == '0' ? 'No activo' : 'Activo';
    const disabled = value == '0' ? true : false
    return (
        <Stack direction="row" spacing={1}>
            <Chip icon={<WebAssetIcon />} label={descripcion} color={'success'} disabled={disabled} />
        </Stack>
    )
};

export interface CurrencyAccionesProps {
    column: Array<string>;
    formatterComponent?: React.ComponentType<DataTypeProvider.ValueFormatterProps>;
    editorComponent?: React.ComponentType<DataTypeProvider.ValueEditorProps>;
    availableFilterOperations?: Array<FilterOperation>;
}

export const CurrencyAccionesVerWeb = ({ availableFilterOperations, editorComponent, formatterComponent, column }: CurrencyAccionesProps) => (
    <DataTypeProvider
        for={column}
        formatterComponent={({ column, value, row }) => {
            return columnAccionesVerWeb({ column, value, row })
        }}
    />
);
