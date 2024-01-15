import { IconButton, Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
interface BtnEditarLinkProps {
    href: string;
    title: string;
}
export const BtnEditarLink = ({ href, title }: BtnEditarLinkProps) => {
    return (
        <Tooltip title={title}>
            <Link to={href}>
                <IconButton
                    color="primary"
                >
                    <EditIcon
                        color='success'
                    />
                </IconButton>
            </Link>
        </Tooltip>
    )
}

interface BtnEliminarLinkProps {
    title: string;
    onClick: () => void;
}
export const BtnEliminarLink = ({ title, onClick }: BtnEliminarLinkProps) => {
    return (
        <Tooltip title={title}>
            <IconButton
                onClick={onClick}
                color="primary"
            >
                <DeleteIcon
                    color='error'
                />
            </IconButton>
        </Tooltip>
    )
}

interface BtnEditProps {
    title: string;
    onClick: () => void;
}
export const BtnEdit = ({ title, onClick }: BtnEditProps) => {
    return (
        <Tooltip title={title}>
            <IconButton
                onClick={onClick}
                color="primary"
            >
                <EditIcon
                    color='success'
                />
            </IconButton>
        </Tooltip>
    )
}
interface BtnExportProps {
    title: string;
    onClick: () => void;
}
export const BtnExport = ({ title, onClick }: BtnEditProps) => {
    return (
        <Tooltip title={title}>
            <IconButton
                onClick={onClick}
                color="primary"
            >
                <VisibilityIcon
                    color='success'
                />
            </IconButton>
        </Tooltip>
    )
}