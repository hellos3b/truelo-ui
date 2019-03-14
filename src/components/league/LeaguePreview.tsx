/** @jsx jsx */

import * as React from "react";
import { jsx, css, Global } from '@emotion/core'
import { Color, Root, Label, Content } from '@/theme'
import * as BronzeI from '@/public/ranks/bronze-1.png'
import * as SilverII from '@/public/ranks/silver-2.png'
// import { containerCss, brandContainer, logoCss, brandName } from './login-css'

const LeagueCss = css`
  ${Label('league')}
  ${Content.borderLight}
  ${Content.borderRounded}
  margin: 4px;
  background: #fff;
  display: flex;
`

const LeagueName = css`
  font-family: 'Lato';
  letter-spacing: 0.02em;
  font-weight: 600;
`

const LeagueDescription = css`
  font-size: 0.75em;
  color: ${Color.fontLight};
`

const TagContainer = css`

`

const Tag = css`
  background: #ccc;
  border-radius: 8px;
  display: inline-block;
  margin-right: 8px;
  font-size: 0.75em;
  padding: 2px 6px;
`

const LeagueDetails = css`
  flex-grow: 1;
  padding: 16px;
`

const LeaguePlacement = css`
  padding: 16px;
  /* background: ${Color.accentLight}; */
  text-align: center;
`

const CurrentElo = css`
  font-size: 0.75em;
`

const LeagueRankIcon = css`
  width: 32px;
`

export interface LeagueProps {
  name: string;
  description: string;
  mmr?: number;
}

export const LeaguePreview = ({name, description, mmr=1104}: LeagueProps) => 
  <div css={LeagueCss}>
    <div css={LeagueDetails}>
      <div css={LeagueName}>{name}</div>
      <div css={LeagueDescription}>{description}</div>
      <div>
        <div css={Tag}>Open</div>
        <div css={Tag}>1v1</div>
      </div>
    </div>
    <div css={LeaguePlacement}>
      <img src={mmr === 1104 ? BronzeI : SilverII} css={LeagueRankIcon}/>
      <div css={CurrentElo}>{mmr}</div>
    </div>
  </div>