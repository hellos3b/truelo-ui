/** @jsx jsx */

import * as React from "react";
import { jsx, css, Global } from '@emotion/core'
import { Color, Root, Type, Label } from '@/theme'
import * as locationImage from '@/public/location.png'
import { Button } from '@/components/form'
import { Avatar } from '@/components/avatar/Avatar'
import * as NoAvatar from '@/public/no-avatar.png'

import { RankIcon } from '@/components/rank-icon/RankIcon'

const cssListItem = css`
  ${Label('list-item')}
  background: #fff;
  display: flex;
  border-bottom: 1px solid ${Color.accentLight};

  .avatar,
  .right,
  .left {
    display: flex;
    align-items: center;
  }

  .avatar {
    padding-left: 16px;
  }

  .main {
    padding: 12px;
    flex-grow: 1;
  }
`

const cssSubText = css`
  font-size: 0.75em;
  color: #ccc;
`

export interface Props {
  title: string;
  subtext?: string;
  avatar?: string;
  left?: JSX.Element;
  right?: JSX.Element | string;
}

export const ListItem = (props: Props) => 
  <div css={cssListItem}>
    {props.left &&
      <div className='left'>
        {props.left}
      </div>
    }
    {props.avatar && 
      <div className='avatar'>
        <Avatar src={props.avatar} size='32px'/>
      </div>
    }
    <div className='main'>
      <div>{props.title}</div>
      <div css={cssSubText}>{props.subtext}</div>
    </div>
    {props.right && 
      <div className='right'>
        {props.right}
      </div>
    }
  </div>