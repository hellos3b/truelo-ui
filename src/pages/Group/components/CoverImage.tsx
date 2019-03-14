/** @jsx jsx */

import * as React from "react";
import { jsx, css, Global } from '@emotion/core'
import { Color, Root, Label } from '@/theme'
import * as coverImage from '@/public/sv-cover.jpg'
// import { containerCss, brandContainer, logoCss, brandName } from './login-css'

const CoverImageCss = css`
  ${Label('cover-image')}
  background-image: url(${coverImage});
  height: 200px;
  background-position: bottom center;
  background-size: cover;
`

export const CoverImage = () => 
  <div css={CoverImageCss}>
  </div>