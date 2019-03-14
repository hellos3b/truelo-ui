import { defineRoute, Route } from '@/core/router'


// Import all the pages
import {Login} from '@/pages/Login/Login'
import {HomePage} from '@/pages/Home/Home'
import {Group} from '@/pages/Group/Group'
import {GroupLandingPage} from '@/pages/Group/GroupLanding'
import {LeaguePage} from '@/pages/League/League'
import {Error404} from '@/pages/Error/Error'
import { RankPage } from '@/pages/test/Ranks';

interface RouteMap {
  [key: string]: {
    name: string;
    component: Route;
    navGroup: string;
  }
}

const routeMap: RouteMap = {
  '/404': {
    name: "404",
    component: Error404,
    navGroup: "Feed"
  },
  '/': {
    name: "Home",
    component: HomePage,
    navGroup: "Feed"
  },
  '/league/:id': {
    name: "League",
    component: ({id}) => LeaguePage(id),
    navGroup: "Groups"
  },
  '/ranks': {
    name: "Ranks",
    component: RankPage,
    navGroup: "Feed"
  },
  '/group': {
    name: "Group Landing",
    component: GroupLandingPage,
    navGroup: "Groups"
  }
}

for (var path in routeMap) {
  // const {name, component, navGroup} = routeMap[path]
  defineRoute(path, routeMap[path])
}

// defineRoute('/404', Error404)

// defineRoute('/', HomePage)

// defineRoute('/league', () => LeaguePage("1"))
// defineRoute('/league/:id', ({id}) => LeaguePage(id))
// defineRoute("/group", Group)
// defineRoute("/login", Login)