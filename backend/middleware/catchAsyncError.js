//If the server does not respond adn keeps on loading, this error handles it
module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
