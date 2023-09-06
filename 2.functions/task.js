
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = Infinity;
  max = -Infinity;
  sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if(arr[i] < min)
        min = arr[i];

     if(arr[i] > max)
        max = arr[i];

      sum += arr[i];

    }
    avg = +(sum / arr.length).toFixed(2)


  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr)
function summElementsWorker(arr) {
    let summ = arr.reduce((sum, current) => {
        summ += current;
        return summ;
    }, 0)
    return summ
}


function differenceMaxMinWorker(...arr)
 function differenceMaxMinWorker(arr){
     let min = 0;
     let max = 0;
     let range = 0;
     if (arr != null && arr.length > 0) {
         min = arr[0];
         max = min;

         for (let n=0; n < arr.length; n++) {
             if (arr[n] < min) {
                 min = arr[n]
             }
             if (arr[n] > max) {
                 max = arr[n]
             }
         }
         range = max-min;

     }
     return(range);
 }

function differenceEvenOddWorker(...arr)
function differenceEvenOddWorker(arr) {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    if (arr != null && arr.length > 0) {
        for (let i=0; i < arr.length; i++) {
            if(arr[i]%2 === 0) {
                sumEvenElement += arr[i];
            } else {
                sumOddElement += arr[i];
            }
        }
    }
    return (sumOddElement - sumEvenElement);
}

function averageEvenElementsWorker(...arr)
function averageEvenElementsWorker(arr) {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    let result = 0;
    if (arr != null && arr.length > 0) {
        for (let i=0; i < arr.length; i++) {
            if(arr[i]%2 === 0) {
                sumEvenElement += arr[i];
                countEvenElement += 1;
            }
        }
    result = sumEvenElement / countEvenElement;
    }
    return (result.toFixed(2));
}

console.log(sumElementWorker(TestArray));
console.log(differenceMaxMinWorker(TestArray));
console.log(differenceEvenOddWorker(TestArray));
console.log(averageEvenElementsWorker(TestArray));


function makeWork (arrOfArr, func){
let maxWorkerResult = -Infinity;
    let res = 0;
    console.log(arrOfarr.length);
    for (let i=0; i < arrOfarr.length; i++) {
        console.log(...arrOfarr[i])
        res = func(arrOfarr[i]);
        if (res > maxWorkerResult) {
             maxWorkerResult = res;
        }
    }
    return res;

}

const arr2 = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

console.log(makeWork(arr2, sumElementWorker));

console.log(makeWork(arr2, differenceEvenOddWorker));{


}
