import React from "react";
import classes from "./asset.module.scss";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  LeftIcon?: React.FunctionComponent<any> | null;
  RightIcon?: React.FunctionComponent<any> | null;
  width?: string;
  placeholder: string;
  error?: boolean;
  errorText?: string;
  containerStyle?: any;
  name: string;
  type: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: any
}

const AddonInputField = React.forwardRef<HTMLInputElement, Props>((
  {
    LeftIcon,
    RightIcon,
    width,
    placeholder,
    error,
    errorText,
    containerStyle = {},
    name,
    type,
    required,
    onChange, value
  },
  ref
) => {
  // const { LeftIcon, RightIcon, inputProps, width, props } = props;
  return (
    <div className={classes.addonInputWrapper} style={{ ...containerStyle, width }}>
      {LeftIcon && <LeftIcon className={classes.lftSvg} />}
      <input
        ref={ref}
        className={`${classes.addonInputField} ${error ? classes.errorField : ""} ${LeftIcon && classes.forleftIcon
          }  ${RightIcon && classes.forRightIcon}`}
        autoComplete="off"
        name={name}
        type={type}
        required={required}
        onChange={onChange}
        value={value}
      />
      {RightIcon && <RightIcon className={classes.rightSvg} />}
      {placeholder && <label>{placeholder}</label>}
      <AnimatePresence>
        {error && (
          <motion.span
            className={classes.helperText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {errorText}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
});

export default AddonInputField;
