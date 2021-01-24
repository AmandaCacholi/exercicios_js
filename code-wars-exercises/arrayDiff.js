let arr1 = [1,2,3,4,5,6];
let arr2 = [1,3,5];

function arrayDiff(a, b) {
    let c = []

    for (let i = 0; i < a.length; i++){
        let index = b.indexOf(a[i]);

        if (a[i] != b[index]){
            c.push(a[i])
        }
    }
    return c;
    
}

console.log(arrayDiff(arr1, arr2))

