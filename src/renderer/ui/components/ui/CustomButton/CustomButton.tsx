import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button/Button';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import CustomButtonStyle from './CustomButtonStyle';

interface CustomButtonProps {
  children: any;
  type?: any;
  disabled?: boolean;
  classes: any;
  preloader?: boolean;
  customClass?: any;
  handleClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  classes,
  type,
  disabled,
  children,
  preloader,
  customClass,
  handleClick
}) => <Button
  type={type || 'button'}
  disabled={disabled}
  className={`${classes.button} ${preloader && classes.disabled} ${customClass}`}
  onClick={handleClick}
>
  {preloader ? (
    <CircularProgress className={classes.preloader} />
  ) : (
    <span className={classes.buttonText}>{children}</span>
  )}
</Button>;

export default withStyles(CustomButtonStyle, {
  name: 'CustomButton'
})(CustomButton);
