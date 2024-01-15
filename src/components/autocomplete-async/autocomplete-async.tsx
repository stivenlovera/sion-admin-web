
import { Autocomplete, CircularProgress } from '@mui/material';
import React, { SyntheticEvent } from 'react'
import TextField from '@mui/material/TextField';

interface AutoCompleteAsyncProps<T> {
    onOpen: () => void;
    onClose: () => void;
    label: string;
    options: T[];
    open: boolean;
    loading: boolean;
    isOptionEqualToValue: (option: T, values: T) => boolean;
    getOptionLabel: (option: T) => string;
    name: string;
    value: T;
    onChange: (e: SyntheticEvent<Element, Event>, value: T | null) => void;
    defaultValue: T;
    helperText?: React.ReactNode;
    errors: boolean|undefined;
    disabled: boolean;
}
export function AutoCompleteAsync<T>({
    defaultValue,
    disabled,
    errors,
    getOptionLabel,
    helperText,
    isOptionEqualToValue,
    label,
    loading,
    name,
    onChange,
    onClose,
    onOpen,
    open,
    options,
    value
}: AutoCompleteAsyncProps<T>) {
    return (
        <Autocomplete
            fullWidth
            noOptionsText={'No hay resultados'}
            size='small'
            open={open}
            onOpen={onOpen}
            onClose={onClose}
            isOptionEqualToValue={isOptionEqualToValue}
            getOptionLabel={getOptionLabel}
            options={options}
            loading={loading}
            value={value}
            onChange={(e, value) => onChange(e, value)}
            disabled={disabled}
            defaultValue={defaultValue}
            renderInput={(params) => (
                <TextField
                    error={errors}
                    helperText={helperText}
                    name={name}
                    {...params}
                    label={label}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}

export default AutoCompleteAsync
