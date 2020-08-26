// Stampo i numeri da 1 a 100
for (var i=1; i<=100; i++){
    if (i % 15 == 0){ // Per i multipli di 3 e 5 stampo FizzBuzz
    console.log("FizzBuzz");
  } else if(i % 5 == 0) // Per i multipli di 5 stampo Buzz
    {console.log("Buzz")
  } else if(i % 3 == 0){ // Per i multipli di 3 stampo Fizz
    console.log("Fizz");
  } else {
    console.log(i);
  }

}
