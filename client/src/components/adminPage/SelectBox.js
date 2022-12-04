/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles/TextInput.css";
import Select from "react-dropdown-select";

const SelectBox = (props) => (
  <div className={classNames("form-group", props.groupClassName)}>
    <label
      className={classNames("form-label", props.labelClassName, {
        error: props.labelError,
      })}
    >
      {props.label}
    </label>

    <Select options={props.options} onChange={props.onChange} valueField={props.valueField}  labelField={props.labelField} disabled={props.disabled} />
    {props.error ? <p className="error--message">{props.errorText}</p> : ""}
  </div>
);

SelectBox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  groupClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  errorText: PropTypes.string,
  labelError: PropTypes.bool,
};

// Specifies the default values for props:
SelectBox.defaultProps = {
  inputType: "text",
  label: "Label",
  required: false,
  labelError: false,
  error: false,
};

export default SelectBox;
