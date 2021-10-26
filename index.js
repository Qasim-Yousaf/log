function logg(params) {
  return console.log(JSON.stringify(params, undefined, 2));
}

module.exports = logg;
