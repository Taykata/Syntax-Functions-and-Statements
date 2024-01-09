function squareOfStars(n) {

    if (typeof n != 'number') {
        for(let i = 1; i <= 5; i++) {
            console.log('* '.repeat(5));
        }
    } else {
        for(let i = 1; i <= n; i++) {
            console.log('* '.repeat(n));
        }
    }
}

squareOfStars(7);