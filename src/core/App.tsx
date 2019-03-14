/** @jsx jsx */
import { jsx, Global } from '@emotion/core'

import { Root } from '@/theme'
import { componentForRoute } from '@/core/router'
import { Navbar } from '@/components/navbar/Navbar'

import '@/pages/routes'

type Props = {
  space: SpaceAce.Space;
}

export const App = ({space}: Props) => {
  const Page = componentForRoute(space.route)
  
  return (
    <div id="app">
      <Page.component {...Page.params} />
      <Navbar selected={Page.navGroup} /> 
      <Global styles={Root} />
    </div>
  )
}