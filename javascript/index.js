// // // // function greet( ){
// // // //   let hi = `hi, ${this.name}`;
// // // //   console.log(hi);
// // // //   let slicuarray = [].slice.call(arguments);
// // // //   console.log(slicuarray);
// // // // }

// // // // class AAA {
// // // //   constructor(name) {
// // // //     this.name = name
// // // //   }
// // // // }
// // // // let kensho = new AAA('kensho')

// // // // let obj = {name: 'ton'};

// // // // //コールでオブジェクトの指定。
// // // // // greet.call(kensho, 2,2);


// // // // //第2引数が配列
// // // // greet.apply(kensho, [1,3,4,2]);


// // // // let myObj = {
// // // //   id:42, 
// // // //   print() {
// // // //     setTimeout(function() {
// // // //       console.log(this.id);
// // // //     }.bind(this), 1000)
// // // //   }
// // // // }

// // // // myObj.print();



// // // // function timesTwo (i){
// // // //    return i * 2
// // // // }


// // // //引数なしはカッコ必要、引数一つはカッコ不要、関数のコードが一行のときは波括弧いらない。

// // // // const timesTwo = (i) =>  i * 2
// // // // const res = timesTwo(4);

// // // // console.log(res)


// // // // let nomFun = {
// // // //   id: 2,
// // // //   counter: function() {
// // // //     console.log(this.id);
// // // //     //アローファンクションでは、thisは直前のオブジェクトを参照しない。
// // // //     setTimeout(() => {
// // // //       console.log(this.id);
// // // //     }, 1000)
// // // //   } 
// // // // }

// // // // nomFun.counter();


// // // //クロージャーについて
// // // //駄目なパターン
// // // // counter = 0;
// // // // const increment = function(){
// // // //   counter += 1
// // // //   console.log(counter);
// // // // }

// // // // let increment = (function(){
// // // //   let counter = 0;

// // // //   return function() {
// // // //     counter += 1;
// // // //     console.log(counter);
// // // //   }
// // // // })();

// // // // increment();
// // // // increment();
// // // // increment();


// // // function addStringFactory(tail) {
// // //   x = 0;
// // //   function concat(str){
// // //     return str + tail;
// // //   }
// // //   return concat();
// // // }

// // // let addAs = addStringFactory('aaaaaa');
// // // let addBs = addStringFactory('bbbbbb');

// // // console.log(addAs);


// // //スプレッド構文
// // function sum (x, y, z){
// //   return x + y + z
// // }

// // console.log(sum(1,2,3));

// // numbers = [1,2,4]

// // console.log(sum(...numbers));

// // numbers2 = [3,4,5,3];

// // numbers3 = [...numbers, ...numbers2];
// // console.log(numbers3);

// // console.log(sum(...numbers3));


// // let foo = {
// //   name: 'foo'
// // }

// // let baz = {
// //   name: 'baz'
// // }

// // let fizz = {...foo}

// // console.log(fizz.name);

// // fizz.name = 'fizz';
// // console.log(fizz.name);


// //分割代入
// // let a , b , c;

// // [a , b]  = [2, 4]

// // console.log(a)

// a = { name: 'kensho'}
// console.log(`hello${a.name}`);



//繰り返し処理
let data = [1,2,3,4,5];
const fruits = {banana: 'バナナ', apple: 'りんご', orange: 'オレンジ'};

for(let i = 0; i < data.length; i++) {
  console.log(i, data[i])
}

for(let i in data) {
  console.log(i, data[i]);
}

Object.prototype.addtionalFn = function( ){}


//キーを配列に格納
let keyFruits = Object.keys(fruits);
// バリューを配列に格納
let valueFruits = Object.values(fruits);
//キーとバリューを一つの配列に格納した配列
let entryFruits = Object.entries(fruits);

console.log(keyFruits);
console.log(valueFruits);
console.log(entryFruits);

for(let i of keyFruits) {
  console.log(fruits[i]);
}

data.forEach((value, index, array) => {
  console.log(value, index, array)
})

newData = data.map((value, index, array) =>{
  return value * 2
});

console.log(newData);

newData = data.filter((value, index, array) =>{
  //2だけ格納された配列
  return value === 2
});

console.log(newData);

newData = data.reduce((accu, curr) =>{
  console.log(accu, curr)
  return accu + curr
}, 0);

console.log(newData)


newData = data.sort((a, b) =>{
  //小さい順
  return a - b
  //大きい順
  return b - a
});

console.log(newData)


