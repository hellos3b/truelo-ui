/** @jsx jsx */

import * as React from "react";
import { jsx, css, Global } from '@emotion/core'
import { Color, Root, Label } from '@/theme'
import * as coverImage from '@/public/sv-cover.jpg'
// import { containerCss, brandContainer, logoCss, brandName } from './login-css'

const NavTabsCss = css`
  ${Label('nav-tabs')}
  display: flex;
  background: ${Color.brandPrimary};
`

const NavItemCss = css`
  flex-grow: 1;
  text-align: center;
  padding: 12px;
  text-transform: uppercase;
  font-family: 'Lato';
  font-weight: 700;
  letter-spacing: 0.05em;
  border-bottom: 4px solid transparent;
  margin-bottom: -1px;
  font-size: 1em;
  color: rgba(255, 255, 255, 0.5);
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
`

const NavItemSelected = css`
  color: #fff;
  border-color: #fff;
`

export interface NavTabsProps {
  tabs: string[]
 }

export const NavTabs = ({ tabs } :NavTabsProps) => 
  <div css={NavTabsCss}>
    {tabs.map( (t, i) => 
      <div css={(i === 0) ? [NavItemCss, NavItemSelected] : NavItemCss} key={i}>{t}</div>
    )}
  </div>