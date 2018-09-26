const Arrays = {
    isDifferent: (a, b) => (a && !b)
        || (!a && b)
        || (!a && !b)
        || (a.length !== b.length)
        || a.some((element, index) => element !== b[index])
};