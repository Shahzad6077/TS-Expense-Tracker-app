import React from "react";
import classes from "./asset.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

interface OptionT {
  value: any; text: any
}

interface Props {
  LeftIcon?: React.FunctionComponent<any> | null;
  RightIcon?: React.FunctionComponent<any> | null;
  width?: string;
  placeholder?: string;
  error?: boolean;
  errorText?: string;
  containerStyle?: any;
  className?: string;

  optionsArr: OptionT[];
  name: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: any
}


const AddonInputField = React.forwardRef<HTMLSelectElement, Props>((
  {
    LeftIcon,
    RightIcon,
    width,
    placeholder,
    error,
    errorText,
    optionsArr = [],
    className,
    containerStyle,
    required,
    onChange,
    value,
    name
  },
  ref
) => {
  // const { LeftIcon, RightIcon, inputProps, width, props } = props;
  return (
    <div
      className={clsx(classes.addonInputWrapper, className)}
      style={{ ...containerStyle, width }}
    >
      {LeftIcon && <LeftIcon className={classes.lftSvg} />}
      <select
        ref={ref}
        className={clsx(classes.addonInputField, error && classes.errorField, LeftIcon && classes.forleftIcon, RightIcon && classes.forRightIcon)}
        autoComplete="off"
        name={name}
        required={required}
        onChange={onChange}
        value={value}

      >
        {optionsArr.map((o, i) => (
          <option key={i} value={o.value}>
            {o.text}
          </option>
        ))}
      </select>
      {RightIcon && <RightIcon className={classes.rightSvg} />}
      {placeholder && <label>{placeholder}</label>}
      <AnimatePresence>
        {error && (
          <motion.span
            className={classes.elperText}
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
