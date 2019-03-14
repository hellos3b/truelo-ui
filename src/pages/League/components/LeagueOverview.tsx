/** @jsx jsx */

import * as React from "react";
import { jsx, css, Global } from '@emotion/core'
import { Color, Root, Type, Label } from '@/theme'
import * as locationImage from '@/public/location.png'
import { Button } from '@/components/form'
// import { containerCss, brandContainer, logoCss, brandName } from './login-css'

const leagueName = css`
  ${Label('group-name')}
  ${Type.pageHeader}
  text-align: center;
`

const subHeader = css`
  ${Label('sub-header')}
  color: ${Color.fontLight};
  display: flex;
  justify-content: center;
  font-size: 0.8em;
`

const buttonContainer = css`
  padding: 16px;
`

const groupOverview = css`
  background: #fff;
`

const leagueDescription = css`
  font-size: 0.75em;
  padding: 16px;
  text-align: center;
`

export const LeagueOverview = () => 
  <div css={groupOverview}>
    <div css={leagueName}>Advanced Singles</div>
    <div css={subHeader}>Silicon Valley Cornhole</div>
    <div css={leagueDescription}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
    <div css={buttonContainer}>
      <Button label="Start Match" />
    </div>
  </div>