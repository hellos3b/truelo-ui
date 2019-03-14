import { createSpace } from 'spaceace';
import { path } from '@/core/router'

const space = createSpace({ 
  route: path(),
  navGroup: "Feed"
})

export { space }