import { createStyles } from '@material-ui/core/styles';
import jssVariables from "../../../helpers/variables";

const drawerWidth = 260;

const DashboardStyle = (theme: any) =>
  createStyles({
    content: {
      position: 'relative',
      minHeight: '100vh',
      flexGrow: 1,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      paddingTop: 64,
      width: `calc(100% - ${drawerWidth}px)`,
      backgroundColor: jssVariables.baseColor,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    title: {
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      background: 'linear-gradient(to right, rgb(224 19 109) 9.38%, rgb(255 5 84) 88.54%)',
      marginTop: 20,
      marginBottom: 0,
      fontSize: 28,
      width: 'max-content'
    },
    contentShift: {
      marginLeft: 0,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
  });

export default DashboardStyle;
