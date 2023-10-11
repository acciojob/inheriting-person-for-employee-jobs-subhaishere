// complete this js code
function Person(name, age) {
	this.name  = name;
	this.age  = age;
}

function Employee(name, age, jobTitle) {
	this.name  = name;
	this.age = age;
	this.jobTitle = jobTitle;
}

Person.prototype.greet= function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
	alert(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
}

Employee.prototype.jobGreet = function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
} 
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;