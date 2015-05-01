module.exports = function(t) {
  var timey = {
    _value: t
  };

  var multipliers = {
    seconds: 1000,
    second: 1000,
    secs: 1000,
    sec: 1000,
    s: 1000,
    minutes: 1000 * 60,
    minute: 1000 * 60,
    mins: 1000 * 60,
    min: 1000 * 60,
    m: 1000 * 60,
    hours: 1000 * 60 * 60,
    hour: 1000 * 60 * 60,
    hrs: 1000 * 60 * 60,
    hr: 1000 * 60 * 60,
    h: 1000 * 60 * 60,
    days: 1000 * 60 * 60 * 24,
    day: 1000 * 60 * 60 * 24,
    d: 1000 * 60 * 60 * 24,
    years: 1000 * 60 * 60 * 24 * 365,
    year: 1000 * 60 * 60 * 24 * 365,
    yrs: 1000 * 60 * 60 * 24 * 365,
    yr: 1000 * 60 * 60 * 24 * 365,
    y: 1000 * 60 * 60 * 24 * 365
  };

  for (var name in multipliers) {
    (function(name, multiplier) {
      Object.defineProperty(timey, name, {
        get: function() {
          return this._value * multiplier;
        }
      });
    })(name, multipliers[name]);
  }

  return timey;
}
