import { DataTypeProvider, FilterOperation } from "@devexpress/dx-react-grid";
import { BtnEdit, BtnEditarLink, BtnEliminarLink } from "./buttonsAcciones";
interface ColumnAccionesProps {
  onEditar: (row: any) => void;
  onEliminar: (row: any) => void;
}

const columnAccionesClick = ({ column, value, row }: DataTypeProvider.ValueFormatterProps, { onEditar, onEliminar }: ColumnAccionesProps) => {
  return (
    <>
      <BtnEdit
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
  onEditar: (row: any) => void;
  onEliminar: (row: any) => void;
  formatterComponent?: React.ComponentType<DataTypeProvider.ValueFormatterProps>;
  editorComponent?: React.ComponentType<DataTypeProvider.ValueEditorProps>;
  availableFilterOperations?: Array<FilterOperation>;
}

export const CurrencyAccionesClick = ({ onEditar, onEliminar, availableFilterOperations, editorComponent, formatterComponent, column }: CurrencyAccionesProps) => (
  <DataTypeProvider
    for={column}
    formatterComponent={({ column, value, row }) => {
      return columnAccionesClick({ column, value, row }, { onEditar, onEliminar })
    }}
  />
);
