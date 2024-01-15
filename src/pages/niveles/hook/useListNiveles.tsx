import { Column, Sorting } from "@devexpress/dx-react-grid";
import { VirtualTable } from "@devexpress/dx-react-grid-material-ui";
import { useState } from "react";

export const useListNivel = () => {
    const [tableColumnExtensions] = useState<VirtualTable.ColumnExtension[]>([
        { columnName: 'ssigla', wordWrapEnabled: true, align: 'left' },
        { columnName: 'snombre', wordWrapEnabled: true, align: 'left' },
        { columnName: 'dhasta', wordWrapEnabled: true, align: 'left' },
        { columnName: 'ddesde', wordWrapEnabled: true, align: 'left' },
        { columnName: 'dbono', wordWrapEnabled: true, align: 'left' },
        { columnName: 'dbonomembresia', wordWrapEnabled: true, align: 'left' },
        { columnName: 'lnivelId', wordWrapEnabled: true, align: 'left' }
    ]);
    const [columns] = useState<Column[]>([
        { name: 'ssigla', title: 'Ciclo' },
        { name: 'snombre', title: 'Descripcion' },
        { name: 'dhasta', title: 'Desde' },
        { name: 'ddesde', title: 'Hasta' },
        { name: 'dbono', title: 'Bono' },
        { name: 'dbonomembresia', title: 'Menbresia' },
        { name: 'lnivelId', title: 'Acciones' }
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