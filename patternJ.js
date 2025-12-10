let n = 7;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {

        if (
            i === 0 ||                         
            j === Math.floor(n / 2) ||        
            (i === n - 1 && j < Math.floor(n / 2)) ||   
            (j === 0 && i >= Math.floor(n / 2) && i < n - 1) 
        ) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
