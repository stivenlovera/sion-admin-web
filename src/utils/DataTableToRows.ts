import { Sorting } from "@devexpress/dx-react-grid";
import sortArray from "sort-array";

export function DataTableToRows<T>(dataTable: T[], selection: (string | number)[], sorting: Sorting[]) {
    let salida = dataTable.filter((_, index) => selection.includes(index));
    //sort force
    const sort = sortArray(salida, { by: sorting[0].columnName, order: sorting[0].direction });
    return sort;
}

