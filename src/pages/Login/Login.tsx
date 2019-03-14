/** @jsx jsx */

import * as React from "react";
import { jsx, css, Global } from '@emotion/core'
import { Textfield, Button } from '@/components/form'
import { Color, Root } from '@/theme'
import * as logo from '@/public/logo.png'
import { containerCss, brandContainer, logoCss, brandName } from './Login-css'

export const Login = () => 
  <div css={containerCss}>
    <div css={brandContainer}>
      <img css={logoCss} src={logo} />
      <h2 css={brandName}>truelo</h2>
    </div>
    <div>
      <Textfield
        placeholder="email" />
      <Textfield
        placeholder="password" />
      <Button
        label="login" />
    </div>
    <Global styles={Root} />
  </div>