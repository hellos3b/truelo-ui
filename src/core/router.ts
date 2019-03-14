//@ts-ignore
import * as Nanorouter from 'nanorouter'
import createHistory from 'history/createMemoryHistory'
import { Location } from 'history';

const history = createHistory()

const routes = new Map<string, RouteCallback>()

export type Route = (params?:any) => JSX.Element;

type onPushState = (state: any, path: string) => void

interface RouteCallback {
  name: string;
  component: Route;
  navGroup: string;
}

const router = Nanorouter({default: '/404'})

let onPushState: onPushState = (state: any, path: string) => {}

history.listen((location: Location) => {
  onPushState(location.state, location.pathname + location.search)
})

export const defineRoute = (path: string, {name, component, navGroup="Feed"}: RouteCallback) => {
  console.log("Defining route", path)
  routes.set(name, { name, component, navGroup })
  router.on(path, () => name)
}

/** This is to trigger a navigation */
export const navigate = (state: object, path: string) => {
  console.log("Navigate", path, state)
  history.push(path, state)
  onPushState(state, path);
}

export const onHistoryChange = (callback: onPushState ) => {
  onPushState = callback;
}

export const path = () => window.location.pathname + window.location.search

interface ComponentRoute {
  params: any;
  component: Route;
  navGroup: string;
}

export const componentForRoute = (url: string): ComponentRoute => {
  const route = router.match(url)
  const {component, navGroup} = routes.get(route.cb())
  return {
    params: route.params,
    component,
    navGroup: navGroup
  }
}