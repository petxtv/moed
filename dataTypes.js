/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// Numbers //////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// let billion = 1000000000;
// billion = 1_000_000_000;
// billion = 1e9; // all same
// console.log(billion);
// console.log(0xff); //HEX
// console.log(0b11111111); //// binary form of 255
// console.log(0o377); //// OCTAL  form of 255

// // toString(base) convert num to this base
// console.log((245).toString(2)); //11110101
// console.log((245).toString(16)); //f5
// console.log((0xf5).toString(10)); //245

// // rounding
// console.log((1.5764).toFixed(1));

// //isFinite() and isNaN()
// console.log(Number.isFinite(Infinity), Number.isFinite(5));
// console.log(Number.isNaN(5), Number.isNaN("asd" / 5));

// //extract number in string
// console.log(parseFloat("12px"));
// console.log(parseFloat("1212qwfqwfqwfqwf"));
// console.log(parseFloat("sa212qwfqwfqwfqwf"));

// //or unlike toString() it converts base to decimal
// console.log(parseInt("0xf5", 16)); // 245
// console.log(parseInt("11110101", 2)); // 245

/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// strings //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

// //slice
// let str = "stringify";
// console.log(str.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
// console.log(str.slice(0, 1));
// console.log(str.slice(2)); // 'ringify', from the 2nd position till the end
// console.log(str.slice(-4, -1)); // 'gif'

// console.log("z".codePointAt(0)); //122
// console.log(String.fromCodePoint(122)); //z

// //compare two strings str.localeCompare(str2)
// console.log("Österreich".localeCompare("Zealand")); //-1 negative means str less than str2
// console.log("Qsterreich".localeCompare("Aealand")); //1 positive means str greater than str2
// console.log("Asterreich".localeCompare("Asterreich")); //1 positive means str equal str2

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// arrays //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

let a = [1, 2, 3, 4, 5, 6];
a = a.map((e) => e * 2);
