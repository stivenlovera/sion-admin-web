import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SelectToken, setToken } from '../../../../../Reducers/Slices/LoginSlice';
interface MenuUsuarioProps {
    open: boolean;
    onClose: () => void;
}
const MenuUsuario = ({ onClose, open }: MenuUsuarioProps) => {
    const token = useSelector(SelectToken);
    const dispatch = useDispatch();
    const updateToken = (token: boolean) => {
        dispatch(
            setToken({
                token: token
            })
        )
    }
    const logout = () => {
        console.log('cerrar session')
        updateToken(false);
    }
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    return (
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={onClose}
            onClick={onClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem onClick={onClose}>
                <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={onClose}>
                <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={onClose}>
                <ListItemIcon>
                    <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
            </MenuItem>
            <MenuItem onClick={onClose}>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={logout}>
                <ListItemIcon >
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    )
}

export default MenuUsuario
