function parseScaleNice(niceValue) {
    // Some parsing logic here
    return niceValue * 2;
}

var spec = {
    nice: 5
};

var params = {};

params.nice = parseScaleNice(spec.nice);

console.log(params.nice);  // Output: 10
