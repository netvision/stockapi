const axios = require('axios').default;
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
app.use(cors())
app.get('/indices', (req, res) => {
    const url = 'https://www1.nseindia.com/live_market/dynaContent/live_analysis/gainers/niftyGainers1.json';
    axios.get(url).then(r =>{
        res.json(r.data);
    })
});
app.get('/gainers', (req, res) => {
    const url = 'https://www1.nseindia.com/live_market/dynaContent/live_analysis/gainers/niftyGainers1.json';
    axios.get(url).then(r =>{
        res.json(r.data);
    })
});
app.get('/loosers', (req, res) => {
    const url = 'https://www1.nseindia.com/live_market/dynaContent/live_analysis/losers/niftyLosers1.json';
    axios.get(url).then(r =>{
        res.json(r.data);
    })
});

app.get('/scrip/:id', (req, res) => {
    const id = req.params.id;
    const url = 'https://www1.nseindia.com/live_market/dynaContent/live_watch/get_quote/ajaxGetQuoteJSON.jsp?series=EQ&symbol='+id;
    axios.get(url).then(r =>{
        res.json(r.data);
    })
});


app.listen(port, () => console.log('server running on: '+port));