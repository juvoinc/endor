import axios from 'axios'

let token =
  '_9WWnt4gcEVHI3q4sVeo/l4D7Yt48Q6/XQ4n7PNk6vet9msP8mZwu20qLWA7GJ7aq1LeKZLQOa/QMZfW8HHjk+Q==_'

const dtClient = axios.create({
  baseURL: 'http://dt-dev-eks.5886662453.com/dt',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Api-Version': '4',
    package: 'dt.lend.hu',
    Authorization: `${token}`
  }
})

dtClient.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers['Authorization'] = `${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const createToken = async () => {
  try {
    const response = await dtClient.post('tokens', {
      key: '0a2b5ea443e24728911ab56e3758cc53',
      secret: 'e1d06eaef429a15640003cb27f02cad0'
    })

    if (response.data && response.data.token) {
      token = response.data.token
    }
  } catch (error) {
    console.error('Error creating token:', error)
  }
}

const ensureToken = async () => {
  if (
    token ===
    '_9WWnt4gcEVHI3q4sVeo/l4D7Yt48Q6/XQ4n7PNk6vet9msP8mZwu20qLWA7GJ7aq1LeKZLQOa/QMZfW8HHjk+Q==_'
  ) {
    await createToken()
  }
}

export const getProducts = async () => {
  await ensureToken()
  return dtClient.post('products', {
    msisdns: [
      '_9WWnt4gcEVHI3q4sVeo/l4D7Yt48Q6/XQ4n7PNk6vet9msP8mZwu20qLWA7GJ7aq1LeKZLQOa/QMZfW8HHjk+Q==_'
    ]
  })
}

export const getAccountDetails = async () => {
  await ensureToken()
  return dtClient.post('account', {
    msisdns: [
      '_9WWnt4gcEVHI3q4sVeo/l4D7Yt48Q6/XQ4n7PNk6vet9msP8mZwu20qLWA7GJ7aq1LeKZLQOa/QMZfW8HHjk+Q==_'
    ]
  })
}

export const sendRepayment = async () => {
  await ensureToken()
  return dtClient.post('loan_repaid', {
    balance: 0,
    time: '2024-09-16 10:00:00 UTC',
    msisdn:
      '_9WWnt4gcEVHI3q4sVeo/l4D7Yt48Q6/XQ4n7PNk6vet9msP8mZwu20qLWA7GJ7aq1LeKZLQOa/QMZfW8HHjk+Q==_'
  })
}

export const sendPurchase = async (product_id: String) => {
  await ensureToken()
  return dtClient.post('purchases', {
    product_id,
    msisdn:
      '_9WWnt4gcEVHI3q4sVeo/l4D7Yt48Q6/XQ4n7PNk6vet9msP8mZwu20qLWA7GJ7aq1LeKZLQOa/QMZfW8HHjk+Q==_'
  })
}
