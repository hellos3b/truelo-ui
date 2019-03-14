/** @jsx jsx */

import { jsx } from '@emotion/core'
import { useEffect } from 'react'
import { space } from '@/core/Space'
import { ListItem } from '@/components/list/ListItem'
import * as NoAvatar from '@/public/no-avatar.png'

export const HomePage = () => {
  return (
    <main>
      <h1>Hello Home</h1>
      <div>
        <ListItem 
          title="Hello"
          />
        <ListItem 
          title="Sebby H"
          subtext="Last Online: 24hr"
          />
        <ListItem 
          title="Sebby H"
          subtext="Last Online: 24hr"
          avatar={NoAvatar}
          />
        <ListItem 
          title="Sebby H"
          subtext="Last Online: 24hr"
          avatar={NoAvatar}
          right={<div>HELLO WORLD</div>}
          />
      </div>
    </main>
  )
}