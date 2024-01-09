function aggregateElements(arr) {

    let sum = 0;
    let sum1 = 0;
    let concat = '';

    for (let el of arr) {
        sum += el;
        sum1 += 1 / el;
        concat += el;
    }

    console.log(sum);
    console.log(sum1);
    console.log(concat);

}

aggregateElements([1, 2, 3]);