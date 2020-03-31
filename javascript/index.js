// function greet( ){
//   let hi = `hi, ${this.name}`;
//   console.log(hi);
//   let slicuarray = [].slice.call(arguments);
//   console.log(slicuarray);
// }

// class AAA {
//   constructor(name) {
//     this.name = name
//   }
// }
// let kensho = new AAA('kensho')

// let obj = {name: 'ton'};

// //コールでオブジェクトの指定。
// // greet.call(kensho, 2,2);


// //第2引数が配列
// greet.apply(kensho, [1,3,4,2]);


// let myObj = {
//   id:42, 
//   print() {
//     setTimeout(function() {
//       console.log(this.id);
//     }.bind(this), 1000)
//   }
// }

// myObj.print();



// function timesTwo (i){
//    return i * 2
// }


//引数なしはカッコ必要、引数一つはカッコ不要、関数のコードが一行のときは波括弧いらない。

// const timesTwo = (i) =>  i * 2
// const res = timesTwo(4);

// console.log(res)


// let nomFun = {
//   id: 2,
//   counter: function() {
//     console.log(this.id);
//     //アローファンクションでは、thisは直前のオブジェクトを参照しない。
//     setTimeout(() => {
//       console.log(this.id);
//     }, 1000)
//   } 
// }

// nomFun.counter();


