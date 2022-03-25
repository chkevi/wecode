function test (start,end) {
    arr = []
    for (i=start; i<=end; i++){
        if (i%2===0){
            arr.push(i)
        }
    }
  return arr;
}

test(1,50)