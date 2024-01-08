//1
// let a = prompt('')
// if(a  > 10) {
//     console.log(a+3)
// } else if ( a < 10) {
//     console.log(2*a)
// } else {
//     console.log(22);
// }

// console.log(a  > 10 ? a+3 : a < 10 ? 2 * x : 22);

// 2
// let a = prompt('')
// let b = Math.floor(a / 3)
// console.log(b);

// 3
// let a = prompt('')
// let b = Math.floor(a % 3)
// console.log(b);

// 4
// let a = prompt()
// a = parseInt(a)
// if(a == Number) {
//     if(a % 2 == 0) {
//         console.log("juft");
//     } else {
//         console.log("toq");
//     }
// }else {
//     console.log('apgni chqir');
// }

// 5
// a soni berilgan.  0 dan a gacha bo'lgan sonlaryig'indisini toping  va yig'indini konsolga chiqaring. a sonini ham hisobga oling.

// a soni berilgan boladi biz missol qilib 10 ni olamiz
// const a = 10
// biz bitta ozgaruvchi ochamiz va uni 0 ga teglab qoyib shuni ustiga qoshib boramiz
// let sum = 0
// JS for method dan foydalanib har bir soni aylanib chiqamiz
// for(i=1; a >= i; i++){
//     sum = sum + i
// }
// for ishlab bolgach natija chiqadi bizda natija 55 chiqdi
// console.log(sum);

// a soni berilgan boladi biz missol qilib 10 ni olamiz
// const a = 10;
// formulaga tashaymiz S = (a*(a+1))/2
// let sum = ((a * (a + 1)) / 2);
// bizda natija 55 chiqadi
// console.log(sum);

// 6
// n soni berilgan.
// Quyidagi yig'indini hisoblovchi dastur yozing.
// (1 + 1/2 + 1/3 + 1/4 ..... 1/n ).
// let n = 5
// let sum = 0
// for(let i = 1; n >=i; i++) {
//     sum += 1/i
// }
// console.log(sum);

// 7
// Misol Sharti
// n soni berilgan.
// Geometrik shaklni ekranga chiqaring.
// let n = 9
// for(let i = 0; n >= i; i++){
//     let line = ''
//     for(let e = 0; e <=i; e++){
//         line += '*'
//     }
//     console.log(line);
// }

// 8

// let n = 10;

// for (let i = 0; i < n ; i++) {
//   let line = '';
//   for (let j = 0; j < n; j++) {
//     line += `(${i},${j})`;
//   }
//   console.log(line);
// }

// 9
// a, b, c  sonlari berilgan.  Shu sonlardan eng kattasini toping.
// let a =parseInt(prompt("a="))
// let b =parseInt(prompt("b="))
// let c =parseInt(prompt("c="))

// if(a>b && a>c){
//     console.log(`katta son a=${a}`);
// } else if(b>a && b>c) {
//     console.log(`katta son b=${b}`);
// } else {
//     console.log(`katta son c=${c}`);
// }

// 10
// a soni berilgan. Sonning musbat yoki manfiy ekanligini aniqlang. Son 0 ga teng bo'lsa, 0 ni konsolga chiqaring.
// let a = parseInt(prompt('a soni kiriting'))

// if(a > 0){
//     console.log('musbat');
// }else if(a < 0){
//     console.log('manfiy');
// }else {
//     console.log('0 ga teng');
// }

// 11
// a soni berilgan. Berilgan son 5 ga bo'linadimi? Agar bo'linsa  konsolga true bo'lmasa false chiqaring.
// let a = parseInt(prompt('a soni kiriting'))

// if(a % 5 == 0){
//     console.log(true);
// }else{
//     console.log(false);
// }

// 12
//  Berilgan son 3 va 4 ga bo'linadimi? Agar bo'linsa konsolga 'true'  bo'lmasa falseni chiqaring.
// let a = parseInt(prompt('a soni kiriting'))

// if(a % 3 == 0 && a % 4 == 0){
//     console.log(true);
// }else{
//     console.log(false);
// }

