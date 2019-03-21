import '@babel/polyfill'
import flyio from 'flyio'
import APIS from '@/assets/api/api.json'

flyio.config.baseURL = ''
// flyio.config.withCredentials = true
flyio.config.timeout = 100000
flyio.config.responseType = 'json'

flyio.interceptors.request.use(config => {
  let contentType = 'application/json'
  // php $_POST, $REQUEST专用
  // if (config.method === 'POST' || config.method === 'PATCH') contentType = 'application/x-www-form-urlencoded'
  config.headers['Content-Type'] = contentType
  return config
},
error => {
  return Promise.reject(error)
})

flyio.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

const http = {}
for (let api of Object.keys(APIS)) {
  http[api] = (params) => fetch({
    api,
    params
  })
}

const matchUri = (url, params) => {
  url = url.replace(/\$\w+/, a => {
    const key = a.slice(1)
    const val = params[key]
    delete params[key]
    return val
  })
  return url
}

const fetch = (options) => {
  if (options.constructor !== Object) throw new Error('fetch options must be object!')
  if (!options.api && !options.url) throw new Error('fetch options have no api or url!')

  return new Promise((resolve, reject) => {
    const fromApi = !!options.api
    let { method, url } = fromApi ? APIS[options.api] : options
    if (!method) throw new Error('fetch options have no method!')
    if (url.includes('$')) {
      url = matchUri(url, options.params)
    }

    const params = options.params || {}

    flyio[method.toLowerCase()](url, params, options.configs)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export { http, fetch }
