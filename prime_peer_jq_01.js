//Utility function
//A simple random number generator
$(document).ready(function() {

var girlNames = ["Sarah", "Cat", "Maria", "Skyler", "Lisa", "Corina", "Cena", "Tara", "Sam"];
var boyNames = ["Luke", "Ryan", "Bob", "James", "Jim", "Josh", "Mikel", "Eric", "Matt", "Suren", "Brandon", "Huck", "PR"];
var lastNames = ["Smith", "Ford", "Jackson", "Washington", "Carson", "Carter", "Johnson"];

function Person() {
	var random = 0;
	this.age = randomNumber(1, 100);
	random = randomNumber(0, 1);
	if (random === 0) {
		this.sex = "Male";
		this.firstName = boyNames[randomNumber(0, boyNames.length - 1)];
	} else {
		this.sex = "Female";
		this.firstName = girlNames[randomNumber(0, girlNames.length - 1)];
	}
	this.lastName = lastNames[randomNumber(0, lastNames.length - 1)];
	this.weight = randomNumber(1, 100);
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

$('#btn').on('click', function() {
	var person = new Person();
	var personInfo = "<tr><td>" + person.firstName + "</td><td>" + person.lastName + "</td><td>" + person.age + "</td><td>" + person.sex + "</td><td>" + person.weight + "</td></tr>"; 
	$('#people > tbody:last-child').append(personInfo); 
});

});