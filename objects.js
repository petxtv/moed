//declare an object
// const obj = {
// 	name: "mohamed",
// 	age: 21,
// };

// delete an object prop
// console.log(obj);
// delete obj.age;
// console.log(obj);

//factory function
// function createUser(name, age) {
// 	return {
// 		name,
// 		age,
// 	};
// }
// console.log(createUser("mohamed", 15));

//check if there is such prop

//not recommended
// console.log(obj.sdf !== undefined);
// //or
// console.log("sds" in obj);

// //walk through all obj props
// for (let objProp in obj) {
// 	console.log(`the value of ${objProp} is ${obj[objProp]}`);
// }

// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130,
// 	admins: {
// 		mohamed: 100,
// 	},
// 	sayJohnValue() {
// 		console.log("Hi", this.admins);
// 	},
// };

//clonning obj if all object props are permitive
// const copiedObject = Object.assign({}, salaries, obj);
// // or
// const copiedObject2 = { ...salaries, ...obj };
// console.log(copiedObject);
// console.log(copiedObject2);

//clonning obj if  object props are not all permitive
// const copiedObject = structuredClone(salaries);
// console.log(copiedObject.admins == salaries.admins);

// salaries.sayJohnValue();

// constructor Function

// function User(name) {
// 	this.name = name;
// 	this.isAdmin = false;
// }

// const u = new User("mohamed");
// const a = new User("wafawf");
// console.log(u);
// console.log(a);

// let a = {};
// console.log(a.sd?.s);

//Symbol Type
// const id = Symbol("h");
// console.log(id);
// console.log(id.toString());
// console.log(id.description);

// let user = {
// 	// belongs to another code
// 	name: "John",
// };

// let id = Symbol("id");

// user[id] = 1;

// console.log(user[id]); //

////////////////////////////////////////////////////////////////////////////////
//////////////////// Object to primitive conversion ////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/////First method if exist rest doesn't matter
// const salary = {
// 	user1: 100,
// 	user2: 200,
// 	user3: 300,
// 	user4: 400,
// 	user5: 500,
// 	// [Symbol.toPrimitive](hint) {},
// };

// salary[Symbol.toPrimitive] = (hint) => {
// 	if (hint == "string") {
// 		return "";
// 	}
// 	if (hint == "number") {
// 		let salaryNum = 0;
// 		for (let prop in salary) {
// 			salaryNum += +salary[prop];
// 		}
// 		return salaryNum;
// 	}
// 	if (hint == "default") {
// 		return "";
// 	}
// };

/////Second method if first method exist this won't work

/////////convert to string

const salary = {
	user1: 100,
	user2: 200,
	user3: 300,
	user4: 400,
	user5: 500,
	// [Symbol.toPrimitive](hint) {},

	// for string conversion or if valueOf doesn't exist used for num Conversion
	toString() {
		return "";
	},
	//for num conversion or if toString doesn't exist used for string Conversion
	valueOf() {
		return 0;
	},
};
