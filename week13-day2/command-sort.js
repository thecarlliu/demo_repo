var numbers = process.argv;
var arr = [];

console.log(numbers);

for (var i=2;i<numbers.length;i++) {
    arr.push(numbers[i]);
}

console.log(arr);

carlSort(arr);

function carlSort(array) {
    for (i=0;i<array.length;i++) {
        if (array[i] > array[i+1]) {
            var temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
        }
    }
    var count = 0;
    for (i=0;i<array.length;i++) {
        if (array[i] > array[i+1]) {
            count++;
        }
    }
    if (count > 0) {
        carlSort(array);
    }
    else {
        console.log(array);
    }
}
