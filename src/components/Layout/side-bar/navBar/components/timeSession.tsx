import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'

interface TimeSessionProps {
    tiempoTrascurrido: string;
}
const TimeSession = ({ tiempoTrascurrido }: TimeSessionProps) => {

    return (
        <Tooltip title="Session terminara en..." arrow>
            <Box
                sx={{
                    padding: 1,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            >
                {tiempoTrascurrido}
            </Box>
        </Tooltip>
    )
}

export default TimeSession
