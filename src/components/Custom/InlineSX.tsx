import { Box, Stack } from '@mui/material';

const InlineSX = ({ condition = false }) => (
  <Stack
    sx={{
      gap: 2 // equivalent to gap: theme => theme.spacing(2) [spacing * 2]
    }}
  >
    <Box
      sx={{
        padding: 2, // equivalent to: theme => theme.spacing(2)
        mx: 2, // equivalent to: theme => theme.spacing(2)
        backgroundColor: 'primary.main', // equivalent to backgroundColor: theme => theme.palette.primary.main or bgcolor
        borderRadius: 2, // equivalent to borderRadius: theme => 2 * theme.shape.borderRadius
        border: 1, // equivalent to border: '1px solid black',
        borderColor: 'divider', // equivalent to borderColor: theme => theme.palette.divider
        displayPrint: 'none', // equivalent to '@media print': { display: 'none' }
        zIndex: 'tooltip', // equivalent to zIndex: theme => theme.zIndex.tooltip
        boxShadow: 1, // equivalent to boxShadow: theme => theme.shadows[1]
        width: 1 / 2, // equivalent to width: '50%'
        height: (theme) => theme.spacing(10)
      }}
    >
      Custom box with inline sx object
    </Box>

    <Box
      sx={(theme) => ({
        padding: theme.spacing(2, 4), // equivalent to: 'spacing * 2, spacing * 4'
        backgroundColor: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadius,
        ...theme.typography.body2,
        ...(condition && { color: '#fff' }),
        width: 120 // equivalent to width: '120px'
      })}
    >
      Custom box with inline sx function
    </Box>

    <Box
      sx={[
        { mr: 2, color: 'primary.main' },
        condition && { color: 'secondary.main' },
        (theme) => ({ '&:hover': { color: theme.palette.primary.main } })
      ]}
    >
      Custom box with inline sx array
    </Box>
  </Stack>
);

export default InlineSX;
