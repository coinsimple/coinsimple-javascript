function Invoice(params) {
  this.params = (typeof(params) == 'object') ? params : {};

  this.setName = function setName(name) {
    this.params.name = name;
    return this;
  }

  this.setEmail = function setEmail(email) {
    this.params.email = email;
    return this;
  }

  this.addItem = function addItem(item) {
    if (!Array.isArray(this.params.items)) {
      this.params.items = [];
    }

    this.params.items.push(item);
    return this;
  }

  this.setProcessor = function setProcessor(processor) {
    this.params.processor = processor;
    return this;
  }

  this.setRate = function setRate(rate) {
    this.params.rate = rate;
    return this;
  }

  this.setCurrency = function setCurrency(currency) {
    this.params.currency = currency;
    return this;
  }

  this.setNotes = function setNotes(notes) {
    this.params.notes = notes;
    return this;
  }

  this.setDiscount = this.setPercent = function setDiscount(percent) {
    this.params.percent = percent;
    return this;
  }

  this.setCustom = function setCustom(data) {
    this.params.custom = data;
    return this;
  }

  this.setCallbackUrl = function setCallbackUrl(url) {
    this.params.callback_url = url;
    return this;
  }

  this.setRedirectUrl = function setRedirectUrl(url) {
    this.params.redirect_url = url;
    return this;
  }

  this.stopAfter = this.setRecurringTimes = function setRecurringTimes(times) {
    this.params.recurring_times = times;
    return this;
  }

  this.recurByDays = function recurByDays(num_days) {
    this.params.invoice_type = 'days';
    this.params.interval = num_days;
    return this;
  }

  this.recurByDate = function recurByDate(day_of_month) {
    this.params.invoice_type = 'date';
    this.params.interval = day_of_month;
    return this;
  }

  this.data = function data() {
    return this.params;
  }
}

module.exports = Invoice;
