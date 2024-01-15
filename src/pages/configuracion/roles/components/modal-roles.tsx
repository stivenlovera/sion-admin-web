import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Autocomplete, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Slide, TextField, Typography } from '@mui/material';
import { IAutorizacion } from '../../../../interfaces/IAutorize';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IRol } from '../../../../interfaces/roles';
import { TransitionProps } from '@mui/material/transitions';

export const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


interface ModalFuncionarioProps {
    edit: boolean;
    open: boolean;
    onClose: () => void;
    onSubmit: (value: IAutorizacion) => void;
    data: IRol
}
const ModalRoles = ({ onClose, open, data, onSubmit, edit }: ModalFuncionarioProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleClose = () => {
        onClose();
    };

    return (
        <React.Fragment>
            <Dialog
                TransitionComponent={Transition}
                fullWidth={true}
                maxWidth={'md'}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle variant='h6' >{edit ? 'Editar rol' : 'Crear rol'}</DialogTitle>
                <DialogContent>
                    <Typography variant='subtitle2' color={'GrayText'}>Registre roles o modifique roles.</Typography>
                    <br />
                    <Grid container spacing={2}>
                        <Grid item xs={6} lg={6} md={6}>
                            <TextField
                                size='small'
                                fullWidth
                                required
                                id="outlined-required"
                                label="Nombre rol"
                                defaultValue=""
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} lg={12} md={12}>
                            <Autocomplete
                                fullWidth
                                multiple
                                id="tags-standard"
                                options={[]}
                                /*  getOptionLabel={(option) => option.title} */
                                defaultValue={[]}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="standard"
                                        label="Selecione modulos"
                                        placeholder="modulos"
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button
                        size='small'
                        variant='contained'
                        color='error'
                        onClick={handleClose}
                    >
                        Cancelar
                    </Button>
                    <Button
                        size='small'
                        variant='contained'
                        color='success'
                        onClick={handleClose}
                    >
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
export default ModalRoles