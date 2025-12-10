let n = 7;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {

        if (
            i === 0 && j > 0 && j < n - 1 ||        // top horizontal
            i === n - 2 && j > 0 && j < n - 1 ||    // bottom horizontal
            j === 0 && i > 0 && i < n - 2 ||        // left vertical
            j === n - 1 && i > 0 && i < n - 2 ||    // right vertical
            i === j && i >= Math.floor(n / 2)       // diagonal tail
        ) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
