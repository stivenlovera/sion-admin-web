import { Column, Sorting, VirtualTable } from "@devexpress/dx-react-grid";
import { useState } from "react";

export const useDataTablePagoConsolidado = () => {
    const [tableColumnExtensions] = useState<VirtualTable.ColumnExtension[]>([
        { columnName: 'nombre', wordWrapEnabled: true, align: 'center' },
        { columnName: 'descripcion', wordWrapEnabled: true, align: 'center' },
        { columnName: 'fechaCreacion', wordWrapEnabled: true, align: 'center' },
        { columnName: 'esadoReporteId', wordWrapEnabled: true, align: 'center' },
        { columnName: 'esadoReporteId', wordWrapEnabled: true, align: 'center' },

    ]);
    const [columns] = useState<Column[]>([
        { name: 'nombre', title: 'Nombre' },
        { name: 'descripcion', title: 'Descripcion' },
        { name: 'fechaCreacion', title: 'Fecha creacion' },
        { name: 'esadoReporteId', title: 'Tipo reporte' },
        { name: 'pagonConsolidadoId', title: 'Acciones' }
    ]);
    const [selection, setSelection] = useState<(number | string)[]>([]);
    const [sorting, setSorting] = useState<Sorting[]>([{ columnName: 'nombre', direction: 'asc' }]);
    return {
        tableColumnExtensions,
        columns,
        selection,
        setSelection,
        sorting,
        setSorting
    }
}