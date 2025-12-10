let n = 7;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {

        if (
            j === 0 ||                          // left vertical
            i === 0 ||                          // top horizontal
            i === Math.floor(n / 2) ||          // middle horizontal
            (j === n - 1 && i > 0 && i < Math.floor(n / 2)) || // top-right vertical
            (i > Math.floor(n / 2) && i - Math.floor(n / 2) === j - 1) // bottom-right diagonal
        ) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
