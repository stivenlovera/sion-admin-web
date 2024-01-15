import { DataTypeProvider, FilterOperation } from "@devexpress/dx-react-grid";
import moment from "moment";
const columnAccionesFechahora = ({ column, value, row }: DataTypeProvider.ValueFormatterProps) => {
    const fecha = moment(value).format('DD/MM/yyyy HH:mm:ss');

    return (
        <>
            {fecha}
        </>
    )
};
const columnAccionesFecha = ({ column, value, row }: DataTypeProvider.ValueFormatterProps) => {
    const fecha = moment(value).format('DD/MM/yyyy');
    return (
        <>
            {fecha}
        </>
    )
};

const columnFormatDecimal = ({ column, value, row }: DataTypeProvider.ValueFormatterProps) => {
    return (
        <>
            {value.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}
        </>
    )
};

export interface CurrencyAccionesProps {
    column: Array<string>;
    formatterComponent?: React.ComponentType<DataTypeProvider.ValueFormatterProps>;
    editorComponent?: React.ComponentType<DataTypeProvider.ValueEditorProps>;
    availableFilterOperations?: Array<FilterOperation>;
}

export const CurrencyAccionesFecha = ({ availableFilterOperations, editorComponent, formatterComponent, column }: CurrencyAccionesProps) => (
    <DataTypeProvider
        for={column}
        formatterComponent={({ column, value, row }) => {
            return columnAccionesFecha({ column, value, row })
        }}
    />
);
export const CurrencyFormatDecimal = ({ availableFilterOperations, editorComponent, formatterComponent, column }: CurrencyAccionesProps) => (
    <DataTypeProvider
        for={column}
        formatterComponent={({ column, value, row }) => {
            return columnFormatDecimal({ column, value, row })
        }}
    />
);
export const CurrencyAccionesFechaHora = ({ availableFilterOperations, editorComponent, formatterComponent, column }: CurrencyAccionesProps) => (
    <DataTypeProvider
        for={column}
        formatterComponent={({ column, value, row }) => {
            return columnAccionesFechahora({ column, value, row })
        }}
    />
);
