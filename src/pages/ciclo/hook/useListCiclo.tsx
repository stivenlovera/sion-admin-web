import { Column, Sorting } from "@devexpress/dx-react-grid";
import { VirtualTable } from "@devexpress/dx-react-grid-material-ui";
import { useState } from "react";

export const useListCiclo = () => {
    const [tableColumnExtensions] = useState<VirtualTable.ColumnExtension[]>([
        { columnName: 'lcicloId', wordWrapEnabled: true, align: 'left' },
        { columnName: 'snombre', wordWrapEnabled: true, align: 'left' },
        { columnName: 'dtfechainicio', wordWrapEnabled: true, align: 'left' },
        { columnName: 'dtfechafin', wordWrapEnabled: true, align: 'left' },
        { columnName: 'lestado', wordWrapEnabled: true, align: 'left' },
        { columnName: 'dtfechacierre', wordWrapEnabled: true, align: 'left', width: 150 },
        { columnName: 'dtfechaprecierre1', wordWrapEnabled: true, align: 'left' },
        { columnName: 'dtfechaprecierre2', wordWrapEnabled: true, align: 'left' },
        { columnName: 'cverenweb', wordWrapEnabled: true, align: 'left' },
        { columnName: 'estadogestor', wordWrapEnabled: true, align: 'left' }
    ]);
    const [columns] = useState<Column[]>([
        { name: 'snombre', title: 'Nombre ciclo' },
        { name: 'dtfechainicio', title: 'Fecha inicio' },
        { name: 'dtfechafin', title: 'Fecha fin' },
        { name: 'lestado', title: 'Estado' },
        { name: 'dtfechacierre', title: 'Modificacion fecha cierre', },
        { name: 'dtfechaprecierre1', title: 'Fecha pre-cierre 1' },
        { name: 'dtfechaprecierre2', title: 'Fecha pre-cierre 2' },
        { name: 'cverenweb', title: 'Ver en la web' },
        { name: 'lcicloId', title: 'Acciones' }
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