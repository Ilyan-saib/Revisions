let result/* = prompt('quel age à tu ?')*/


if (result < 18) {
  console.log('vous etes mineur');
}
else if (result >= 18 && result <= 21){
    console.log('vous etes majeur mais pas aux état unis');
}
else if (result > 21){
  console.log('vous etes majeur');
}
/*else{
  alert("ceci n'est pas valide");
}*/

function addition(x,y) {
  return x + y
}

console.log(addition(8,5))

let num = 0

while (num <= 10) {
console.warn(num);
num++
}

for (let i = 0; i <= 10; i++) {
  console.error(i)
  
}

function max(tablo) {
  let maximum = tablo[0]
  for (let i = 0; i < tablo.length; i++) {
    if (tablo[i]>maximum) {
      maximum = tablo[i]
    }
    
  }
  return maximum
}

console.log(max([1,2,3,5,6,95,36])) //output : 95


let juj = "Hello world!"
let jej = juj.split('');
console.log(jej[0]) //output : H




let test = '   Hello world!   ';

console.log(test);
//output: "   Hello world!   "



console.log(test.trim());
//output: "Hello world!"




let ja = "lorem ipsum dolor sit amet consectetur"

console.log(ja.slice(5)) // enleve les 5 premières lettres de 'ja'

//output : ipsum dolor sit amet consectetur





console.log(String.fromCodePoint(9733 , 9763)) // renvoie le caractere correspondant a un code ASCII

//output : ★ ☣



let tt1 = "Salut , Je M'appelle Bernard"
let tt2 = /[A-Z]/g; 
let tt3 = tt1.match(tt2); //renvoie tout les caractères Majuscules compris entre A et Z

console.log(tt3);
//output : (4) ['S', 'J', 'M', 'B']













