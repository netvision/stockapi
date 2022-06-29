const axios = require('axios').default;
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors())
app.get("/indices", (req, res, next) => {
    axios.get('https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/liveIndexWatchData.json')
      .then(function (response) {
        res.json(response.data);
      });
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

// Example: http://localhost:3000/nse/get_quote_info?companyName=TCS
app.get("/quote", (req, res, next) => {
    axios.get('https://www1.nseindia.com/live_market/dynaContent/live_watch/get_quote/ajaxGetQuoteJSON.jsp?series=EQ&symbol=' + encodeURIComponent(req.query.companyName), {
      headers: {
        Referer: 'https://www1.nseindia.com/live_market/dynaContent/live_watch/get_quote/ajaxGetQuoteJSON.jsp?series=EQ&symbol=' + encodeURIComponent(req.query.companyName),
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(function (response) {
      res.json(response.data);
    });
    
  });

//bse quote - Example: http://localhost:3000/bse?companyCode=543475
app.get("/bse", (req, res, next) => {
  axios.get('https://api.bseindia.com/BseIndiaAPI/api/getScripHeaderData/w?Debtflag=&seriesid=&scripcode=' + encodeURIComponent(req.query.companyCode)).then(function(response) {
    res.json(response.data)
  })
})

app.get("/nseofs", (req, res, next) => {
  axios.get('https://www1.nseindia.com/live_market/content/live_watch/offer_sale/ofs_details.json').then(function (response) {
    res.json(response.data)
  })
})

app.get("/nseofsretail", (req, res, next) => {
  axios.get('https://www1.nseindia.com/live_market/content/live_watch/offer_sale/ofs_details_retail.json').then(function (response) {
    res.json(response.data)
  })
})


app.listen(port, () => console.log('server running on: '+port));