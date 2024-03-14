// let p = document.getElementById("foo"); -это равно записи ниже (jquery)---->> $("foo")

// try {
//     $("#foo").on("click", function () {
//         console.log(3)
//         throw (new Error);
//     })
// } catch (error) {
//     console.log(error);
// }




// setTimeout(function () {
//     console.log(1);
// }, 2000);

// console.log(2);


// PROMISE- создаём объект в который кладём обещание, что он когда нибудь будет нужен 
// resolve- спец.команда promise, которая отслеживает выполнение promise
// reject- выброс ошибки если promise не выполнен
// then- выполняется только если выполнен promise

// let a = 0;

// let promise = new Promise(
//     function (resolve, reject) {
//         // асихронный код
//         setTimeout(function () {
//             let i = 1;
//             console.log("Собрать нологи");
//             if (i == 1) {
//                 resolve(23423)
//             } else {
//                 reject("Нологи не собраны")
//             }
//         }, 2000);
//     }
// );

// promise.then(function (result) {
//     // выполняется, если promise сделает свои действия
//     console.log("Бабки в карман")
//     a += result;
//     return a;
//     console.log(a);
// }).then(function (result) {
//     a -= a * 0.5;
//     console.log(`Ушло в карман В.В. ${a}` )
// });
// console.log(a);


// let govs = [
//     new Promise(resolve => setTimeout(() => resolve(1), 1000)),
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)),
//     new Promise(resolve => setTimeout(() => resolve(3), 3000))
// ]



// 2 УРОК



// Promise.all(govs).then( function(result){
//     console.log(result);
// })

//   function getRandomInt(min, max) {
//         min = Math.ceil(1);
//         max = Math.ceil(10);
//         return Math.ceil(Math.random() * (max - min)) + min;
//       }

//   let a = getRandomInt(1, 10)
//   console.log(a)

// let p = new Promise ( function (resolve,reject) {
//     if ( a < 6) {
//         resolve("Красава!")
//     } else {
//         reject("Ну не повезло!")
//     };
// })

// p.then (function (r) {
//     console.log(r)
// }, function (r) {
//     console.log(r)
// })

// async function test() {
//     let a = new Promise ( (resolve,reject) => {
//         setTimeout(()=> resolve("1", 1000))
//     });
//     let result = await a;
//     // console.log(result);
//     // console.log("2");
//     return Promise.resolve(result);
// }

// test().then((k)=> console.log(k));


