/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useEffect } from 'react'
import { space } from '@/core/Space'
import { ListItem } from '@/components/list/ListItem'
import * as NoAvatar from '@/public/no-avatar.png'

import { ranks } from '@/config/ranks'
import { RankIcon } from '@/components/rank-icon/RankIcon';

const cssRankPage = css`
  margin-top: 40px;
  img {
    width: 64px;
  }
`
export const RankPage = () => {

  return (
    <main css={cssRankPage}>
      {ranks.map(r => {
        if (r.division === 1) {
          return (<RankIcon rank={r} />)
        } else {
          return <RankIcon rank={r} />
        }
      })}
    </main>
  )
}