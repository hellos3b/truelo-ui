/** @jsx jsx */

import { jsx } from '@emotion/core'
// import { CoverImage } from './components/CoverImage'
import { GroupOverview } from './components/GroupOverview'
import { NavTabs } from '@/components/navtabs/NavTabs'
import { LeaguePreview } from '@/components/league/LeaguePreview'
import { useRequest } from '@/api/useAPI'
import { GroupAPI } from '@/api/urls'
import { ListItem } from '@/components/list/ListItem'

export const GroupLandingPage = (id: string): JSX.Element => {
  const {data, loading, error} = useRequest(GroupAPI.fetchUser())

  if (loading) return <div>Loading</div>
  if (error) return <div>opsie</div>
  return <GroupLanding groups={data.groups}/>
}

type GroupLandingProps = {
  groups: Truelo.GroupOverview[];
}

const GroupLanding = ({ groups }: GroupLandingProps) => 
  <main>
    <NavTabs 
      tabs={["Groups", "Explore"]}/>
    {groups.map( (group) => 
      <ListItem
        avatar={group.avatar}
        key={group.id}
        title={group.name}
      />
    )}
  </main>