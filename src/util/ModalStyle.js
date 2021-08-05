import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = "11%";
  const left = "5%";

  return {
    top,
    left,
    "overflow-y": 'scroll',
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: "80%",
    height: "80%",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default getModalStyle;
