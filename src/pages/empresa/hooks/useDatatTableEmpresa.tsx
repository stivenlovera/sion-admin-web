import { Column, Sorting } from "@devexpress/dx-react-grid";
import { VirtualTable } from "@devexpress/dx-react-grid-material-ui";
import { useState } from "react";

export const useDataTableEmpresa = () => {
    const [tableColumnExtensions] = useState<VirtualTable.ColumnExtension[]>([
        { columnName: 'snombre', wordWrapEnabled: true, align: 'left' },
        { columnName: 'snit', wordWrapEnabled: true, align: 'left' },
        { columnName: 'fechaCreacion', wordWrapEnabled: true, align: 'left', width: 300, },
        { columnName: 'empresa', wordWrapEnabled: true, align: 'left' },
        { columnName: 'lempresaId', wordWrapEnabled: true, align: 'left' }
    ]);
    const [columns] = useState<Column[]>([
        { name: 'empresa', title: 'Empresa' },
        { name: 'snit', title: 'Nit' },
        { name: 'fechaCreacion', title: 'Fecha creacion' },
        { name: 'snombre', title: 'Descripcion' },
        { name: 'lempresaId', title: 'Acciones' }
    ]);
    const [selection, setSelection] = useState<(number | string)[]>([]);
    const [sorting, setSorting] = useState<Sorting[]>([{ columnName: 'snombre', direction: 'asc' }]);
    return {
        tableColumnExtensions,
        columns,
        selection,
        setSelection,
        sorting,
        setSorting
    }
}