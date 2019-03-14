/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import { PlayerRank } from './PlayerRank'

const leaguePlayers = css``

type Props = {
  elos: any[]
}

export const LeaguePlayers = ({ elos }: Props) => 
  <ul css={leaguePlayers}>
    {elos.map( (n, i) => 
        <PlayerRank
          key={i}
          name={n.name}
          elo={n.elo}
          rank={i+1} />
    )}
  </ul>