// 13
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);
// console.log(fruit);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.pop();
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");
// console.log(fruits);
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(3);
// console.log(fruits);
// console.log(citrus);
// 14
// O'sha massivdagi eng katta elementni toping va konsolga chiqaring.
// const arr = [1, 2, 7, 6, 3, 4, 11, 9]
// const bigElement = Math.max(...arr)
// console.log(bigElement);
// 15
// O'sha massivdagi eng  kichik elementni toping va konsolga chiqaring.
// const arr = [12, 21, 36, 71, 24, 85, 1, 30, 25]
// const arrMin = Math.min(...arr)
// console.log(arrMin);
// 16
// Massive elementlarini o'rtacha qiymatlarini hisoblang va konsolga chiqaring.
// const arr = [6, 25, 91, 23, 72, 9, 18, 6]
// const output = arr.reduce((sum, element) => sum + element, 0) / arr.length;
// console.log(output);
// 17
// n, array[] berilgan.
// Shu massivda n soni bor yoki  yo'qligini aniqlang. n soni bo'lsa true, bo'lmasa false konsolga chiqaring.
// const arr = [6, 25, 91, 23, 72, 9, 18, 6]
// const n = 23
// console.log(arr.includes(n));
// 18
// n, array[] berilgan.
// Shu massivda n-chi index dagi elementini konsolga chiqaring.
// Agar index xato bo'lsa  0 chiqaring.
// const arr = [6, 25, 91, 23, 72, 9, 18, 6]
// const n = 22
// arr[n]  ? console.log(arr[n]) : console.log(0);
// 19
// n, array[] berilgan.
// Shu massiv oxiriga n ni jo'ylashtiring va massivni konsolga chiqaring.
// const arr = [6, 25, 91, 23, 72, 9, 18, 6]
// const  n = 13
// arr.push(n)
// console.log(arr);
// 20
// a,b, array[] berilgan.
// Shu massivning a indexsiga b sonini joylashtiring  va massivni konsolga chiqaring.
// let a = 1;
// let b = 9;
// let array = [4, 5, 6, 7];

// // Insert the number b at the index a of the array
// array.splice(a, 0, b);

// // Output the modified array to the console
// console.log(array);
// 21
// array[]  va a soni berilgan.
// Shu massivning n chi indexsini olib tashang.
//  const   a = 2
//  const    array = [4,5,6,7]
//  array.splice(a , 1)
//  console.log(array); 
//  22
// Shu massivni teskarisini yangi massivga ko'chirib o'tkazing va konsolga chiqaring.
// const a = [1,2,3,4] 
// a.reverse()
// console.log(a); 
// 22
// Shu massivda nechta n soni borligini topib konsolga chiqaring.
// const n = 4;
// const array = [2, 4, 6, 4];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] === n) {
//         sum ++
//     }
// }
// console.log(sum);
// 23
// Shu arraydagi o'xshash elementlarni ekranga chiqaring.
// let array = [1, 2, 1, 4];

// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[i] === array[j]) {
//             console.log(`array[${i}]: ${array[i]} = array[${j}]: ${array[j]}`);
//             console.log(`array[${j}]: ${array[j]} = array[${i}]: ${array[i]}`);
//         }
//     }
// }
// 

// var 

// var n = 10

// if(true) {
//     var n = 20
//     console.log(n);
// }

// const Change = () => {
//     var n = 54
//     console.log(n);
// }
// Change()
// console.log(n);

// Arrow Fuction

// Declaration(1 , 2, 3)
// const Arrow = (a,b) => {
//     console.log(1 , this);
// }

// // Declaration Faction
// function Declaration(){
//     console.log(2, this, arguments);
// }

// // Expretion Faction
// const Expration = function() {
//     console.log(3, this, arguments);
// }
// Expration(1 , 2, 3)
// Arrow(1 , 2, 3)

// const Arrow = () => {}
// function Declaration(){}
// const Expretion = function(){}

// function TopElement(arr) {
//     const result = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//           result.push(`array[${i}] = array[${j}] : ${arr[i]}`)
//         }
//       }
//     }
  
//     return result;
// }
// const arr = [1, 2, 1, 4];
// const oxshashElementlar = TopElement(arr);

// console.log(oxshashElementlar)

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
  
//   let fullName = person.fullName.bind(member);
//   console.log(person.fullName.apply());
//   apply()
//   bind()
// call()

// var pokemonName = function() {
//     console.log(this);
//     console.log(this.getPokeName() + 'I choose you!');
// };
// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// pokemonName.bind(pokemon)
// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

// logPokemon(); // 'Pika Chu I choose you!'
// console.log(logPokemon());

// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function(snack, hobby) {
//     console.log(this.getPokeName() + 'I choose you!');
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };

// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

// logPokemon('sushi', 'algorithms');

// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function(snack, hobby) {
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };

// pokemonName.call(pokemon,'sushi'); // Pika Chu  loves sushi and algorithms
// pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms

// const apasi ={
//     adi:'tohtaxan',
//     familyasi:'baltavay',
//     ApasiniBalasi: function(a) {
//         console.log(a);
//     }
// }

// console.log(apasi.ApasiniBalasi(a));
const show = () => this

console.log('arrow function this', show()) 