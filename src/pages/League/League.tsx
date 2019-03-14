/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useRequest } from '@/api/useAPI'
import { LeagueOverview } from './components/LeagueOverview'
import { NavTabs } from '@/components/navtabs/NavTabs'
import { LeaguePlayers } from './components/LeaguePlayers'
import { LeagueAPI } from '@/api/urls'

export const LeaguePage = (id: string): JSX.Element => {
  const {data: league, loading, error} = useRequest(LeagueAPI.fetch(id))

  if (loading) return <div>Loading</div>
  if (error) return <div>opsie</div>
  return <League elos={league.elos} />
}

const League = ({ elos }: Truelo.League) => 
  <main>
    <LeagueOverview />
    <NavTabs 
      tabs={["ranking", "activity"]}/>
    <LeaguePlayers 
      elos={elos} />
  </main>