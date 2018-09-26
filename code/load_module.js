fetch(url)
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes, {}))
    .then(response => {
        const functions = response.instance.exports;
        console.log(functions.square(10));
    });