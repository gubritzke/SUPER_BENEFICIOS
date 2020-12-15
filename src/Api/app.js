const axios = require('axios');

var baseUrl

if(process.env.NODE_ENV === 'development') {
  baseUrl = 'https://superbeneficios.guilhermegonzales.com.br/';
} else if (process.env.NODE_ENV === 'test') {
  baseUrl = 'https://superbeneficios.guilhermegonzales.com.br/';
} else {
  baseUrl = 'https://superbeneficios.guilhermegonzales.com.br/'
}

const api = axios.create({
  baseURL: baseUrl
})

const TOKEN = window.localStorage.getItem('token')

export { api, TOKEN }
