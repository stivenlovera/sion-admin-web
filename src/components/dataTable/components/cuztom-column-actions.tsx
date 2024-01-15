import { DataTypeProvider, FilterOperation } from "@devexpress/dx-react-grid";
import { BtnEditarLink, BtnEliminarLink } from "./buttonsAcciones";
interface ColumnAccionesProps {
  onEditar: (row: any) => void;
  onEliminar: (row: any) => void;
}

export const columnAcciones = ({ column, value, row }: DataTypeProvider.ValueFormatterProps, { onEditar, onEliminar }: ColumnAccionesProps) => {
  return (
    <>
      <BtnEditarLink
        href={`/asesores/asesor/${value}`}
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
  onEditar: (row: any) => void;
  onEliminar: (row: any) => void;
  formatterComponent?: React.ComponentType<DataTypeProvider.ValueFormatterProps>;
  editorComponent?: React.ComponentType<DataTypeProvider.ValueEditorProps>;
  availableFilterOperations?: Array<FilterOperation>;
}

export const CurrencyAcciones = ({ onEditar, onEliminar, availableFilterOperations, editorComponent, formatterComponent, column }: CurrencyAccionesProps) => (
  <DataTypeProvider
    for={column}
    formatterComponent={({ column, value, row }) => {
      return columnAcciones({ column, value, row }, { onEditar, onEliminar })
    }}
  />
);
