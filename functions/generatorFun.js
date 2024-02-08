function* infiniteNumbersGenerator() {
    let number = 1;
    while (true) {
      yield number++;
    }
  }
  
  // Create an instance of the generator
  const numbersGenerator = infiniteNumbersGenerator();
  
  // Print the first 10 numbers
  for (let i = 0; i < 10; i++) {
    console.log(numbersGenerator.next().value);
  }
  
  // Note: Be cautious when working with infinite sequences, as it may lead to an infinite loop if not handled properly.
  
   



function* evenNumberGenerator(){
  let even = 0;
  while(true){
     yield even ;
     even =
     even + 2;
  }
}
const generator = evenNumberGenerator();

for(let i =0 ; i<=20;i++){
  console.log(generator.next().value);
}