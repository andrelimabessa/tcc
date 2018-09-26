function runFibonacci(functions, value) {
    const wa = Benchmark.run(() => functions.wasm(value));
    const js = Benchmark.run(() => functions.js(value));

    if (wa.result !== js.result) {
        return;
    }

    const jsTime = js.time, waTime = wa.time;
    const ratio = (jsTime / waTime).toFixed(5);
    return {term: value, jsTime, waTime, ratio};
}