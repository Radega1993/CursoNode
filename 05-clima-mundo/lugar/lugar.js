const axios = require('axios');


const getLugarLatLng = async (dir) => {
  const encodedUrl = encodeURI(dir);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: {
      'x-rapidapi-key': '8d919a0244mshab03b9e4a0b2a93p1b2224jsn1a293b2386a4'
    }
  });

  const resp = await instance.get();
  if (resp.data.Results === 0) {
    throw new Error(`No hay resultados para ${dir}`);
  }

  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    direccion,
    lat,
    lng
  }
}

module.exports = {
  getLugarLatLng
}
