// First require (e.g., load) our seneca.js module
var seneca = require('./seneca');

/**
 * Tests for seneca.isValidEmail()
 */
describe('seneca.isValidEmail()', function() {

  test('returns true for simple myseneca address', function() {
    var simpleEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns false for a non-myseneca address', function() {
    var gmailAddress = 'someone@gmail.com';
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });
  test('returns false for a integer', function() {
    var number = 5;
    expect(seneca.isValidEmail(number)).toBe(false);
  });
  test('returns false for a boolean', function() {
    var number = false;
    expect(seneca.isValidEmail(number)).toBe(false);
  });
  test('returns false for a null', function() {
    var undefinedvariable;
    expect(seneca.isValidEmail(undefinedvariable)).toBe(false);
  });
  test('returns true for seneca address with @senecacollege.ca', function() {
    var email = 'max.fain@senecacollege.ca';
    expect(seneca.isValidEmail(email)).toBe(true);
  });
  test('returns true for seneca address with @senecac.on.ca', function() {
    var anotherEmail = 'max.fain@senecac.on.ca';
    expect(seneca.isValidEmail(anotherEmail)).toBe(true);
  });
  test('returns false for having white space', function() {
    var FinalEmail = ' max.fain@senecac.on.ca';
    expect(seneca.isValidEmail(FinalEmail)).toBe(true);
  });
});

/**
 * Tests for seneca.formatSenecaEmail()
 */
describe('seneca.formatSenecaEmail()', function() {

  test('adds @myseneca.ca to the end of name', function() {
    var name = "mshaw";
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });
  test('throws on null input', () => {
    expect(() => {
      seneca.formatSenecaEmail()
    }).toThrow();
  });
  test('throws on spaces in input', () => {
    expect(() => {
      seneca.formatSenecaEmail(' mfainshtein4');
    }).toThrow();
  });
  test('throws on tabs in input', () => {
    expect(() => {
      seneca.formatSenecaEmail('	mfainshtein4');
    }).toThrow();
  });
    test('throws on newlines in input', () => {
    expect(() => {
      seneca.formatSenecaEmail('\nmfainshtein4');
    }).toThrow();
  });
});