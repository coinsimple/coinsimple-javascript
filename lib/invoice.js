function Invoice(params) {
  var params = (typeof(params) == 'object') ? params : {};

  this.setName = function setName(name) {
    params.name = name;
    return this;
  }

  this.setEmail = function setEmail(email) {
    params.email = email;
    return this;
  }

  this.addItem = function addItem(item) {
    if (!Array.isArray(params.items)) {
      params.items = [];
    }

    params.items.push(item);
    return this;
  }

  this.setProcessor = function setProcessor(processor) {
    params.processor = processor;
    return this;
  }

  this.setRate = function setRate(rate) {
    params.rate = rate;
    return this;
  }

  this.setCurrency = function setCurrency(currency) {
    params.currency = currency;
    return this;
  }

  this.setNotes = function setNotes(notes) {
    params.notes = notes;
    return this;
  }

  this.setDiscount = this.setPercent = function setDiscount(percent) {
    params.percent = percent;
    return this;
  }

  this.setCustom = function setCustom(data) {
    params.custom = data;
    return this;
  }

  this.setCallbackUrl = function setCallbackUrl(url) {
    params.callback_url = url;
    return this;
  }

  this.setRedirectUrl = function setRedirectUrl(url) {
    params.redirect_url = url;
    return this;
  }

  this.stopAfter = this.setRecurringTimes = function setRecurringTimes(times) {
    params.recurring_times = times;
    return this;
  }

  this.recurByDays = function recurByDays(num_days) {
    params.invoice_type = 'days';
    params.interval = num_days;
    return this;
  }

  this.recurByDate = function recurByDate(day_of_month) {
    params.invoice_type = 'date';
    params.interval = day_of_month;
    return this;
  }

  this.data = function data() {
    return params;
  }
}

module.exports = Invoice;
