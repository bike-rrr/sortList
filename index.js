// sort weights based on rank we made in List object
const peeps = {
    a: { weight: 'negative' },
    b: { weight: 'positive' },
    h: { weight: 'red' },
    i: { weight: 'violet' },
    c: { weight: 'neutral' },
    d: { weight: 'negative' },
    r: { weight: 'colemine' },
    e: { weight: 'red' },
    f: { weight: 'green' },
    g: { weight: 'blue' },
    sh: { weight: 'brewery' },
    k: { weight: 'calSag' }
}

const list = {
    negative: 1,
    violet: 7,
    neutral: 3,
    positive: 2,
    calSag: 6.445654,
    colemine: 0,
    red: 6,
    brewery: -1,
    green: 5,
    blue: 4
}

const sorted = Object.entries(peeps).sort(([, aVal], [, bVal]) => {
    if (list[aVal.weight] < list[bVal.weight]) { return -1 };
    if (list[aVal.weight] > list[bVal.weight]) { return 1 };
    return 0;
});
console.log(sorted);
