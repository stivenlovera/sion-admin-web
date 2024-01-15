import { Button, SxProps, Theme } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from 'react-router-dom';
interface ButtonAseptarProps {
    onclick?: () => void
    name: string;
}
export const ButtonAseptar = ({ onclick, name }: ButtonAseptarProps) => {
    return (
        <Button
            type='submit'
            color='success'
            size='small'
            variant="contained"
            sx={{ m: 1 }}
            startIcon={<CheckIcon />}
            onClick={onclick}
        >
            {name}
        </Button>

    )
}
interface ButtonSaveProps {
    onclick?: () => void
}
export const ButtonSave = ({ onclick }: ButtonSaveProps) => {
    return (
        <Button
            type='submit'
            color='success'
            size='small'
            variant="contained"
            sx={{ m: 1 }}
            startIcon={<SaveIcon />}
            onClick={onclick}
        >
            Registrar
        </Button>

    )
}
interface ButtonAddProps {
    onclick?: () => void,
    sx?: SxProps<Theme> | undefined
}
export const ButtonAdd = ({ onclick, sx }: ButtonAddProps) => {
    return (
        <Button
            color='primary'
            size='small'
            variant="contained"
            sx={sx}
            startIcon={<AddIcon />}
            onClick={onclick}
        >
            Añadir
        </Button>
    )
}
export const ButtonBack = () => {
    const navigate = useNavigate();
    return (
        <Button
            color='primary'
            size='small'
            variant="contained"
            sx={{ m: 1 }}
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
        >
            Volver
        </Button>
    )
}

interface ButtonCloseProps {
    onclick?: () => void
}
export const ButtonClose = ({ onclick }: ButtonCloseProps) => {
    return (
        <Button
            color='primary'
            size='small'
            variant="contained"
            sx={{ m: 1 }}
            startIcon={<CloseIcon />}
            onClick={onclick}
        >
            Cancelar
        </Button>
    )
}
