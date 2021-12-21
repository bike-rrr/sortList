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
    k: { weight: 'calSag' },
    test: { weight: "newone" }
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
    blue: 4,
    newone: 5.5

}
// console.log(Object.entries(peeps))
const sorted = Object.entries(peeps).sort(([, aVal], [, bVal]) => {
    if (list[aVal.weight] < list[bVal.weight]) { return -1 };
    if (list[aVal.weight] > list[bVal.weight]) { return 1 };
    return 0;
});

// function to add new paramater to list in a desired spot
function place(spot) {
    // convert spot to index spot => 1 => 0, 10 => 9 and so forth,

    let list = Object.entries(peeps);

    if (spot === 0) {
        let before = [spot];
        return before.concat(list)
    }
    if (spot < list.length) {
        let before = list.slice(0, spot);
        before.push(spot);
        let after = list.slice(spot);
        return before.concat(after)
    }
    if (spot === list.length) {
        list.push(spot)
        return list;
    }


}

for (let i = 0; i < Object.keys(peeps).length + 1; i++) {
    console.log(place(i))
}