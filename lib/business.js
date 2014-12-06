var request  = require('request');
var cryptojs = require('crypto-js');

function Business(b_id, api_key) {
  var NEW_INVOICE_URL = "https://app.coinsimple.com/api/v1/invoice";

  this.sendInvoice = function sendInvoice(invoice, cb) {
    timestamp = Math.floor(new Date() / 1000);
    params = invoice.data();
    params.timestamp = timestamp;
    params.hash = cryptojs.HmacSHA256(api_key, timestamp.toString()).toString();
    params.business_id = b_id;

    request.post(NEW_INVOICE_URL, {json: params}, cb);
  }
}

module.exports = Business;
