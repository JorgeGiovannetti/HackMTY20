import React from 'react';
import { H1, H2, H3, H4, H5, H6, P } from './elements';
import types from './types';

const setTag = (
  color,
  variant,
  fontWeight,
  children,
  fontSize,
  className,
  underline,
  uppercase,
  capitalize,
  props
) => {
  let tag;
  switch (variant) {
    case types.HEADING1:
      tag = (
        <H1
          className={className}
          underline={underline}
          uppercase={uppercase}
          capitalize={capitalize}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight || 'bold'}
          {...props}
        >
          {children}
        </H1>
      );
      break;
    case types.HEADING2:
      tag = (
        <H2
          className={className}
          underline={underline}
          uppercase={uppercase}
          capitalize={capitalize}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight || 'bold'}
          {...props}
        >
          {children}
        </H2>
      );
      break;
    case types.HEADING3:
      tag = (
        <H3
          className={className}
          underline={underline}
          uppercase={uppercase}
          capitalize={capitalize}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight || 'bold'}
          {...props}
        >
          {children}
        </H3>
      );
      break;
    case types.HEADING4:
      tag = (
        <H4
          className={className}
          underline={underline}
          uppercase={uppercase}
          capitalize={capitalize}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight || 'bold'}
          {...props}
        >
          {children}
        </H4>
      );
      break;
    case types.HEADING5:
      tag = (
        <H5
          className={className}
          underline={underline}
          uppercase={uppercase}
          capitalize={capitalize}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight || 'bold'}
          {...props}
        >
          {children}
        </H5>
      );
      break;
    case types.HEADING6:
      tag = (
        <H6
          className={className}
          underline={underline}
          uppercase={uppercase}
          capitalize={capitalize}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight || 'bold'}
          {...props}
        >
          {children}
        </H6>
      );
      break;
    case types.DISPLAY1:
      tag = (
        <P
          className={className}
          underline={underline}
          uppercase={uppercase}
          capitalize={capitalize}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight || 'medium'}
          variant={variant}
          {...props}
        >
          {children}
        </P>
      );
      break;
    case types.DISPLAY2:
      tag = (
        <P
          className={className}
          underline={underline}
          uppercase={uppercase}
          capitalize={capitalize}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight || 'medium'}
          variant={variant}
          {...props}
        >
          {children}
        </P>
      );
      break;
    case types.DISPLAY3:
      tag = (
        <P
          className={className}
          underline={underline}
          uppercase={uppercase}
          capitalize={capitalize}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight || 'medium'}
          variant={variant}
          {...props}
        >
          {children}
        </P>
      );
      break;
    case types.DISPLAY4:
      tag = (
        <P
          className={className}
          underline={underline}
          uppercase={uppercase}
          capitalize={capitalize}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight || 'medium'}
          variant={variant}
          {...props}
        >
          {children}
        </P>
      );
      break;
    case types.HEADING:
      tag = (
        <P
          className={className}
          underline={underline}
          uppercase={typeof uppercase === 'undefined' ? true : uppercase}
          capitalize={capitalize}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight || 'bold'}
          variant={variant}
          {...props}
        >
          {children}
        </P>
      );
      break;
    case types.HEADING_TITLE:
      tag = (
        <P
          className={className}
          underline={underline}
          uppercase={uppercase}
          capitalize={capitalize}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight || 'bold'}
          variant={variant}
          {...props}
        >
          {children}
        </P>
      );
      break;
    case types.HEADING_SECTION:
      tag = (
        <P
          className={className}
          underline={underline}
          uppercase={typeof uppercase === 'undefined' ? true : uppercase}
          capitalize={capitalize}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          variant={variant}
          {...props}
        >
          {children}
        </P>
      );
      break;
    case types.PARAGRAPH:
      tag = (
        <P
          className={className}
          underline={underline}
          uppercase={uppercase}
          capitalize={capitalize}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          variant={variant}
          {...props}
        >
          {children}
        </P>
      );
      break;
    case types.LEAD_TEXT:
      tag = (
        <P
          className={className}
          underline={underline}
          uppercase={uppercase}
          capitalize={capitalize}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          variant={variant}
          {...props}
        >
          {children}
        </P>
      );
      break;
    case types.MUTED:
      tag = (
        <P
          className={className}
          underline={underline}
          uppercase={uppercase}
          capitalize={capitalize}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          variant={variant}
          {...props}
        >
          {children}
        </P>
      );
      break;
    default:
      tag = (
        <P
          className={className}
          underline={underline}
          uppercase={uppercase}
          capitalize={capitalize}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          variant={variant}
          {...props}
        >
          {children}
        </P>
      );
  }
  return tag;
};

export default setTag;
