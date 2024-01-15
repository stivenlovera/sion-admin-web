import React from 'react'
import AutoCompleteAsync from '../../../../components/autocomplete-async/autocomplete-async'
import { IEmpresa } from '../../../../interfaces/IEmpresa'
import { listEmpresa } from '../../../../services/api-guardian/empresa'
import { useAutocompleteAsync } from '../../../configuracion/hooks/useAutoCompleteCargo'
interface SelectEmpresaProps {
    onChange: (e: React.SyntheticEvent<Element, Event>, value: IEmpresa | null) => void;
    name: string,
    value: IEmpresa
    disabled:boolean
    label: string,

}
const SelectEmpresa = ({ onChange, name, value,disabled,label }: SelectEmpresaProps) => {
    const isOptionEqualToValueEmpresa = (option: IEmpresa, value: IEmpresa) => option.lempresaId === value.lempresaId
    const getOptionLabelEmpresas = (option: IEmpresa) => option.snombre
    const {
        listAutocomplete: listAutocompleteEmpresa,
        loadingAutocomplete: loadingAutocompleteEmpresa,
        onLoadAutocomplete: onLoadAutocompleteEmpresa,
        openAutocomplete: openAutocompleteEmpresa,
        refresListaAutoComplete: refresListaAutoCompleteEmpresa
    } = useAutocompleteAsync({ apiLista: listEmpresa });

    return (
        <AutoCompleteAsync
            defaultValue={value}
            disabled={disabled}
            errors={false}
            getOptionLabel={getOptionLabelEmpresas}
            //helperText={touched?.cambioEmpresa? && errors?.cambioEmpresa?}
            isOptionEqualToValue={isOptionEqualToValueEmpresa}
            label={label}
            loading={loadingAutocompleteEmpresa}
            name={name}
            onChange={onChange}
            onClose={refresListaAutoCompleteEmpresa}
            onOpen={onLoadAutocompleteEmpresa}
            open={openAutocompleteEmpresa}
            options={listAutocompleteEmpresa}
            value={value}
        />
    )
}

export default SelectEmpresa
