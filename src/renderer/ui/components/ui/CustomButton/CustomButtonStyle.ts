import { createStyles } from '@material-ui/core';
import jssVariables from '../../../../helpers/variables';

const CustomButtonStyle = () =>
  createStyles({
    button: {
      position: 'relative',
      width: '100%',
      height: 40,
      backgroundColor: jssVariables.brandColor,
      // backgroundImage: 'linear-gradient(to right, rgb(255 5 84) 0%, rgb(212 31 123) 50%, rgb(162 11 116) 100%)',
      borderRadius: 60,
      color: '#fff',
      fontFamily: jssVariables.baseFont,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 0.5,
      overflow: 'hidden',
      transition: 'transform .4s, background-color .3s, opacity .3s',
      '&:hover': {
        backgroundColor: jssVariables.brandColorHover,
      },
      '&:hover $buttonLight': {
        opacity: 1
      },
    },
    buttonLight: {
      position: 'absolute',
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundSize: '200% 200%',
      backgroundImage:
        'radial-gradient(circle at center, rgb(255 5 84) 0%, rgb(234 19 59) 27.5%, rgb(243 10 83) 40%, rgb(212 31 123) 57.5%, rgb(208 14 102) 75%, rgb(162 11 116) 100%)',
      opacity: 0,
      zIndex: 0,
      transition: 'opacity 1.25s'
    },
    buttonText: {
      position: 'relative',
      zIndex: 1
    },
    disabled: {
      opacity: 0.5
    },
    preloader: {
      width: '12px !important',
      height: '12px !important',
      color: '#fff'
    }
  });

export default CustomButtonStyle;
