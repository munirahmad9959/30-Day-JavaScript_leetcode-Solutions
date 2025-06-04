var TimeLimitedCache = function () {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const keyExists = this.cache.has(key);

    if (keyExists) {
        clearTimeout(this.cache.get(key).timerId); 
    }

    const timerId = setTimeout(() =>
        this.cache.delete(key)
    , duration);

    this.cache.set(key, { value, timerId });

    return keyExists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    if(this.cache.has(key)){
        return this.cache.get(key).value;
    }
    return -1; 
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.cache.size;
};


const cache = new TimeLimitedCache();
console.log(cache.set(1, 42, 100)); // false
setTimeout(() => console.log(cache.get(1)), 50); // 42
setTimeout(() => console.log(cache.count()), 50); // 1
setTimeout(() => console.log(cache.get(1)), 150); // -1
