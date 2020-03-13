const axios = require('axios');


const getClima = async (lat, lng) => {

  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e4d3e6486c436fef59a62eb20f319199&units=metric
`);

  return resp.data.main.temp


}

module.exports = {
  getClima
}
