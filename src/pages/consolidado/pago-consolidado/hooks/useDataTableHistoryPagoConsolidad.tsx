import { Column, Sorting, VirtualTable } from "@devexpress/dx-react-grid";
import { useState } from "react";

export const useDataTableHistoryPagoConsolidad = () => {
    const [tableColumnExtensions] = useState<VirtualTable.ColumnExtension[]>([
        { columnName: 'lcontactoId', wordWrapEnabled: true, align: 'center' },
        { columnName: 'scodigo', wordWrapEnabled: true, align: 'center' },
        { columnName: 'scedulaidentidad', wordWrapEnabled: true, align: 'center' },
        { columnName: 'snombrecompleto', wordWrapEnabled: true, align: 'center', width: 250 },
        { columnName: 'lempresaId', wordWrapEnabled: true, align: 'center' },
        { columnName: 'empresa', wordWrapEnabled: true, align: 'center' },
        { columnName: 'totalComisionVtaGrupoResidual', wordWrapEnabled: true, align: 'center', width: 130 },
        { columnName: 'totalComisionVtaPersonal', wordWrapEnabled: true, align: 'center', width: 130 },
        { columnName: 'lcicloId', wordWrapEnabled: true, align: 'center' },
        { columnName: 'totalComisionVtaGrupoResidualBs', wordWrapEnabled: true, align: 'center' },
        { columnName: 'totalcomisionVtaPersonalBs', wordWrapEnabled: true, align: 'center' },
        { columnName: 'razonSocial', wordWrapEnabled: true, align: 'center' },
        { columnName: 'nit', wordWrapEnabled: true, align: 'center' },
        { columnName: 'nombreCiclo', wordWrapEnabled: true, align: 'center' },
        { columnName: 'fechaInicioCiclo', wordWrapEnabled: true, align: 'center' },
        { columnName: 'fechaFinCiclo', wordWrapEnabled: true, align: 'center' },
        { columnName: 'retencion', wordWrapEnabled: true, align: 'center' },
        { columnName: 'totalComision', wordWrapEnabled: true, align: 'center' },
        { columnName: 'totalComisionServicio', wordWrapEnabled: true, align: 'center' },
        { columnName: 'totalComisionRetencion', wordWrapEnabled: true, align: 'center', width: 170 },
        { columnName: 'totalPagar', wordWrapEnabled: true, align: 'center', width: 150 },
        { columnName: 'valor13', wordWrapEnabled: true, align: 'center' },
        { columnName: 'valor87', wordWrapEnabled: true, align: 'center' }
    ]);
    const [columns] = useState<Column[]>([
        { name: 'scodigo', title: 'Codigo' },
        { name: 'empresa', title: 'Empresa' },
        { name: 'snombrecompleto', title: 'Asesor' },
        { name: 'totalComisionVtaPersonal', title: 'Comision $us' },
        { name: 'totalComisionVtaGrupoResidual', title: 'Servicio $us' },
        { name: 'totalComisionServicio', title: 'Total comision $us' },
        { name: 'valor13', title: '13 %' },
        { name: 'valor87', title: '87 %' },
        { name: 'retencion', title: 'Retencion' },
        { name: 'totalComisionRetencion', title: 'Total retencion $us'},
        { name: 'totalComision', title: 'Total $us'},
        { name: 'totalPagar', title: 'Total pagar $us'}
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