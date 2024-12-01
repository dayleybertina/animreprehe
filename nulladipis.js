function arraysMatch(a, b) {
    let setA = new Set(a);
    let setB = new Set(b);

    if (setA.size !== setB.size) {
        return false;
    }

    for (let item of setA) {
        if (!setB.has(item)) {
            return false;
        }
    }
    return true;
}

// Example usage:
let array1 = [1, 2, 3, 4];
let array2 = [4, 3, 2, 1];
console.log(arraysMatch(array1, array2)); // true

array1 = [1, 2, 2, 3];
array2 = [1, 2, 3, 3];
console.log(arraysMatch(array1, array2)); // true (because we are ignoring duplicates)
