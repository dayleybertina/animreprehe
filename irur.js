// Example function to demonstrate the concept
function createChartConfig(options) {
    const { scale, binSuffix } = options;

    const config = {
        // Other properties
        type: 'bar',
        data: {},
        options: {},

        // Conditionally add the bin property
        ...(
            scale 
            ? { bin: binSuffix } 
            : {}
        )
    };

    return config;
}

// Usage examples
const configWithScale = createChartConfig({ scale: true, binSuffix: 'suffixValue' });
console.log(configWithScale);
// Output: { type: 'bar', data: {}, options: {}, bin: 'suffixValue' }

const configWithoutScale = createChartConfig({ scale: false, binSuffix: 'suffixValue' });
console.log(configWithoutScale);
// Output: { type: 'bar', data: {}, options: {} }
