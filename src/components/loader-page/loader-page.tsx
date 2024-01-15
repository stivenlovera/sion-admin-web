import { Backdrop, CircularProgress } from '@mui/material'
interface LoaderPageProps {
    load: boolean
}
const LoaderPage = ({ load }: LoaderPageProps) => {
    return (
        <Backdrop
            sx={{
                color: '#fff', zIndex: (theme) =>
                    Math.max.apply(Math, Object.values(theme.zIndex)) + 1,
            }}
            open={load}

        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default LoaderPage
