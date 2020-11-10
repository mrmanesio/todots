import { createStyles } from '@material-ui/core';
import jssVariables from '../../../../helpers/variables';

const CustomInputStyle = () =>
  createStyles({
    label: {
      position: 'relative',
      display: 'flex',
      border: `2px solid ${jssVariables.darkGreyColor}`,
      borderRadius: 45,
      paddingLeft: 45,
      paddingRight: 10,
      height: 46,
      marginBottom: 24,
      transition: 'border-color .3s',
      '& input': {
        width: '100%',
        height: '100%',
        border: 0,
        fontFamily: jssVariables.baseFont,
        fontWeight: 600,
        fontSize: 14,
        letterSpacing: 0.2,
        color: '#fff',
        backgroundColor: 'transparent',
        '&:focus': {
          outline: 'none'
        }
      },
      '&:hover': {
        borderColor: '#fff',
        '& $icon': {
          color: '#fff'
        }
      }
    },
    labelActive: {
      borderColor: '#fff !important',
      '& $icon': {
        color: '#fff !important'
      }
    },
    labelError: {
      borderColor: '#fff !important',
      '& $icon': {
        color: '#fff !important'
      }
    },
    icon: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 15,
      marginTop: 'auto',
      marginBottom: 'auto',
      color: '#6f7070',
      transition: 'color .3s'
    },
    error: {
      position: 'absolute',
      bottom: -18,
      left: 0,
      color: jssVariables.errorColor,
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 0.2
    }
  });

export default CustomInputStyle;
