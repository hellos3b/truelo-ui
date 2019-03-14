import league1 from './api/league.1'
import groups from './api/groups'

export const mocks = [
  {
    url: '/api/league/1',
    method: 'GET',
    response: league1,
    responseCode: 200,
    delay: 300
  },
  {
    url: '/api/groups',
    method: 'GET',
    response:  groups,
    responseCode: 200,
    delay: 300
  }
]