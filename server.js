const axios = require('axios').default;
const express = require('express');
const app = express();
const port = 3001;
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
app.get('/', (req, res) => {
    const url = 'https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/liveIndexWatchData.json';
    axios.get(url).then(r =>{
        res.json(r.data);
    })
});

app.listen(port, () => console.log('server running'));