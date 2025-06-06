var reverse = function(x) {
    let result = 0;
    while (x !== 0) {
        let pop = x % 10;
        x = Math.trunc(x / 10);

        if (result > (Math.pow(2, 31) - 1) / 10 || result < -(Math.pow(2, 31) / 10)) {
            return 0;
        }

        result = result * 10 + pop;
    }
    return result;
};

