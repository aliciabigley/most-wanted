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
	//when I get here, it shoots back to initSearch
}

function alertNameSearch(people, nameSearchValue) {
	alert(nameSearchValue);
	}

// function initSearchByTraits(people){
// 	var searchType; = prompt("What would you like to search by?\n\n Age [1], Height [2], Weight [3], Eye Color [4], Occupation [5]");
// 	switch(searchType){
// 		case "1":
// 			getAge();
// 			break;
// 		case "2":
// 			getHeight();
// 			break;
// 		case "3":
// 			getWeight();
// 			break;
// 		case "4":
// 			getEye();
// 			break;
// 		case "5":
// 			getOccupation();
// 			break;
// 		default:
// 			alert("Oops! That's not an option.");
// 			initSearchByTraits(people);
// 			break;
// 	;
// }
// function displayResults(){
// 	;
// }
// function isNumeric(){
// 	;
// }
// function getAge(){
// 	;
// }
// function getHeight(){
// 	;
// }
// function getWeight(){
// 	;
// }
// function getEye(){
// 	;
// }
// function getOccupation(){
// 	;
// }
