import { Column, Sorting } from "@devexpress/dx-react-grid";
import { VirtualTable } from "@devexpress/dx-react-grid-material-ui";
import { useState } from "react";

export const useDataTableProyeccion = () => {
    const [tableColumnExtensions] = useState<VirtualTable.ColumnExtension[]>([
        { columnName: 'snombrecompleto', wordWrapEnabled: true, align: 'left' },
        { columnName: 'nroVenta', wordWrapEnabled: true, align: 'left' },
        { columnName: 'lcontratoId', wordWrapEnabled: true, align: 'left', width: 300, },
        { columnName: 'fechaVenta', wordWrapEnabled: true, align: 'left' },
        { columnName: 'cuotaIncial', wordWrapEnabled: true, align: 'left' },
        { columnName: 'bono', wordWrapEnabled: true, align: 'left' },
        { columnName: 'nroCuota', wordWrapEnabled: true, align: 'left' },
        { columnName: 'fechaVencimiento', wordWrapEnabled: true, align: 'left' },
        { columnName: 'montoCuota', wordWrapEnabled: true, align: 'left' },
        { columnName: 'montoDeuda', wordWrapEnabled: true, align: 'left' },
        { columnName: 'fechaPago', wordWrapEnabled: true, align: 'left' },
        { columnName: 'montoPago', wordWrapEnabled: true, align: 'left' }
    ]);
    const [columns] = useState<Column[]>([
        { name: 'snombrecompleto', title: 'Nombre completo' },
        { name: 'nroVenta', title: 'Nro venta' },
        { name: 'fechaVenta', title: 'Fecha venta' },
        { name: 'cuotaIncial', title: 'Cuota inicial' },
        { name: 'nroCuota', title: 'Nro Cuota' },
        { name: 'montoPago', title: 'Monto cuota' },
        { name: 'fechaPago', title: 'Fecha venta' },
        { name: 'bono', title: 'Bono' }
    ]);
    const [selection, setSelection] = useState<(number | string)[]>([]);
    const [sorting, setSorting] = useState<Sorting[]>([{ columnName: 'snombrecompleto', direction: 'asc' }]);
    return {
        tableColumnExtensions,
        columns,
        selection,
        setSelection,
        sorting,
        setSorting
    }
}