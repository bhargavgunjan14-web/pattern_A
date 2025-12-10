let n = 7;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {

        if (
            i === 0 ||                         // top horizontal
            i === n - 1 ||                     // bottom horizontal
            i === Math.floor(n / 2) ||         // middle horizontal
            (j === 0 && i < Math.floor(n / 2)) || // upper left vertical
            (j === n - 1 && i > Math.floor(n / 2)) // lower right vertical
        ) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
