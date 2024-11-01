function eo(arr)
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

console.log('even numbers = ',final);