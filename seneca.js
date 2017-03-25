// [INFO] See discussion of node.js exports here:
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` othewise.
 */
exports.isValidEmail = function (email) {
  const re = new RegExp('^[^ ]*@myseneca.ca|senecac.on.ca|senecacollege.ca$');
  if (typeof email !== 'string') {
    return false;
  }
  return re.test(email);
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
  // eg tom smith   lastname=3
exports.formatSenecaEmail = function (name) {
  // const lastName = name.indexOf(' ');
  // return name.charAt(0).concat(name.substring(lastName + 1), '@seneca.ca');
  if (name == null) {
    throw new Error('name can\'t be left blank.');
  }
  if ((!(/^\w+$/.test(name)))) {
    throw new Error('no spaces, tabs, or new lines in the name');
  }
  return name.concat('@myseneca.ca');
};
