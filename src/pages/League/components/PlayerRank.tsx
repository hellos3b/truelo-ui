/** @jsx jsx */

import { jsx, css, Global } from '@emotion/core'
import { ListItem } from '@/components/list/ListItem'
import * as NoAvatar from '@/public/no-avatar.png'
import { RankGroup, getRankByElo } from '@/config/ranks'
import { RankIcon } from '@/components/rank-icon/RankIcon';

const borderColors: {[key:string]: string} = {
  [RankGroup.Bronze]: '#f3e6cd',
  [RankGroup.Silver]: '#ececec',
  [RankGroup.Gold]: '#fdf2db',
  [RankGroup.Platinum]: '#e0fcff',
  [RankGroup.Diamond]: '#dbe5f5',
  [RankGroup.Champion]: '#ffdeff',
  [RankGroup.GrandChampion]: '#ffdeff'
}

const divisionStr = (division: number) => {
  if (division === 1) return 'I'
  if (division === 2) return 'II'
  return 'III'
}

const cssRankBorder = (background: string) => css`
  /* background-color: ${background}; */
  font-size: 0.75em;
  height: 100%;
  width: 98px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 22px;
  }

  .elo {
    /* margin-right: 8px; */
  }
`

const cssRankPlace = css`
  padding-left: 16px;
  width: 18px;
  font-size:0.8em;
  display: flex;
  align-items: center;
  justify-content: center;
`

const RankBorder = ({elo}: {elo: number}) => {
  const rank = getRankByElo(elo)
  const bg = borderColors[rank.group]
  return (
    <div css={cssRankBorder(bg)}>
      <RankIcon rank={rank} />
      <div className='elo'>{elo}</div>
      {/* {divisionStr(rank.division)} */}
    </div>
  )
}

const RankPlace = ({rank}: {rank: number}) => {
  return (
    <div css={cssRankPlace}>
      {rank}
    </div>
  )
}

export interface PlayerRankProps {
  rank: number;
  name: string;
  elo: number;
}


export const PlayerRank = ({rank, name, elo } : PlayerRankProps) => {
  // const Rank = <RankIcon elo={elo} />

  return (
    <ListItem
      avatar={NoAvatar}
      title={name}
      subtext="Last played Yesterday"
      left={<RankPlace rank={rank}/>}
      right={<RankBorder elo={elo}/>} />
  )
}

  // <div css={playerRank}>
  //   <div css={cardLeft}>
  //     <Avatar src={NoAvatar} size='48px'/>
  //   </div>
  //   <div css={cardCenter}>
  //     <div>{name}</div>
  //     <div css={subText}>Last played Yesterday</div>
  //   </div>
  //   <div css={cardRight}>
  //     <div css={rankImage}>
  //         <RankIcon elo={elo} />
  //     </div>
  //     <div css={rankElo}>{elo}</div>
  //   </div>
  // </div>