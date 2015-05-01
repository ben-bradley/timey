var ms = require('../'),
    should = require('should');

describe('Timey', function() {

  it('should convert from seconds', function() {
    (ms(5).seconds).should.equal(5000);
    (ms(5).second).should.equal(5000);
    (ms(5).secs).should.equal(5000);
    (ms(5).sec).should.equal(5000);
    (ms(5).s).should.equal(5000);
  });

  it('should convert from minutes', function() {
    (ms(5).minutes).should.equal(300000);
    (ms(5).minute).should.equal(300000);
    (ms(5).mins).should.equal(300000);
    (ms(5).min).should.equal(300000);
    (ms(5).m).should.equal(300000);
  });

  it('should convert from hours', function() {
    (ms(5).hours).should.equal(18000000);
    (ms(5).hour).should.equal(18000000);
    (ms(5).hrs).should.equal(18000000);
    (ms(5).hr).should.equal(18000000);
    (ms(5).h).should.equal(18000000);
  });

  it('should convert from days', function() {
    (ms(5).days).should.equal(432000000);
    (ms(5).day).should.equal(432000000);
    (ms(5).d).should.equal(432000000);
  });

  it('should convert from years', function() {
    (ms(5).years).should.equal(157680000000);
    (ms(5).year).should.equal(157680000000);
    (ms(5).yrs).should.equal(157680000000);
    (ms(5).yr).should.equal(157680000000);
    (ms(5).y).should.equal(157680000000);
  });

});
