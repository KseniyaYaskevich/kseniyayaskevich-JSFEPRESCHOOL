export const compare = (property) => {
    return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];

        if (value1 > value2) {
            return 1;
        }

        if (value1 < value2) {
            return -1;
        }

        return 0;
    }
};