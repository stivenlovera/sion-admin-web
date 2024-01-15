import { Column, Sorting } from "@devexpress/dx-react-grid";
import { VirtualTable } from "@devexpress/dx-react-grid-material-ui";
import { useState } from "react";

export const useDataTableConsolidadoRegistrado = () => {
    const [tableColumnExtensions] = useState<VirtualTable.ColumnExtension[]>([
        { columnName: 'nombre', wordWrapEnabled: true, align: 'center' },
        { columnName: 'descripcion', wordWrapEnabled: true, align: 'center' },
        { columnName: 'fechaCreacion', wordWrapEnabled: true, align: 'center' },
        { columnName: 'comisionConsolidadoId', wordWrapEnabled: true, align: 'center', width: 250 },
     
    ]);
    const [columns] = useState<Column[]>([
        { name: 'nombre', title: 'Nombre' },
        { name: 'descripcion', title: 'Descripcion' },
        { name: 'fechaCreacion', title: 'Fecha creacion' },
        { name: 'comisionConsolidadoId', title: 'Acciones' }
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