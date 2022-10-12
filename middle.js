const middle = function (array) {
  if (array.length <= 2) {
    return []
  }
  const half = array.length >> 1;
  const offset = 1 - array.length % 2;
  return array.slice(half - offset, half + 1)
  
};

module.exports = middle