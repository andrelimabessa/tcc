function runShellSort(functions, value) {
    const a = new Float64Array(value);
    const b = new Float64Array(value);

    for (let i = 0; i < value; i++) {
        a[i] = b[i] = Math.random() * 20000 - 10000;
    }

    const bytes = 8
        , end = a.length - 1
        , pointer = functions.module._malloc(a.length * bytes)
        , offset = pointer / bytes;

    functions.module.HEAPF64.set(a, offset);
    const wa = Benchmark.run(() => functions.wasm(pointer, value));
    a.set(functions.module.HEAPF64.subarray(offset, offset + end + 1));
    functions.module._free(pointer);

    const js = Benchmark.run(() => functions.js(b, value));

    if (Arrays.isDifferent(a, b)) {
        return;
    }

    const jsTime = js.time, waTime = wa.time;
    const ratio = (jsTime / waTime).toFixed(5);
    return {value, jsTime, waTime, ratio};
}