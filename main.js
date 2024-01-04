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
// const show = () => this

// console.log('arrow function this', show())
// let id1 = Symbol("id");
// let id2 = Symbol("id");
// console.log(id1 == id2);
// create a Map
// const funMap = new Map();

// funMap.set(360, 'My House Number'); // number as key
// funMap.set('John', 'I write blogs!'); // boolean as key

// let obj = {'name': 'tapas'}
// funMap.set(obj, true); // object as key
// console.log(funMap.has('John'));
// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };

// const result = Object.assign(target, source);

// console.log(target); // Outputs: { a: 1, b: 3, c: 4 }
// console.log(result); // Outputs: { a: 1, b: 3, c: 4 }
// let a = null ?? 2
// console.log(a);
// Cookie yaratish
// document.cookie = "foydalanuvchi_ismi=John Doe";

// Yoki matn ko'rinishidagi yaratish
// let cookieString = "foydalanuvchi_ismi=John Doe";
// document.cookie = cookieString;

// a, b, c  sonlari berilgan.  Shu sonlardan eng kattasini toping.
// const a = 5;
// const b = 7;
// const c = 3;
// if(a>b && a>c){
//     console.log('a');
// }else if (b>a && b>c){
//     console.log('b');
// }else if (c>a && c>b){
//     console.log('c');
// }
// Misol Sharti
// Berilgan yill kabisa yili ekanligini aniqlang. Agar kabisa yili bo'lsa true  konsolga chiqsin.  Agar bo'linmasa false  konsolga chiqsin.
// Kabisa yil deb 4 yilda birmarta keladigan yilga aytiladi. Shu yili kunlar soni 365 emas 366 ga teng bo'ladi. Bu yili fevral oyida 29 kun bo'ladi.
// let a = prompt()
// if(a % 4 == 0) {
//     console.log('kasbiy yil');
// }else{
//     console.log('kasbiy yil emas');
// }

// c char berilgan. Berilgan  char alfavit  yoki raqam ekanligini aniqlang. Agar alfavit bo'lsa 'alpha' ni  konsolga chiqaring,  agar son bo'lsa 'son' ni  konsolga chiqaring.
// let c = 'dd'
// if(0 <= c || c <=9){
//     console.log('son');
// }else{
//     console.log('bu string');
// }

// Agar alfavit kichik bo'lsa 'lowerCase' so'zini konsolga chiqaring,  Agar alfavit katta bo'lsa 'upperCase' ni chiqaring,  agar alfavit  bo'lmasa  'none' ni  chiqaring.
// let c = 1
// if(typeof c === 'number'){
//     console.log('son');
// }else if(c === c.toLowerCase()){
//     console.log('LowerCase');
// }else if(c === c.toUpperCase()){
//     console.log('UpperCase');
// }
// Berilgan son hafta kunining qaysi kuniga to'g'ri keladi .
// Agar kelgan son 1 ga teng bo'lsa 'Dushanba' ni konsolga chiqaring,
// Agar kegan son ikkiga teng bo'lsa  'Seshanba' ni konsolga chiqaring va hz ..,
// Agar hafta kuniga to'g'ri kelmasa 'none' konsolga chiqsin.
// const n = 4
// switch (n) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//     break;
//   default:
//     console.log("none");
// }
// a,b,c sonlari berilgan . Shu sonlar uchburchakning ichki burchaklari ekanligini aniqlang.
// Agar berilgan  sonlar uchburchakning burchaklari bo'lsa ,  true konsolga chiqaring bo'lmasa false konsolga chiqaring.
// const a = 20;
// const b = 50;
// const c = 120;
// if(a > 0 && b > 0 && c > 0){
//     if(a+b+c <=180){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }else{
//     console.log(false);
// }
// a,b,c sonlari berilgan . Shu sonlar uchburchakning tomonlari ekanligini aniqlang.
// Agar kelgan sonlar uchburchakning tomonlari bo'lsa ,true  konsolga  chiqaring,  bo'lmasa false konsolga chiqaring.
// const a = 20, b = 25, c = 30;
// if(a< b+c && b < a+c && c < a+b){
//     console.log(true);
// }else{
//     console.log(false);
// }
// a,b,c sonlari berilgan. Bu sonlar uchburchakning 3ta tomonidir.  Uchburchak ning shakli qanday ekanligini aniqlang.
// Agar teng tomonli bo'lsa  'equilateral' so'zini konsolga chiqaring.
// Agar teng yonli bo'lsa  'isosceles' so'zini konsolga chiqaring.
// Agar ixtiyoriy  bo'lsa  'scalene'  so'zini konsolga chiqaring.
// const a = 10, b = 15, c = 10;
// if( a == b && b == c){
//     console.log('equilateral');
// }else if (a==b || b==c || c==a){
//     console.log('isosceles');
// }else{
//     console.log('scalene');
// }
// a, b, c sonlari berilgan.
// Berilgan 3 ta sondan nechtasi musbat ekanligini aniqlovchi dastur yozing va musbat sonlar sonini konsolga chiqaring.
// const a = 1, b = 8, c = 27 
// let sum = 0;
// if(a > 0) {
//     sum++;
// };

