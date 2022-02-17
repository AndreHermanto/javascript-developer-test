const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const result = Promise.all(
    urls.map(async (url) => {
      try{
        const data = await httpGet(url)
        const res = JSON.parse(data.body)
        if(data.status !== 200) 
          return {'FAILURE': res.message }
        return {
          ["Arnie Quote"]: res.message
        }
      }catch(e) {
        return e;
      }
    })
  )
  return result;
};

module.exports = {
  getArnieQuotes,
};
