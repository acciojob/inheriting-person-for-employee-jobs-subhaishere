// Constructor function for Person
function Person(name, age) {
	this.name = name;
	this.age = age;
  }
  
  // Add a method to the Person prototype
  Person.prototype.greet = function() {
	console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
  
  // Constructor function for Employee
  function Employee(name, age, jobTitle) {
	// Call the Person constructor to inherit name and age properties
	Person.call(this, name, age);
	this.jobTitle = jobTitle;
  }
  
  // Inherit the Person prototype
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;
  
  // Add a method to the Employee prototype
  Employee.prototype.jobGreet = function() {
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
  
  // Example usage:
  window.Person = Person;
  window.Employee = Employee;
  const person1 = new Person("Alice", 30);
 // person1.greet(); 
  
  const employee1 = new Employee("Bob", 25, "Manager");
  employee1.greet(); 
  employee1.jobGreet(); 
  