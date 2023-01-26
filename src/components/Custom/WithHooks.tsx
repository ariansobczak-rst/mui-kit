import { Box } from '@mui/material';
import { StyledComponentProps, makeStyles, withStyles } from '@mui/styles';

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: '#f00',
    height: 100
  },
  box1: {
    backgroundColor: '#00f',
    height: '20px'
  }
});

const styles = {
  root: {
    background: '#0f0',
    padding: '10px'
  }
};

const HocBox = ({ classes }: Required<StyledComponentProps>) => <Box className={classes.root} />;

const MyBox = withStyles(styles)(HocBox);

const StyledComponent = ({ condition = false }) => {
  const styles = useStyles();

  return (
    <Box className={styles.wrapper}>
      <MyBox />
      <Box className={styles.box1} />
      <Box />
      <Box />
    </Box>
  );
};

export default StyledComponent;
