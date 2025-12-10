let n = 7;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {

        if (
            j === 0 ||                                 
            (i === 0 && j < n - 1) ||                  
            (i === n - 1 && j < n - 1) ||              
            (j === n - 1 && i > 0 && i < n - 1)        
        ) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
