import React, { Component } from "react";
import {
  Container,
  PseudoInput,
  Label,
  Message,
  LeftIconContainer,
  InputGroup,
  Prefix,
} from "./elements";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  toggleActive = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

  render() {
    const {
      label,
      leftIcon,
      id,
      success,
      warning,
      error,
      message,
      value,
      onChange,
      children,
      prefix,
      className,
      align,
      placeholder,
      ...props
    } = this.props;
    const { active } = this.state;
    return (
      <Container
        className={className}
        onFocus={this.toggleActive}
        onBlur={this.toggleActive}
        {...props}
      >
        {label && (
          <Label weight="light" htmlFor={id}>
            {label}
            {props.required && "*"}
          </Label>
        )}
        {leftIcon && (
          <LeftIconContainer
            success={success}
            warning={warning}
            error={error}
            message={message}
            label={label}
            active={active}
          >
            {leftIcon}
          </LeftIconContainer>
        )}
        <InputGroup>
          {prefix && (
            <Prefix
              leftIcon={leftIcon}
              success={success}
              warning={warning}
              error={error}
            >
              {prefix}
            </Prefix>
          )}
          <PseudoInput
            id={id}
            value={value}
            onChange={onChange}
            success={success}
            warning={warning}
            error={error}
            leftIcon={!prefix && leftIcon}
            prefix={prefix}
            align={align}
            placeholder={placeholder}
            {...props}
          />
        </InputGroup>
        {message && (
          <Message success={success} warning={warning} error={error}>
            {message}
          </Message>
        )}
      </Container>
    );
  }
}

Input.defaultProps = {
  label: "",
  leftIcon: "",
  id: null,
  success: false,
  warning: false,
  error: false,
  message: "",
  placeholder: "",
  children: "",
  prefix: "",
  className: "",
  align: "left",
};

export default Input;
