function data(n){
    let sum=0;
    for(let i=0; i<n;i++){
        sum=sum+i;
    }
    return sum;
}

function memoize(fn){
    let cache = {};

    return function(...args){
        const n = args[0];
        if(n in cache){
            return cache[n];
        } else{
            const res = fn(n);
            cache[n]=res;
            return res;
        }
    }
}




const memoized = memoize(data)
console.log(memoized(6))