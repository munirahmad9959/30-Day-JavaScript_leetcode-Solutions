var TimeLimitedCache = function () {
    this.cache = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const currentTime = Date.now();
    const expirationTime = currentTime + duration;
    const keyExists = key in this.cache && this.cache[key].expirationTime > this.cache[key].currentTime;

    this.cache[key] = { value, expirationTime };
    return keyExists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    const currentTime = Date.now();

    if (key in this.cache) {
        const { value, expirationTime } = this.cache[key];
        if (expirationTime > currentTime) {
            return value
        }
        else {
            delete this.cache[key];
        }
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    const currentTime = Date.now();
    return Object.values(this.cache).filter(item => item.expirationTime > currentTime).length
};


const cache = new TimeLimitedCache();
console.log(cache.set(1, 42, 100)); // false
setTimeout(() => console.log(cache.get(1)), 50); // 42
setTimeout(() => console.log(cache.count()), 50); // 1
setTimeout(() => console.log(cache.get(1)), 150); // -1

