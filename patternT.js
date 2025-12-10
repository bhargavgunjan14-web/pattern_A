let n = 7;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {

        if (
            i === 0 ||                     // top horizontal line
            j === Math.floor(n / 2)        // middle vertical line
        ) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
