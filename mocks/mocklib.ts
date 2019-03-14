
const mocks: {[key:string]:Mock} = {}
const _fetch = fetch

//@ts-ignore
window.fetch = async function(input: RequestInfo, init: RequestInit = {}) {
  const index = `${init.method || 'GET'} ${input}`
  if (mocks[index]) {
    const mock = mocks[index]
    console.log(`##MOCK ${input}`)
    console.log(mock)
    if (mock.delay) {
      await delay(mock.delay)
    }

    return ResponseObject(mock)
  } else {
    return _fetch(input, init)
  }
}

interface Mock {
  url: string;
  method: string;
  response: any;
  responseCode: number;
  delay?: number;
}

export const injectMocks = (mockOpt: Mock[]) => {
  for (var i = 0; i < mockOpt.length; i++) {
    const index = `${mockOpt[i].method} ${mockOpt[i].url}`
    mocks[index] = mockOpt[i]
  }
}

const delay = (ms: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

const ResponseObject = function(mock: Mock) {
  return {
    url: mock.url,
    ok: true,
    status: mock.responseCode,
    async json() {
      return mock.response
    }
  }
}