import { EnqueueSnackbar, useSnackbar } from 'notistack';
import { IResponse } from '../../services/Intefaces/IResponse';

interface AlertaEventoProps<T> {
    data: IResponse<T>
    enqueueSnackbar: EnqueueSnackbar,
    success?: boolean
}
export function AlertaEvento<T>({ data, enqueueSnackbar, success }: AlertaEventoProps<T>) {
    switch (data.status) {
        case 1:
            if (success) {
                enqueueSnackbar({ message: data.message, variant: 'success', autoHideDuration: 3000 });
            }
            break;
        case 0:
            enqueueSnackbar(data.message, { variant: 'warning', autoHideDuration: 3000, });
            break;
        default:
            enqueueSnackbar(data.message, { variant: 'error', autoHideDuration: 3000, });
            break;
    }
}
