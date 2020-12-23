const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
    const teaCups = [];

    for (let i = 1; i <= numOfCups; i += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC)