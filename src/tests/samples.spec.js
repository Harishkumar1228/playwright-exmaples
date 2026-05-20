// //Write a program to get sum of digits in this "To356Get92No9Yu394Op":
// //356+92+9+394

// const str= "To356Get92No9Yu394Op";
// const numbers = str.match(/\d+/g)||[];
// const SumofNumbers = numbers.reduce((SumofNumbers)=>sum+parseInt(num),0);
// console.log('Sum of number:${SumofNumbers}');


// // const digits = str.match(/\d+/g)||[];
// // const sumofDigits= digits.reduce((sum,digit)=>sum+parseInt(digit),0);
// // console.log( 'sum of digits:${sumofDigits}');


//Write a program to find the missing numbers in an array of integers from 1 to n : ex:- {1,2,5,6,7} 

 function findMissingArray(arr){
    const missing=[];
    arr.sort((a,b)=>a-b);

    for(let i=0;i<arr.length-1;i++){
        let current= arr[i];
        let next = arr[i+1];
        while(next-current > 1){
            current++;
            missing.push(current);
        }
    }return missing
 }
 const arr = [1,2,5,6,7];
 console.log(findMissingArray(arr));
 