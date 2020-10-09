module.exports = function reverse (n) {
    //result should be positive
    n = n < 0 ? -1 * n : n;
    return String(n).split('').reverse().join(''); 
}
