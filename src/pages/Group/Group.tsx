/** @jsx jsx */

import { jsx } from '@emotion/core'
import { CoverImage } from './components/CoverImage'
import { GroupOverview } from './components/GroupOverview'
import { NavTabs } from '@/components/navtabs/NavTabs'
import { LeaguePreview } from '@/components/league/LeaguePreview'

export const Group = () => 
  <main>
    <CoverImage />
    <GroupOverview />
    <NavTabs 
      tabs={["leagues", "activity", "members"]} />
    <LeaguePreview 
      name='Advanced Singles'
      description='League for tracking 1v1' />
    <LeaguePreview 
      name='2v2 Weekly Tournament'
      description='Get your ranking in the weekly scoreholio tournament'
      mmr={1421} />
  </main>