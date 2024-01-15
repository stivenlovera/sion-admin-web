import { Column, Sorting } from "@devexpress/dx-react-grid";
import { VirtualTable } from "@devexpress/dx-react-grid-material-ui";
import { useState } from "react";
export const UseModulo = () => {
    const [tableColumnExtensions] = useState<VirtualTable.ColumnExtension[]>([
        { columnName: 'url', wordWrapEnabled: true, align: 'left' },
        { columnName: 'modulo_nombre', wordWrapEnabled: true, align: 'left' },
        { columnName: 'descripcion', wordWrapEnabled: true, align: 'left' },
        { columnName: 'imagen_referencia', wordWrapEnabled: true, align: 'left' },
        { columnName: 'modulo_id', wordWrapEnabled: true, align: 'left' }
    ]);
    const [columns] = useState<Column[]>([
        { name: 'modulo_nombre', title: 'Nombre' },
        { name: 'url', title: 'Url' },
        { name: 'descripcion', title: 'Descripcion' },
        { name: 'imagen_referencia', title: 'Imagen' },
        { name: 'modulo_id', title: 'Acciones' },
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