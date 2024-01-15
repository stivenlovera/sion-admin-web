import { Column, Sorting } from "@devexpress/dx-react-grid";
import { VirtualTable } from "@devexpress/dx-react-grid-material-ui";
import { useState } from "react";

export const useDataTableFuncionario = () => {
    const [tableColumnExtensions] = useState<VirtualTable.ColumnExtension[]>([
        { columnName: 'nroDocumento', wordWrapEnabled: true, align: 'left' },
        { columnName: 'nombres', wordWrapEnabled: true, align: 'left' },
        { columnName: 'apellidos', wordWrapEnabled: true, align: 'left', width: 300, },
        { columnName: 'nombreCargo', wordWrapEnabled: true, align: 'left' },
        { columnName: 'estado', wordWrapEnabled: true, align: 'left' },
        { columnName: 'funcionarioId', wordWrapEnabled: true, align: 'left' }
    ]);
    const [columns] = useState<Column[]>([
        { name: 'nroDocumento', title: 'Nro identidad' },
        { name: 'nombres', title: 'CI' },
        { name: 'apellidos', title: 'Nombre Completo' },
        { name: 'nombreCargo', title: 'Cargo' },
        { name: 'estado', title: 'Estado' },
        { name: 'funcionarioId', title: 'Acciones' }
    ]);
    const [selection, setSelection] = useState<(number | string)[]>([]);
    const [sorting, setSorting] = useState<Sorting[]>([{ columnName: 'nombres', direction: 'asc' }]);
    return {
        tableColumnExtensions,
        columns,
        selection,
        setSelection,
        sorting,
        setSorting
    }
}