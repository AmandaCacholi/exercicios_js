function addBinary( a, b )
{ 
    var sum = a + b, 
    binary = ''; 

    while ( sum > 0 ) 
    {
    binary = ( sum % 2 ) + binary; 
    sum = Math.floor( sum / 2 ); 
    }

    return binary; 
}

console.log(addBinary(4,2))

// -----------   Outra solução  --------------------------

function dec2bin(a,b){
    let dec = a+b
    return (dec >>> 0).toString(2);
}

console.log(dec2bin(4,2));    
console.log(dec2bin(-1,1));  
console.log(dec2bin(256,4657));  
console.log(dec2bin(-256,15));
console.log(dec2bin(5,1))
console.log(dec2bin(-4,-1))