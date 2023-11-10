let arr = [];
var userLength = prompt("array length:");
arr.length = userLength;

randomArray();
console.log(arr);
let maxIndex = largestEven(arr);
let minIndex = smallestIndexEven(arr);
console.log('максимальний серед парних: ' + arr[maxIndex]);
console.log('мінімальний серед елементів з парним індексом: ' + arr[minIndex]);
swapMaxMin(maxIndex, minIndex);
console.log(arr);
insertionSort(arr);
console.log(arr);

function randomArray() {
    arr = Array.from({ length: arr.length }, () => Math.floor(Math.random() * 201) - 100);
}

function largestEven(arr){
    let largestEvenIndex = null;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0 && (arr[largestEvenIndex] < arr[i] || largestEvenIndex===null)){
            largestEvenIndex = i;
        }
    }
    return largestEvenIndex;
}

function smallestIndexEven(arr){
    let smallestEvenIndex = null;
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0 && (arr[smallestEvenIndex] > arr[i] || smallestEvenIndex===null)){
            smallestEvenIndex = i;
        }
    }
    return smallestEvenIndex;
}

function swapMaxMin(index1, index2){
    let largestEven = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = largestEven;
}

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        key = arr[i];
        j = i - 1;
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}