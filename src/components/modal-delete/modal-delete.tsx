import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@mui/material'
import React from 'react'
import { Transition } from '../../pages/configuracion/roles/components/modal-roles'
import { ButtonAseptar, ButtonClose } from '../buttons/buttons';

interface ModalCicloProps<T> {
    data: T
    open: boolean;
    onClose: () => void;
    onSubmit: (data: T) => void;
}
export function ModalDelete<T>({ onClose, onSubmit, open, data }: ModalCicloProps<T>) {
    return (
        <React.Fragment>
            <Dialog
                TransitionComponent={Transition}
                fullWidth={true}
                maxWidth={'sm'}
                open={open}
                onClose={onClose}
            >
                <DialogTitle variant='h6' >
                    Esta seguro de eliminar?
                </DialogTitle>
                <DialogContent sx={{ m: 0, p: 0 }}>
                    <Typography variant='subtitle1' color={'GrayText'} align='center' sx={{ m: 0, p: 0 }}>
                        Atencion, es proceso es irreversible.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <ButtonAseptar
                        name='Si, eliminar'
                        onclick={() => onSubmit(data)}
                    />
                    <ButtonClose
                        onclick={onClose}
                    />
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}
