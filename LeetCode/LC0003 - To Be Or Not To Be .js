/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    var obj = {
        obj(val) {
            this.val = val;
        },
        toBe: (expected)=> {
            if (val !== expected) {
                throw new Error('Not Equal');
            }
            return true;
        },
        notToBe: (expected) => {
            if (val === expected) {
                throw new Error('Equal');
            }
            return true;
        },
    }

    return obj;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
