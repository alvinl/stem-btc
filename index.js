
module.exports = function (stem) {

  const USD_TICKER_API = 'https://api.bitcoinaverage.com/ticker/global/USD/';

  stem.api.addCommand(/btc/, function (steamID) {

    stem.api.request({ json: true, url : USD_TICKER_API }, function (err, response, apiResponse) {

      if (err || response.statusCode !== 200) {

        stem.log.error(err ? err.message : new Error('Bad response'));

        return stem.bot.sendMessage(steamID, 'Sorry, there was an error looking up the current price.');

      }

      stem.bot.sendMessage(steamID, 'Current price: $' + apiResponse.last);
      stem.bot.sendMessage(steamID, '24h average: $' + apiResponse['24h_avg']);

    });

  }, { permission: 'admin' });

};
