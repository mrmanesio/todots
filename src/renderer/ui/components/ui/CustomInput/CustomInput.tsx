import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomInputStyle from './CustomInputStyle';

interface CustomInputProps {
  input: any;
  icon: any;
  meta: any;
  id: string;
  value: string;
  classes: any;
}

const CustomInput: React.FC<CustomInputProps> = ({
  classes,
  input,
  icon,
  meta: { touched, invalid, error },
  id,
  value,
  ...custom
}) => {
  const [focused, setFocused] = useState<React.CSSProperties | null>(null);

  const handleOnFocus = () => {
    setFocused(classes.labelActive);
  };

  const handleOnBlur = () => {
    setFocused(null);
  };

  return (
    <label
      className={`${classes.label} ${focused} ${touched && invalid && classes.labelError}`}
      htmlFor={id}
    >
      <FontAwesomeIcon icon={icon} className={classes.icon} />
      <input
        {...input}
        {...custom}
        defaultValue={value}
        id={id}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      {touched && <span className={classes.error}>{error}</span>}
    </label>
  );
};

export default withStyles(CustomInputStyle, {
  name: 'CustomInput'
})(CustomInput);
