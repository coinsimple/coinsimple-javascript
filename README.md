coinsimple-javascript
=====================

JavaScript API for CoinSimple

### Demo

```js
var CoinSimple = require('coinsimple');

var invoice = new CoinSimple.Invoice({name: "Gabriel Manricks"});
invoice.setEmail("hi@coinsimple.com").addItem({price: 4, quantity: 2, description: "Shirt"});

var business = new CoinSimple.Business(BUSINESS_ID, API_KEY);

business.sendInvoice(invoice);
```

