import MUITypography, { TypographyProps as MUITypographyProps } from '@mui/material/Typography'

interface TypographyProps extends MUITypographyProps {}

const Typography: React.FC<TypographyProps> = (props) => {
  return <MUITypography {...props} />
}

export default Typography
