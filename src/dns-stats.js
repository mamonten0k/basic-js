const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  let domainsObj = {};
  for (let domain of domains) {
    domain
      .split(".")
      .reverse()
      .reduce((domain, domainEl) => {
        domain += "." + domainEl;
        !domainsObj.hasOwnProperty(domain)
          ? Object.defineProperty(domainsObj, domain, {
              value: 1,
              writable: true,
              enumerable: true,
              configurable: true,
            })
          : (domainsObj[domain] += 1);
        return domain;
      }, "");
  }
  return domainsObj;
}

module.exports = {
  getDNSStats,
};
