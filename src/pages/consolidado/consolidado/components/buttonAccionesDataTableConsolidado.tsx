import { DataTypeProvider, FilterOperation } from "@devexpress/dx-react-grid";
import { BtnEdit, BtnEliminarLink, BtnExport } from "../../../../components/dataTable/components/buttonsAcciones";

interface ColumnAccionesProps {
    onExport: (row: any) => void;
    onEditar: (row: any) => void;
    onEliminar: (row: any) => void;
}

const columnAccionesClick = ({ column, value, row }: DataTypeProvider.ValueFormatterProps, { onExport, onEditar, onEliminar }: ColumnAccionesProps) => {
    return (
        <>
            <BtnExport
                onClick={() => { onExport(row) }}
                title="Exportar"
            />
            <BtnEdit
                onClick={() => { onEditar(row) }}
                title="Editar"
            />
            <BtnEliminarLink
                title="Eliminar"
                onClick={() => { onEliminar(row) }}
            />
        </>
    )
};


export interface CurrencyAccionesProps {
    column: Array<string>;
    onExport: (row: any) => void;
    onEditar: (row: any) => void;
    onEliminar: (row: any) => void;
    formatterComponent?: React.ComponentType<DataTypeProvider.ValueFormatterProps>;
    editorComponent?: React.ComponentType<DataTypeProvider.ValueEditorProps>;
    availableFilterOperations?: Array<FilterOperation>;
}

export const CurrencyAccionesConsolidadoClick = ({ onExport, onEditar, onEliminar, availableFilterOperations, editorComponent, formatterComponent, column }: CurrencyAccionesProps) => (
    <DataTypeProvider
        for={column}
        formatterComponent={({ column, value, row }) => {
            return columnAccionesClick({ column, value, row }, { onExport, onEditar, onEliminar })
        }}
    />
);
