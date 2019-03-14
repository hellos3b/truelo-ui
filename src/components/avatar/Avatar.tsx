/** @jsx jsx */

import * as React from "react";
import { jsx, css, Global } from '@emotion/core'
import { Color, Root, Label } from '@/theme'
import * as coverImage from '@/public/sv-cover.jpg'
// import { containerCss, brandContainer, logoCss, brandName } from './login-css'

const AvatarCss = css`
  ${Label('avatar')}
  border: 2px solid #fff;
  background-size: cover;
  background-position: center;
  border-radius: 100%;
`

export interface AvatarProps {
  src: any;
  size?: string;
}

export const Avatar = ({ src, size='64px' } :AvatarProps) => 
  <div css={AvatarCss} style={{'backgroundImage': `url('${src}')`, width: size, height: size}}>

  </div>