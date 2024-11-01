// Task 01
/* 
function mux(a,b,c,d){

    total = a*b*c*d;
    return total;
}

solution = mux(2,4,6,8);

console.log('The multiplied Value is = ',solution); */


// Task 02

/* function f1(number){
    let ans;
    if(number % 2===0)
    {
 ans = number / 2;
    }
    else if(number %2 ===1)
    {
       ans = number * 2;
    }
     return ans;
}

final = f1(5);
console.log("The value is",final);

console.log('-------------------');
final = f1(4);
console.log("The value is",final); */


// Task 03

/* function make_avg(arr){
    let sum =0,avg;
for(let i =0 ; i<arr.length ; i=i+1)
{
    sum = sum + arr[i];
    avg= sum / arr.length;
}
return avg;
}

final = make_avg([10,20,30,140])

console.log('The average is = ',final); */


// Task 04

/* function countZeros(bin) {
    let zeroCount = 0;
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === '0') {
            zeroCount++;
        }
    }
    return zeroCount;
}
const result = countZeros("10001");
console.log("Number of zeros:", result);
 */

// Task 05

/* function eo(arr)
{ let  dekho= [];
    for(let i =0 ;i< arr.length ; i++)
        {  
           if(arr[i] % 2==0)
           {
             dekho.push(arr[i]);
           }
          
}
return dekho;
}


final = eo([10,20,21,31,88,99,66]);

console.log('even numbers = ',final); */