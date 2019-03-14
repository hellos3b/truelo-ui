
const baseUrl = `/api`
const route = (path: string) => baseUrl + path

type ID = number|string

export const LeagueAPI = {
  fetch: (id: ID) => route(`/league/${id}`)
}

export const GroupAPI = {
  fetchUser: () => route(`/groups`)
}