import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaymentsIcon from '@mui/icons-material/Payments';
import SettingsIcon from '@mui/icons-material/Settings';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon';
import { IModulos } from '../../../../services/Intefaces/IAuthenticacion';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import RuleIcon from '@mui/icons-material/Rule';
import BadgeIcon from '@mui/icons-material/Badge';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import GavelIcon from '@mui/icons-material/Gavel';
import PinIcon from '@mui/icons-material/Pin';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import TaskIcon from '@mui/icons-material/Task';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import Diversity3Icon from '@mui/icons-material/Diversity3';


export interface IconsProps {
    nombre: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}
export const icons: IconsProps[] = [
    {
        nombre: 'Bienvenido',
        icon: AccountBoxIcon
    },
    {
        nombre: 'Tablero',
        icon: DashboardIcon
    },
    {
        nombre: 'Configuracion',
        icon: SettingsIcon
    },
    {
        nombre: 'Usuario',
        icon: PeopleAltIcon
    },
    {
        nombre: 'Reportes',
        icon: PaymentsIcon
    },
    {
        nombre: 'Web comisiones',
        icon: WebAssetIcon
    },
    {
        nombre: 'Sistema',
        icon: WysiwygIcon
    },
    {
        nombre: 'Red',
        icon: AccountTreeIcon
    },
    {
        nombre: 'Acceso',
        icon: SupervisedUserCircleIcon
    },
    {
        nombre: 'Roles',
        icon: RuleIcon
    },
    {
        nombre: 'Lista asesores',
        icon: BadgeIcon
    },
    {
        nombre: 'Asesor',
        icon: AssignmentIndIcon
    },
    {
        nombre: 'Modulos',
        icon: ViewModuleIcon
    },
    {
        nombre: 'Empresas',
        icon: BusinessIcon
    },
    {
        nombre: 'Complejos',
        icon: WorkIcon
    },
    {
        nombre: 'Ciclos',
        icon: EventRepeatIcon
    },
    {
        icon: PriceCheckIcon,
        nombre: 'Comision'
    },
    {
        nombre: 'Tipo contrato',
        icon: GavelIcon
    },
    {
        nombre: 'Niveles',
        icon: PinIcon
    },
    {
        nombre: 'Proyeccion venta',
        icon: QueryStatsIcon
    },
    {
        nombre: 'Generar consolidados',
        icon: RestorePageIcon
    },
    {
        nombre: 'Consolidados',
        icon: TaskIcon
    },
    {
        nombre: 'Pago consolidados',
        icon: RequestQuoteIcon
    },
    {
        nombre: 'Lista venta grupo',
        icon: Diversity3Icon
    }
]
