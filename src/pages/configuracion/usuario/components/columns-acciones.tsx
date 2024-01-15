import { DataTypeProvider, FilterOperation } from "@devexpress/dx-react-grid";
import { BtnEliminarLink } from "../../../../components/dataTable/components/buttonsAcciones";
import { IconButton, Tooltip } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import EditIcon from '@mui/icons-material/Edit';

interface BtnEditarLinkProps {
    onClick: () => void;
    title: string;
}
export const BtnAccesoLink = ({ title, onClick }: BtnEditarLinkProps) => {
    return (
        <Tooltip title={title}>
            <IconButton
                onClick={onClick}
                color="primary"
            >
                <LoginIcon
                    color='success'
                />
            </IconButton>
        </Tooltip>
    )
}

export const BtnEditarLink = ({ title, onClick }: BtnEditarLinkProps) => {
    return (
        <Tooltip title={title}>
            <IconButton
                onClick={onClick}
                color="primary"
            >
                <EditIcon
                    color='success'
                />
            </IconButton>
        </Tooltip>
    )
}

interface ColumnAccionesProps {
    onAcceso: (row: any) => void;
    onEditar: (row: any) => void;
    onEliminar: (row: any) => void;
}
export const columnAcciones = ({ column, value, row }: DataTypeProvider.ValueFormatterProps, { onAcceso, onEditar, onEliminar }: ColumnAccionesProps) => {
    return (
        <>
            <BtnAccesoLink
                title=""
                onClick={() => { onAcceso(row) }}
            />
            <BtnEditarLink
                onClick={() => { onEditar(row) }}
                title=""
            />
            <BtnEliminarLink
                title=""
                onClick={() => { onEliminar(row) }}
            />
        </>
    )
};

export interface CurrencyAccionesProps {
    column: Array<string>;
    onAcceso: (row: any) => void;
    onEditar: (row: any) => void;
    onEliminar: (row: any) => void;
    formatterComponent?: React.ComponentType<DataTypeProvider.ValueFormatterProps>;
    editorComponent?: React.ComponentType<DataTypeProvider.ValueEditorProps>;
    availableFilterOperations?: Array<FilterOperation>;
}

export const CurrencyAccionesFuncionario = ({ onAcceso, onEditar, onEliminar, availableFilterOperations, editorComponent, formatterComponent, column }: CurrencyAccionesProps) => (
    <DataTypeProvider
        for={column}
        formatterComponent={({ column, value, row }) => {
            return columnAcciones({ column, value, row }, { onAcceso, onEditar, onEliminar })
        }}
    />
);
