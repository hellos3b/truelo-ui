/** @jsx jsx */

import * as React from "react";
import { jsx, css, Global } from '@emotion/core'
import { Color, Root, Type, Label } from '@/theme'
import * as locationImage from '@/public/location.png'
import { Button } from '@/components/form'
// import { containerCss, brandContainer, logoCss, brandName } from './login-css'

const groupName = css`
  ${Label('group-name')}
  ${Type.pageHeader}
  text-align: center;
`

const subHeader = css`
  ${Label('sub-header')}
  display: flex;
  justify-content: center;
  font-size: 0.8em;
`

const headerItem = css`
  margin: 0 8px;
  color: ${Color.fontLight};
`

const locationIcon = css`
  height: 1.2em;
  vertical-align: text-top;
`

const buttonContainer = css`
  padding: 16px;
`

const groupOverview = css`
  background: #fff;
`

const groupDescription = css`
  font-size: 0.75em;
  padding: 16px;
`

export const GroupOverview = () => 
  <div css={groupOverview}>
    <div css={groupName}>Silicon Valley Cornhole</div>
    <div css={subHeader}>
      <div css={headerItem}>18 Members</div>
      <div css={headerItem}>
        <img css={locationIcon} src={locationImage}/> San Jose, CA
      </div>
    </div>
    <div css={groupDescription}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat erat nec quam eleifend suscipit. Fusce quis aliquam est. Sed at soll.
    </div>
    <div css={buttonContainer}>
      <Button label="Join Group" />
    </div>
  </div>