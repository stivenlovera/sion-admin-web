import { Breakpoint, Dialog, Slide } from '@mui/material';
import { TransitionProps } from 'notistack';
import React, { ReactNode } from 'react'
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
interface ModalStandarProps {
    maxWidth: Breakpoint;
    open: boolean;
    onClose: () => void;
    children: ReactNode
}
const ModalStandar = ({ maxWidth, open, onClose, children }: ModalStandarProps) => {

    return (
        <React.Fragment>
            <Dialog
                TransitionComponent={Transition}
                fullWidth={true}
                maxWidth={maxWidth}
                open={open}
                onClose={onClose}
            >
                {children}
            </Dialog>
        </React.Fragment>
    )
}

export default ModalStandar
