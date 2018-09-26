const Benchmark = {
    run: (callback) => {
        const startTime = performance.now();
        const result = callback();
        const endTime = performance.now();

        return {
            result,
            time: (endTime - startTime).toFixed(5)
        }
    }
};