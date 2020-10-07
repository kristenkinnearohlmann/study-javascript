// https://www.npmjs.com/package/axios#axios-api
// npm install axios
// https://sv443.net/jokeapi/v2/joke/Any?format=xml

const axios = require('axios').default;

axios.get('https://sv443.net/jokeapi/v2/joke/Any?format=xml').then(function (response) {
    console.log(response.headers['content-type']);
})