const array1 = [1,7,2,6,3,5,4];

var exchs = 0;

for(let i = 0; i < array1.length; i++){
    for(let j = i+1; j < array1.length; j++){
        if(array1[i] > array1[j]){
            const temp = array1[i];
            array1[i] = array1[j];
            array1[j] = temp
            exchs++;
        }
    }
}

// If Array is already sorted 

if(exchs == 0){
    console.log("Array is already sorted...")
}
else{
    console.log("Sorted Array: " + array1)
}