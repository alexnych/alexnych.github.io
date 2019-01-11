function primeNumb(n) {
    if (!isPrime(n)) {
      return primeNumb(n-1);
    }else {
      if (n == 1) {
        console.log(n);
      } else {
        console.log(n);
        primeNumb(n-1);
      }     
    }
    function isPrime(n){
      let two = 2;
      while ((two * two <= n && (n % two)!= 0)){
          two++;
      } 
      return (two * two > n)
    }
  }
  
  primeNumb(10)