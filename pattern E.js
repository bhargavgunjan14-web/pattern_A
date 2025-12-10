let n = 7;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {

        if (
            j === 0 ||             
            i === 0 ||              
            i === n - 1 ||          
            i === Math.floor(n/2)   
        ) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
