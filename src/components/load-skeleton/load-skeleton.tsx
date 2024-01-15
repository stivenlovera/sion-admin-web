import { Grid, Skeleton, Stack } from "@mui/material";

interface LoadSectionProps {
    grid: number;
    height: number;

}
export const LoadSection = ({ height, grid }: LoadSectionProps) => {
    return (
        <Grid container item sm={grid} sx={{ p: 1 }}  >
            <Stack spacing={1} sx={{ minWidth: '100%' }} style={{ alignItems: "center" }} >
                <Skeleton variant="rounded" sx={{ width: '100%' }} height={height} />
            </Stack>
        </Grid>
    );
};