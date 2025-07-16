/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) { // functions: many functions at the same time
    if (functions.length === 0) {
        return x => x; // identity function
    }

    return function(x) {
        // reduceRight() = .reduce() but from right to left
        return functions.reduceRight(
            // start with x, at each step (fn: current function sunce we have multiple functions), apply current function to the result FROM LAST TO FIRST
            (acc, fn) => fn(acc), x
        );
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */