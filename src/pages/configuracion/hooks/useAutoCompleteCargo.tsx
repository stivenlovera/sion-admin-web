import { useState } from "react";
import { AxiosResponse } from "axios";
import { IResponse } from "../../../services/Intefaces/IResponse";

interface UseAutocompleteProps<T> {
    apiLista: () => Promise<AxiosResponse<IResponse<T[]>>>
}
export function useAutocompleteAsync<T>({ apiLista }: UseAutocompleteProps<T>) {
    const [listAutocomplete, setListaAutocomplete] = useState<T[]>([]);
    const [openAutocomplete, setOpenAutocomplete] = useState(false)
    const [loadingAutocomplete, setLoadingAutocomplete] = useState(false)
    const onLoadAutocomplete = async () => {
        setLoadingAutocomplete(true)
        const { data, status } = await apiLista()
        if (data.status == 1) {
            setListaAutocomplete(data.data)
            setOpenAutocomplete(true)
            setLoadingAutocomplete(false)
        } else {
            refresListaAutoComplete()
            setLoadingAutocomplete(false)
        }
    }
    const refresListaAutoComplete = () => {
        setOpenAutocomplete(false)
        setListaAutocomplete([])
    }
    return {
        listAutocomplete,
        openAutocomplete,
        loadingAutocomplete,
        refresListaAutoComplete,
        onLoadAutocomplete
    }
}