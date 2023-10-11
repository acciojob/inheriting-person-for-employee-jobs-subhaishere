// complete this js code
function Person(name, age) {
	console.log(`Hello, my name is ${name}, I am ${age} years old`)
}

const Person = Object.create(Person);
Person.name = 'Alice';
Person.age = 14;
Person.greet();

function Employee(name, age, jobTitle) {
	console.log(`Hello, my name is ${name}, I am ${age} years old , and my job title is ${jobTitle}`)
}

const Employee = Object.create(Employee);
Employee.name = 'Alice';
Employee.age = 14;
Employee.Employee();

window.Person = Person;
window.Employee = Employee;