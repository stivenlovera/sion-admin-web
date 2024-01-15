import { useState, forwardRef, useCallback } from "react";
import clsx from "clsx";
import { useSnackbar, SnackbarContent, CustomContentProps } from "notistack";
import Collapse from "@mui/material/Collapse";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import './styles.css';
import { Box, padding } from "@mui/system";
import { Alert } from "@mui/material";

interface ReportCompleteProps extends CustomContentProps {
    allowDownload?: boolean;
}

const ReportComplete = forwardRef<HTMLDivElement, ReportCompleteProps>(
    ({ id, ...props }, ref) => {
        const { closeSnackbar } = useSnackbar();
        const [open, setOpen] = useState(true);


        const handleDismiss = useCallback(() => {
            closeSnackbar(id);
        }, [id, closeSnackbar]);

        return (
            <SnackbarContent ref={ref} className="root">
                <Box sx={{ width: '100%' }}>
                    <Collapse in={open}>
                        <Alert
                            variant="filled"
                            severity="success"
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                            sx={{ mb: 2 }}
                        >
                            Close me!
                        </Alert>
                    </Collapse>
                </Box>
            </SnackbarContent>
        );
    }
);

ReportComplete.displayName = "ReportComplete";

export default ReportComplete;
