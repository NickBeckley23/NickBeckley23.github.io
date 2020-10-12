function findMin(arr, start){
    let minLoc = start;
    for(let i = start; i < arr.length; i++){
        if(arr[i] < arr[minLoc]){
            minLoc = i;
        }
    }
    return minLoc;
}

function selectionSort(arr)
{
    for (var i = 0; i < arr.length; i++) {
        let min = findMin(arr, i);
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

function mySort(a, b){
    let minLoc = b;
    for(let i = b; i < a.length; i++){
        if(a[i].last == a[minLoc].last){
           if(a[i].first < a[minLoc].first){
               minLoc = i;
           } 
        }
        if(a[i].last < a[minLoc].last){
            minLoc = i;
        }
    }
    return minLoc;
};

function upgradedSort(arr, sortBy){
    for (var i = 0; i < arr.length; i++) {
        let min = sortBy(arr, mySort(arr, i));
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let names = [{first: "Michael", last: "Scott"}, {first: "Todd", last: "Scott"}, {first: "Dr", last: "Disrespect"}, {first: "Darth", last: "Vader"}];

let arr = [3,0,2,1,5,6,7,8];
let arr2 = ["red", "green", "blue"];
console.log(selectionSort(arr)); //ascending
console.log(selectionSort(arr2)); //sorts alphabetically

console.log(upgradedSort(names, mySort));