// if(b > 0) {
//     sum++;
// };

// if(c > 0) {
//     sum++;
// }
// console.log(sum);
// a, b sonlari berilgan.
// Berilgan ikkita sondan  kichigini  toping  va shu sonni konsolga chiqaring. Agar ular teng bo'lsa 'teng' so'zini konsolga chiqaring.
// let a = 1, b = 1
// if(a > b){
//     console.log(b);
// }else if (a < b){
//     console.log(a);
// }else {
//     console.log('ular teng');
// }
// a, b, c sonlari berilgan. Berilgan uchta sonning o'rtacha qiymatini  hisoblovchi dastur yozing  va shu sonni konsolga chiqaring.
// let a = 5, b = 10, c = 15
// console.log((a+b+c)/3);
// a, b, c sonlar berilgan.
// Agar sonlar o'sish tartibida  joylashgan bo'lsa  1 ni konsolga chiqaring.
// Agar kamayish tartibda bo'lsa 2 konsolga chiqaring.
// Agar eng kattasi b bo'sa  b ni konsolga chiqaring.
// Agar ular teng bo'lsa 5 ni konsolga chiqaring.
// Bo'lmasa 0 ni konsolga chiqaring. 
// let  a = 3, b=5, c=3
// if(a < b && b < c){
//     console.log(1);
// }else if(c > b && b > c){
//     console.log(2);
// }else if(a == b || b == c || a == c){
//     console.log(5);
// }else{
//     console.log(0);
// }
// Agar shu solarning ikkitasi o'zaro teng bo'lsa  teng bo'lmagan sonni konsolga chiqaring, aks holda 0 ni chiqaring. 
// let a = 3,  b = 10, c = 8;
// if(a == b){
//     console.log(c);
// }else if(a == c){
//     console.log(b);
// }else if(b == c){
//     console.log(a);
// }else{
//     console.log(0);
// }
// Sonlar o'qida a,b sonlari berilgan. Ular orasidagi masofani toping.
// let a = -2,  b = -6  
// if(a <  0 && b < 0){
//     console.log((a * (-1)) + (b * (-1)));
// }
// else if(a - b  < 0){
//     console.log(b-a);
// }else if (b - a < 0){
//     console.log(a-b);
// }
// Sonlar o'qida a nuqta berilgan.
// Shu nuqtadan 0 gacha bo'lgan masofani toping.
// let a = -15 
// if(a > 0){
//     console.log(a);
// }else if(a < 0){
//     console.log(a * (-1));
// }else{
//     console.log(0);
// }
// a soni berilgan. 1 - 999 sonlar orasida.
// Agar a soni 1 honali son bo'lsa 1 ni return qiling.
// Agat a soni 2 honali son bo'lsa 2 ni return qiling.
// Agar a soni 3 honali bo'lsa 3 ni return qiling.
// let a = 988
// console.log(a.toString().length);
// a, b, c, d sonlar berilgan.
// Agar ularning qiymati barchasi musbat   bo'lsa true konsolga chiqaring bo'lmasa false ni konsolga chiqaring
// let  a = 5, b=6, c=4, d=-7
// if(a > 0 && b > 0 && c > 0 && d > 0){
//     console.log(true);
// }else{
//     console.log(false);
// }
// a, b, c sonlar berilgan (0 emas).
// Agar  3 ta son ham toq bo'lsa 1 ni konsolga chiqaring. 
// Agar 3 ta son ham juft bo'lsa 2 ni konsolga chiqaring. 
// Agar xohlagan bittasi toq bo'lsa 3 ni konsolga chiqaring.
// Agar shartlarni qanoatlantirmasa  0 ni konsolga chiqaring.
// let a = 18, b=7, c=16
// if(a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0){
//     console.log(1);
// }else if(a % 2 == 0 && b % 2 == 0 && c % 2 == 0){
//     console.log(2);
// }else if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
//     console.log(3);
// }else {
//     console.log(0);
// }

// a, b, c sonlar berilgan (0 emas).
// Agar xohlagan 2 tasi juft bo'lsa 1 ni konsolga chiqaring.
// Agar xohlagan 2 tasi toq bo'lsa 2 ni konsolga chiqaring
// bo'lmasa 0 ni konsolga chiqaring.
// let  a = 16, b=21, c=17
// if(a % 2 == 0 && b % 2 == 0 || a % 2 == 0 && c % 2 == 0 || c % 2 == 0 && b % 2 == 0){
//     console.log(1);
// }else if(a % 2 !== 0 && b % 2 !== 0 || a % 2 !== 0 && c % 2 !== 0 || c % 2 !== 0 && b % 2 !== 0){
//     console.log(2);
// }else {
//     console.log(0);
// }
// a, b, c sonlari berilgan.
// Shu sonlardan uch xonali son yasang. Agar xohlagan son 0 ga teng yoki  kichik bo'lsa 0 ni konsolga chiqaring.
// let a = 8, b=0, c=3;
// if(a == 0 || b == 0 || c == 0){
//     console.log(0);
// }else {
//     console.log( a * 100 + b * 10 + c );

// }
