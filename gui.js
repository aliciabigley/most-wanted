function initSearch(people){
var searchType = prompt("What would you like to search by? Name [1], Traits [2], Descendants [3]");
	switch(searchType){
		case "1":
			namePrompt(people);
			break;
		case "2":
			whichTraitsSearch(people);
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




function namePrompt(people){
var firstName = prompt("Please type in the FIRST NAME of the person you would like to search for.");
var lastName = prompt("Please type in the LAST NAME of the person you would like to search for.");
initSearchByName(people, firstName, lastName);
}

//short hand filter code- fix your others if you have time
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
	alertNameSearch(people, nameSearchValue);
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
			alert("We couldn't find anyone with that name on the Most Wanted List.");
			initSearch(people);
	}
}



function whichTraitsSearch(people){
	var chooseTrait = prompt("Would you like to search by [1] trait or [2] many traits.");
	switch (chooseTrait) {
		case "1":
			SearchByOneTrait(people);
			break;
			case "2":
			searchAllTraits(people);
				break;
		default:
			alert("Oops! That's not an option.");
		whichTraitsSearch(people);
	}
}




	function SearchByOneTrait(people) {
		var searchTraits = prompt("What would you like to search by?\n\n Age [1], Height [2], Weight [3], Eye Color [4], Occupation [5]");
			switch(searchTraits){
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
					SearchByOneTrait(people);
					break;
	}
}

function agePrompt(people){
var age = prompt("How old is the person you are looking for?");
calculateAgeFromDOB(people, age);
}

	function calculateAgeFromDOB(people, age){
		var today = new Date();
		var birthDate = parseInt(age);
		var ageYear = today.getFullYear() - birthDate;
		var birthYear = ageYear.toString();
		searchAge (people, birthYear);
}

function searchAge(people, birthYear){
	var	ageSearchValue = people.filter(function(person){
		if(person.dob.slice(-4) === birthYear){
			return true;
		}
		else{
			return false;
		}
	});
	alertAge(people,ageSearchValue);
}

function pullAgeInfo(people, holdDescendants, descendantName ){
    for (var i=0; i < holdDescendants.length; i++) {
        if (holdDescendants[i].name === descendantName) {
            alertDescendants(holdDescendants[i]);
        }
    }
}
function alertAge(people, ageSearchValue) {

alert(ageSearchValue);
}


function heightPrompt(people){
	var searchHeight = prompt("How tall is the person you are looking for ex: 5' 7''?");
}
function weightPrompt(){
	var searchWeight = prompt("How much does the person you are looking for weight (lbs)?");
}
function eyePrompt(people){
	var searchEyeColor = prompt("What color eyes would you like to search? [1] Blue, [2] Green, [3] Brown, [4] Black, [5] Hazel, [6] All other colors");
}
function occupationPrompt(people) {
	var searchOccupation = prompt("What occupation would you like to search?");
}
	function searchAllTraits(people) {
		var searchTraits = prompt("Search by multiple traits. Your options are Eye Color, Height, Weight, Age, or Occupation. \nPlease type your search terms, separated by commas");
	}

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
		nameSearchForDescendants(people, nameSearchValue);
	}

	function nameSearchForDescendants(people, nameSearchValue){
		try{
			var searchId = nameSearchValue[0].id;
		}
		catch(err){
				alert("We couldn't find anyone with that name on the Most Wanted List.");
				initSearch(people);
		}
	findDescendants(people, searchId);
	}

	function findDescendants(people, searchId, holdDescendants = [], i = -1){
	var listOfDescendants = people.filter(function(person){
		if(person.parents[0] === searchId || person.parents[1] === searchId){
				return true;
			}
			else{
				return false;
			}
		});
		holdDescendants = holdDescendants.concat(listOfDescendants);


		if(i < holdDescendants.length -1){
			i++;
			return findDescendants(people, holdDescendants[i].id, holdDescendants, i);
		}
		else{
			pullDescendantInfo(people, holdDescendants);
		}
}

function pullDescendantInfo(people, holdDescendants, descendantName ){
    for (var i=0; i < holdDescendants.length; i++) {
        if (holdDescendants[i].name === descendantName) {
            alertDescendants(holdDescendants[i]);
        }
    }
}
function alertDescendants(holdDescendants){
	alert("Here are of the descendants:" + " " + holdDescendants.firstName + " " + holdDescendants.lastName);
}
