/** @jsx jsx */
import * as React from "react";
import { jsx, css } from '@emotion/core'
import { buttonStyle } from './Button-css'


export interface ButtonProps { 
  label?: string; 
  placeholder?: string; 
}

export const Button = ({label, placeholder}: ButtonProps) => 
  <div css={buttonStyle}>
    {label}
  </div>