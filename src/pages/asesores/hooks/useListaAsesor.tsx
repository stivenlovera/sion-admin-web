import { Column, Sorting } from "@devexpress/dx-react-grid";
import { VirtualTable } from "@devexpress/dx-react-grid-material-ui";
import { useState } from "react";

export const UseListaAsesor = () => {
    const [tableColumnExtensions] = useState<VirtualTable.ColumnExtension[]>([
        { columnName: 'lcontacto_id', wordWrapEnabled: true, align: 'left' },
        { columnName: 'scedulaidentidad', wordWrapEnabled: true, align: 'left' },
        { columnName: 'snombrecompleto', wordWrapEnabled: true, align: 'left', width: 300, },
        { columnName: 'bifoto', wordWrapEnabled: true, align: 'left' },
        { columnName: 'stelefonomovil', wordWrapEnabled: true, align: 'left' },
        { columnName: 'dtfecharegistro', wordWrapEnabled: true, align: 'left' },
        { columnName: 'sciudad', wordWrapEnabled: true, align: 'left' },
        { columnName: 'cbaja', wordWrapEnabled: true, align: 'left' },
        { columnName: 'stelefonofijo', wordWrapEnabled: true, align: 'left' }
    ]);
    const [columns] = useState<Column[]>([
        { name: 'lcontacto_id', title: 'Id' },
        { name: 'scedulaidentidad', title: 'CI' },
        { name: 'snombrecompleto', title: 'Nombre Completo' },
        { name: 'bifoto', title: 'Foto' },
        { name: 'stelefonomovil', title: 'Telefono' },
        { name: 'dtfecharegistro', title: 'Fecha Ingreso' },
        { name: 'sciudad', title: 'Cuidad' },
        { name: 'cbaja', title: 'Estado' },
        { name: 'stelefonofijo', title: 'Acciones' }
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