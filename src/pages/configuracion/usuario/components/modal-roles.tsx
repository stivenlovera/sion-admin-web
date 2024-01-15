import { DialogProps } from '@mui/material/Dialog';
import { IAutorizacion } from '../../../../interfaces/IAutorize';
import { ModalAccesos } from './modal-acceso';

export interface DataModalAccesosProps {
    edit: boolean;
    autorizacion: IAutorizacion;
}
export interface ModalAccesosProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (value: IAutorizacion) => void;
    data: DataModalAccesosProps
}
export default ModalAccesos