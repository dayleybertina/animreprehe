function hue(a, b, callback) {
    if (typeof callback === 'function') {
        return callback(a, b);
    }
    return null;
}

const result = hue(10, 20, (x, y) => x * y); // Using a closure to multiply the numbers
console.log(result); // Output: 200
