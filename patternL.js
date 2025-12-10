let n = 7;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {

        if (
            j === 0 ||          // left vertical line
            i === n - 1         // bottom horizontal line
        ) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
