import { DataTypeProvider, FilterOperation } from "@devexpress/dx-react-grid";
import { Chip } from "@mui/material";
import { Stack } from "@mui/system";
const columnAccionesEstado = ({ column, value, row }: DataTypeProvider.ValueFormatterProps) => {
    const descripcion = value == '0' ? 'Abierto' : 'Cerrado';
    const disabled = value == '1' ? true : false
    return (
        <Stack direction="row" spacing={1}>
            <Chip label={descripcion} color={'primary'} disabled={disabled} />
        </Stack>
    )
};

export interface CurrencyAccionesProps {
    column: Array<string>;
    formatterComponent?: React.ComponentType<DataTypeProvider.ValueFormatterProps>;
    editorComponent?: React.ComponentType<DataTypeProvider.ValueEditorProps>;
    availableFilterOperations?: Array<FilterOperation>;
}

export const CurrencyAccionesEstado = ({ availableFilterOperations, editorComponent, formatterComponent, column }: CurrencyAccionesProps) => (
    <DataTypeProvider
        for={column}
        formatterComponent={({ column, value, row }) => {
            return columnAccionesEstado({ column, value, row })
        }}
    />
);