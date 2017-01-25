function initSearch(people){
var searchType = prompt("What would you like to search by? Name [1], Traits [2], Descendants [3]");
	switch(searchType){
		case "1":
			namePrompt(people);
			break;
		case "2":
			//initSearchByTraits(people);
			break;
			case "3":
				descendantPrompt(people);
				break;
		default:
			alert("Oops! That's not an option. Try [1], [2], or [3] next time.");
			initSearch(people);
			break;
	}
}
// function loopPrompt(people, question){
// 	do{ //prompt the user until the enter answer question

// 	}
// 	while();

// }

function namePrompt(people){
var firstName = prompt("Please type in the FIRST NAME of the person you would like to search for.");
var lastName = prompt("Please type in the LAST NAME of the person you would like to search for.");
initSearchByName(people, firstName, lastName);
}

// function initSearchByName(people, firstName, lastName){
// 	return people.filter(function(person){ //you can remove people.filter
// 		retun person.firstName.toLowerCase() === firstName.toLowerCase() && person.lastName.toLowerCase() === lastName.toLowerCase()){
//
// 	});
	// alertNameSearch(people, nameSearchValue)
//}
function initSearchByName(people, firstName, lastName){
	var nameSearchValue =  people.filter(function(person){ //you can remove people.filter
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
	alert("Here are your search results:\n" + nameSearchValue[0].firstName + " " + nameSearchValue[0].lastName +
	"\nGender:" + nameSearchValue[0].gender +
	"\nDate of Birth:"+ nameSearchValue[0].dob +
  "\nHeight:" + nameSearchValue[0].height +
	"\nWeight:"+ nameSearchValue[0].weight +
	"\nEye Color:"+ nameSearchValue[0].eyeColor +
	"\nOccupation:"+ nameSearchValue[0].occupation);
	}
	catch(err){
			alert("We couldn't find anyone with that name on the Most Wanted List. ");
			initSearch(people);
	}
}

// 	function initSearchByTraits() {
// 		var searchTraits = prompt("What would you like to search by?\n\n Age [1], Height [2], Weight [3], Eye Color [4], Occupation [5]");
// 			switch(searchType){
// 				case "1":
// 					agePrompt(people);
// 					break;
// 				case "2":
// 					heightPrompt(people);
// 					break;
// 				case "3":
// 					weightPrompt(people);
// 					break;
// 				case "4":
// 					eyePrompt(people);
// 					break;
// 				case "5":
// 					occupationPrompt(people);
// 					break;
// 				default:
// 					alert("Oops! That's not an option.");
// 					initSearchByTraits(people);
// 					break;
// 	}
// }


	// function determineWhatTraits(people) {
	// 	var searchTraits = prompt("Enter all of the numbers of the traits you would like to search.\n Note: you may enter more than one number. \n [1] Eye Color, [2] Height, [3] Weight, [4] Age, [5]")
	// }
	function descendantPrompt(people){
	var firstName = prompt("Please type in the FIRST NAME of the person who's descendants you would like to see");
	var lastName = prompt("Please type in the LAST NAME of the person who's descendants you would like to see");
	initSearchDescendants(people, firstName, lastName);
	}

	function initSearchDescendants(people, firstName, lastName){
		var	nameSearchValue = people.filter(function(person){
			if(person.firstName.toLowerCase() === firstName.toLowerCase() && person.lastName.toLowerCase() === lastName.toLowerCase()){
				return true;
			}
			else{
				return false;
			}
		});
		nameSearchForDescendants(people, nameSearchValue)
	}

	function nameSearchForDescendants(people, nameSearchValue){
		try{
			return nameSearchValue.id;
		}
		catch(err){
				alert("We couldn't find anyone with that name on the Most Wanted List. ");
				initSearch(people);
		}
		findDescendants(people, nameSearchValue.id)
	}
var descendants = findDescendants (people, nameSearchValue.id){
	people.id.map()
}
	//function findDescendants(people, nameSearchValue.id) {


	//}
