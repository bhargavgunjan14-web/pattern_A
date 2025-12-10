let n = 7;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {

        if (
            j === 0 ||                // left vertical line
            j === n - 1 ||            // right vertical line
            j === i && i <= n / 2 ||  // left diagonal (upper half)
            j === n - 1 - i && i <= n / 2 // right diagonal (upper half)
        ) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
