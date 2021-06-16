const axios = require('axios');

var baseUrl

if(process.env.NODE_ENV === 'development') {
  baseUrl = 'https://app.powercrm.com.br/';
} else if (process.env.NODE_ENV === 'test') {
  baseUrl = 'https://app.powercrm.com.br/';
} else {
  baseUrl = 'https://app.powercrm.com.br/';
}

const pwr = axios.create({
  baseURL: baseUrl
})

const TOKEN = window.localStorage.getItem('token')

export { pwr, TOKEN }
