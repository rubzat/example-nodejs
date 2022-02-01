
const express = require('express')
const app = express()
const port = 3000
const axios = require('axios').default;

//Config
axios.defaults.baseURL = 'https://api.weesign.mx';
axios.defaults.headers.post['user-id'] = 'USER_ID';
axios.defaults.headers.post['api-key'] = 'API_KEY';

app.get('/', (req, res) => {
  res.send('Hello API!');
})

app.get('/getToken', async (req, res) => {
  const token = await axios.post('/access/token');
  res.send(token.data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
