/** @jsx jsx */

import { jsx, } from '@emotion/core'

import * as Bronze1 from '@/public/ranks/bronze-1.png'
import * as Bronze2 from '@/public/ranks/bronze-2.png'
import * as Bronze3 from '@/public/ranks/bronze-3.png'

import * as Silver1 from '@/public/ranks/silver-1.png'
import * as Silver2 from '@/public/ranks/silver-2.png'
import * as Silver3 from '@/public/ranks/silver-3.png'

import * as Gold1 from '@/public/ranks/gold-1.png'
import * as Gold2 from '@/public/ranks/gold-2.png'
import * as Gold3 from '@/public/ranks/gold-3.png'

import * as Plat1 from '@/public/ranks/platinum-1.png'
import * as Plat2 from '@/public/ranks/platinum-2.png'
import * as Plat3 from '@/public/ranks/platinum-3.png'

import * as Diamond1 from '@/public/ranks/diamond-1.png'
import * as Diamond2 from '@/public/ranks/diamond-2.png'
import * as Diamond3 from '@/public/ranks/diamond-3.png'

import * as Champion from '@/public/ranks/champion.png'
import * as GrandChampion from '@/public/ranks/grand-champion.png'

import { RankGroup, getRankByElo } from '@/config/ranks'

const ranks = [
  [Bronze1, 20],
  [Bronze2, 40],
  [Bronze3, 60],
  [Silver1, 80],
  [Silver2, 100],
  [Silver3, 120],
  [Gold1, 140],
  [Gold2, 160],
  [Gold3, 180],
  [Plat1, 200],
  [Plat2, 220],
  [Plat3, 240],
  [Diamond1, 260],
  [Diamond2, 280],
  [Diamond3, 300],
  [Champion, 320],
  [GrandChampion, 340]
]

const icons = {
  [RankGroup.Bronze]: {
    1: Bronze1,
    2: Bronze2,
    3: Bronze3
  },
  [RankGroup.Silver]: {
    1: Silver1,
    2: Silver2,
    3: Silver3
  },
  [RankGroup.Gold]: {
    1: Gold1,
    2: Gold2,
    3: Gold3
  },
  [RankGroup.Platinum]: {
    1: Plat1,
    2: Plat1,
    3: Plat3
  },
  [RankGroup.Diamond]: {
    1: Diamond1,
    2: Diamond2,
    3: Diamond3
  },
  [RankGroup.Champion]: {
    1: Champion
  },
  [RankGroup.GrandChampion]: {
    1: GrandChampion
  }
}


export interface RankIconProps {
  rank: any;
}

export const RankIcon = ({ rank }: RankIconProps) => {
  // const rank = getRankByElo(elo)
  //@ts-ignore
  const src = icons[rank.group][rank.division]
  return <img src={src} />
}
  // <img src={getRank(elo)} />