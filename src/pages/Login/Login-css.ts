/** @jsx jsx */
import * as React from "react";
import { jsx, css } from '@emotion/core'
import {Label, Type} from '@/theme'

export const containerCss = css`
  ${Label('container')}
  padding: 24px;

  input {
    margin-bottom: 16px;
  }
`

export const brandContainer = css`
  ${Label('brand-container')}
  text-align: center;
  margin-top: 20%;
`;

export const logoCss = css`
  ${Label('logo')}
  width: 64px;
`;

export const brandName = css`
  ${Label('brand-name')}
  ${Type.brandName}
  font-size: 2em;
  margin-bottom: 32px;
  margin-top: -16px;
`