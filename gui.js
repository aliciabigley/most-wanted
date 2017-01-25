function initSearch(people){
var searchType = prompt("What would you like to search by? Name [1] or Traits [2]");
	switch(searchType){
		case "1":
			namePrompt(people);
			break;
		case "2":
			initSearchByTraits(people);
			break;
		default:
			alert("Oops! That's not an option. Try [1] or [2] next time.");
			initSearch(people);
			break;
	}
}

function namePrompt(people){
var firstName = prompt("Please type in the FIRST NAME of the person you would like to search for.");
var lastName = prompt("Please type in the LAST NAME of the person you would like to search for.");
initSearchByName(people, firstName, lastName);
}

function initSearchByName(people, firstName, lastName){
	var nameSearchValue =  people.filter(function(person){
		if(person.firstName.toLowerCase() === firstName.toLowerCase() && person.lastName.toLowerCase() === lastName.toLowerCase()){
			return true;
		}
		else{
			return false;
		}
	});
	alertNameSearch(people, nameSearchValue)
}

function alertNameSearch(people, nameSearchValue) {
	try{
	alert("Here are your search results:\n" + nameSearchValue[0].firstName + " " + nameSearchValue[0].lastName);

	}
	catch(err){
			alert("We couldn't find anyone with that name on the Most Wanted List. ");
			initSearch(people);
	}
	}

function initSearchByTraits(people){
	var searchTraits = prompt("What would you like to search by?\n\n Age [1], Height [2], Weight [3], Eye Color [4], Occupation [5]");
	switch(searchType){
		case "1":
			agePrompt(people);
			break;
		case "2":
			heightPrompt(people);
			break;
		case "3":
			weightPrompt(people);
			break;
		case "4":
			eyePrompt(people);
			break;
		case "5":
			occupationPrompt(people);
			break;
		default:
			alert("Oops! That's not an option.");
			initSearchByTraits(people);
			break;
		}
	}

function agePrompt(people){
var age = prompt("Please enter the age of the person you would like to search for.");
getAge(people, age)

}	
function getAge(people, age){
//pull people.dob
// split by /
//dob year - year = age
	;
}

// }
// function displayResults(){
// 	;
// }
// function isNumeric(){
// 	;
// }
function heightPrompt(people){
var height = prompt("Please enter the height of the person you would like to search for.");
getAge(people, height)

}
// function getHeight(){
// 	;
// }
function weightPrompt(people) {
var weight = prompt("Please enter the weight of the person you would like to search for.");
getAge(people, weight)
}

// function getWeight(){
// 	;
// }
function eyePrompt(people) {
var eyeColorSearch = prompt("Please enter the color of the person's eyes you would like to search for.");
getAge(people, eyeColor)
}
function getEye(people, eyeColorSearch){
var eyeColorResult = people.filter(function(color){
	if(color.eyeColorSearch.toLowerCase() == eyeColor.toLowerCase()){
		return true;
	}
	else{
		return false;
	}
});
alertEyeSearch(people, eyeColorResult)
}

function alertEyeSearch(people, eyeColorResult){
	try{
		alert("Here are your search results:\n" eyeColorResult[0].firstName + " " + eyeColorResult[0].lastName)
	}
	catch(err){
		alert("We couldn't find anyone with that those colored eyes on the Most Wanted List.")
	}
}
function occupationPrompt(people){
var occupationSearch = prompt("Please enter the occupation of the person you would like to search for.");
getOccupation(people, occupationSearch)
}
function getOccupation(people, occupationSearch){
	var occupationResult = people.filter(function(occupationElement){
	if(occupationElement.occupationResult.toLowerCase() == occupation.toLowerCase()){
		return true;
	}
	else{
		return false;
	}
});
}
