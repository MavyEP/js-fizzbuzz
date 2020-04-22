//creare la variabile di numeri da 1 a 100
var numeri = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,
              28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,
              54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,
              81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]

console.log("Gli elementi contenuti all'interno sono : " + numeri.length);

for (var i = 0; i < numeri.length; i++) {
    if (numeri[i] % 3 == 0 && numeri[i] % 5 == 0) {
        //fare in modo che sia i multipli di 3 che di 5 stampino FIZZBUZZ
      console.log("Questo é un : FIZZBUZZ")
    } else if  (numeri[i] % 3 == 0) {
      //fare in modo che tutti i multipli di 3 stampino fizz invece del numeri
      console.log("Questo é un : FIZZ")
    } else if (numeri[i] % 5 == 0){
      //fare in modo che tutti i multipli di 5 stampino buzz invece del numero
      console.log("Questo é un : BUZZ")
    } else {
      console.log("Il numero é : " + numeri[i])
    }
}
