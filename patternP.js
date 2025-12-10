let n = 7;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {

        if (
            j === 0 ||                      // left vertical line
            i === 0 ||                      // top horizontal line
            i === Math.floor(n / 2) ||      // middle horizontal line
            (j === n - 1 && i < Math.floor(n / 2) && i !== 0) // top right vertical
        ) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
