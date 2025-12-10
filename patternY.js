let n = 7;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {

        if (
            (i < Math.floor(n / 2) && (j === i || j === n - 1 - i)) || // upper diagonals
            (i >= Math.floor(n / 2) && j === Math.floor(n / 2))        // vertical line lower half
        ) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
