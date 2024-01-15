import React, { useEffect, useState } from 'react'
import { Transition } from '../../configuracion/roles/components/modal-roles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';

interface ModalRedReporteProps {
  open: boolean;
  onClose: () => void;
  url: string;
}

const ModalPreviewReporte = ({
  url,
  onClose,
  open
}: ModalRedReporteProps) => {

  const handleClose = () => {
    onClose();
  };
  
  useEffect(() => {
  }, [])

  return (
    <React.Fragment>
      <Dialog
        TransitionComponent={Transition}
        fullWidth={true}
        maxWidth={'lg'}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle variant='h6' >Preview Reporte</DialogTitle>
        <DialogContent>
          <object
            data={url}

            onLoadCapture={(x) => console.log('capture evento de carga')}
            type="application/pdf"
            width={'100%'}
            height={'600px'}
          >
          </object>
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
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default ModalPreviewReporte
