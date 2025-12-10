let n = 7;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {

        if (
            i === 0 ||               // top horizontal
            i === n - 1 ||           // bottom horizontal
            j === n - 1 - i          // diagonal
        ) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
