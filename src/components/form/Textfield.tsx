/** @jsx jsx */
import * as React from "react";
import { jsx, css } from '@emotion/core'
import { formGroup, inputStyle, inputGroup } from './Textfield-css'

export interface TextfieldProps { 
  label?: string; 
  placeholder?: string; 
}

export const Textfield = ({label, placeholder}: TextfieldProps) => 
  <div css={formGroup}>
    { label ? <label>{label}</label> : null }
    <div css={inputGroup}>
      <input type='text' css={inputStyle} placeholder={placeholder}/>
    </div>
  </div>