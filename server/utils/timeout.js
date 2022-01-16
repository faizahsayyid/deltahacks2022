module.exports = (prom, time) =>
  Promise.race([prom, new Promise((_r, rej) => setTimeout(rej, time))]);
