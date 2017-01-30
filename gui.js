function initSearch(people){
var searchType = prompt("What would you like to search by?\n\n[1] Name\n[2] Traits\n[3] Descendants\n[4] Family");
	switch(searchType){
		case "1":
			nameSearch(people);
			break;
		case "2":
			whichTraitsSearch(people);
			break;
			case "3":
				descendantPrompt(people);
				break;
			case "4":
				familyPrompt(people);
				break;
		default:
			alert("Oops! That's not an option. Try [1], [2], or [3] next time.");
			initSearch(people);
			break;
	}
}
function promptQuestion(question){
	do {
		var input = prompt(question);
	} while (!input);
	return input;
}
//if else
function displayResults(people, filterResults){
	if (filterResults.length === 0){
		alert("Sorry, we couldn't find anyone with that search request.");}

	else if (filterResults.length === 1) {
		var oneResult = filterResults.map(function(person) {
			return [person.firstName, person.lastName, person.dob, person.occupation]. join(" ");
		});
		alert("We found the following result:" + " " + oneResult );
		}
		else {
			var firstNameLastNameMultiResult = filterResults.map(function(person) {
				return [person.firstName, person.lastName]. join(" ");
			});
			alert("We found the following results:" + " " + firstNameLastNameMultiResult );

		}
}

		// case 1:
		// var oneResult = filterResults.map(function(person) {
		// 	return [person.firstName, person.lastName, person.dob, person.occupation]. join(" ");
		// });
		// alert("We found the following result:" + " " + oneResult );
		// 	break;

	// 	default:
	// 	var firstNameLastNameMultiResult = filterResults.map(function(person) {
	// 		return [person.firstName, person.lastName]. join(" ");
	// 	});
	// 	alert("We found the following results:" + " " + firstNameLastNameMultiResult );
	//
	// }


function firstNamePrompt(){
var first = promptQuestion("Please type in the FIRST NAME of the person you would like to search for.");
return first;
//var personSearchedFor = initSearchByName(people, firstName, lastName);
}
function lastNamePrompt(){
var last = promptQuestion("Please type in the LAST NAME of the person you would like to search for.");
return last;
}

function nameFilter(people, firstName, lastName){
	return people.filter(function(person){
		if(person.firstName.toLowerCase() === firstName.toLowerCase() && person.lastName.toLowerCase() === lastName.toLowerCase()){
			return true;
		}	else{
			return false;
		}
	});
}

function nameSearch(people){ //call all name functions here
var firstName = firstNamePrompt();
var lastName = lastNamePrompt();
var filterResults = nameFilter(people, firstName, lastName);
displayResults(people, filterResults);
}



// function alertNameSearch(people, nameSearchValue) {
// 	try{
// 	alert("Here are your search results:\n" + nameSearchValue[0].firstName + " " + nameSearchValue[0].lastName +
// 	"\nGender:" + nameSearchValue[0].gender +
// 	"\nDate of Birth:"+ nameSearchValue[0].dob +
//   "\nHeight:" + nameSearchValue[0].height +
// 	"\nWeight:"+ nameSearchValue[0].weight +
// 	"\nEye Color:"+ nameSearchValue[0].eyeColor +
// 	"\nOccupation:"+ nameSearchValue[0].occupation);
// 	}
// 	catch(err){
// 			alert("We couldn't find anyone with that name on the Most Wanted List.");
// 			initSearch(people);
// 	}
// }



function whichTraitsSearch(people){
	var chooseTrait = prompt("How many traits would you like to search by?\n\n[1] One Trait\n[2] Multiple Traits");
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
		var searchTraits = prompt("What would you like to search by?\n\n[1] Age\n[2] Height\n[3] Weight\n[4] Eye Color\n[5] Occupation");
			switch(searchTraits){
				case "1":
					ageSearch(people);
					break;
				case "2":
					heightSearch(people);
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
///AgeStart
function agePrompt(){
var ageInput = promptQuestion("How old is the person you are looking for?");
return ageInput;
//calculateAgeFromDOB(people, age);
}

	function calculateAgeFromDOB(age){
		var today = new Date();
		var birthDate = parseInt(age);
		var ageYear = today.getFullYear() - birthDate;
		var birthYear = ageYear.toString();
		return birthYear;
		//searchAge (people, birthYear);
}

function ageFilter(people, birthYear){
	return people.filter(function(person){
		if(person.dob.slice(-4) === birthYear){
			return person.firstName && person.lastName;
		}
		else{
			return false;
		}
	});
	//pullAgeInfo(people,ageSearchValue);
}

// function pullAgeInfo(people, ageSearchValue){
//     for (var i=0; i < ageSearchValue.length; i++) {
//       alertSeach(people, ageSearchValue[i]);
//     }
// }

function ageSearch(people){
var age = agePrompt();
var calculation = calculateAgeFromDOB(age);
var filterResults = ageFilter(people, calculation);
displayResults(people, filterResults);
}


////AgeEnd

////HeightStart
function heightPrompt(){
	var height = promptQuestion("How tall is the person you are looking for ex: 5' 7''?");
	return height;
	//heightConvert(people, height);
}
 function heightConvert(height){
	var twelveInch = 12;
	var heightArray = height.split("'");
	var splitFt = heightArray[0];
	var splitIn = heightArray[1].replace('"', '');
	var feet = parseFloat(splitFt);
	var inch = parseFloat(splitIn);
	var feetToInch = twelveInch * feet + inch;
	return feetToInch;
	//heightSearch(people, feetToInch);
 }

 function heightFilter(people, feetToInch) {
	return people.filter(function(person){
		if(person.height === feetToInch){
			return person.firstName && person.lastName;
	}
		else{
			return false;
		}
	});
	//pullheightInfo(people, height);
	}

// function pullheightInfo(people, height){
//     for (var i=0; i < height.length; i++) {
//       alertSeach(people, height[i]);
//     }
// }

function heightSearch(people){
var height = heightPrompt();
var calculation = heightConvert(height);
var filterResults = heightFilter(people, calculation);
displayResults(people, filterResults);
}
// function nameSearch(people){ //call all name functions here
// var firstName = firstNamePrompt();
// var lastName = lastNamePrompt();
// var filterResults = nameFilter(people, firstName, lastName);
// displayResults(people, filterResults);
// }
/////Height End

/////WeightStart
function weightPrompt(){
	var userInput = promptQuestion("How much does the person you are looking for weight (lbs)?");
	return userInput;
	//weightSearch(people, searchWeight);
}

function weightFilter(searchWeight) {
 var weightConvert = parseFloat(searchWeight);
 var	weight = people.filter(function(person){
	if(person.weight === weightConvert){
		return person.firstName && person.lastName;
 }
	else{
		return false;
	}
 });
 //pullweightInfo(people, weight);
 }

// function pullweightInfo(people, weight){
// 	for (var i=0; i < weight.length; i++) {
// 		alertSeach(people, weight[i]);
// 	}
// }

function weightSearch(people){
var weight = weightPrompt();
var filterResults = weightFilter(people, weight);
displayResults(people, filterResults);
}
///WeightEnds

///EyeStart
function eyePrompt(people){
	var searchEyeColor = prompt("What color eyes would you like to search? Ie: Blue, Green, Brown, Black, Hazel, or any color");
	eyeSearch(people, searchEyeColor);
}
function eyeSearch(people, searchEyeColor) {
 var	color = people.filter(function(person){
	if(person.eyeColor.toLowerCase() === searchEyeColor.toLowerCase()){
		return person.firstName && person.lastName;
 }
	else{
		return false;
	}
 });
 pullEyeColorInfo(people, color);
 }

function pullEyeColorInfo(people, color){
	for (var i=0; i < color.length; i++) {
		alertSeach(people, color[i]);
	}
}
///eyeColor End
///Occupation start
function occupationPrompt(people) {
	var searchOccupation = prompt("What occupation would you like to search? Ie: Landscaper, Doctor, Programmer, Freelancer");
	occupationSearch(people, searchOccupation);
}

function occupationSearch(people, searchOccupation) {
 var	job = people.filter(function(person){
	if(person.occupation.toLowerCase() === searchOccupation.toLowerCase()){
		return person.firstName && person.lastName;
 }
	else{
		return false;
	}
 });
 pullOccupationInfo(people, job);
 }

function pullOccupationInfo(people, job){
	for (var i=0; i < job.length; i++) {
		alertSeach(people, job[i]);
	}
}
//OccupationEnd

//FamilyStart
function familyPrompt(people){
	var firstNamefamilyMemberSearch = prompt("Enter the FIRST name of the person who's family you would like to see");
	var LastNamefamilyMemberSearch = prompt("Enter the LAST name of the person who's family you would like to see");
	firstMember(people, firstNamefamilyMemberSearch, LastNamefamilyMemberSearch);
}

function firstMember(people, firstNamefamilyMemberSearch, LastNamefamilyMemberSearch) {
	var firstMember =  people.filter(function(person){
		if(person.firstName.toLowerCase() === firstNamefamilyMemberSearch.toLowerCase() && person.lastName.toLowerCase() === LastNamefamilyMemberSearch.toLowerCase()){
			return true;
		}
		else{
			return false;
		}
	});
	firstPersonId(people, firstMember);
}

function firstPersonId(people, firstMember){
	try{
		var searchId = firstMember[0].id;
	}
	catch(err){
			alert("We couldn't find anyone with that name on the Most Wanted List.");
			initSearch(people);
	}
findFamily(people, searchId);
}

function findFamily(people, searchId){
var listOfFamily = people.filter(function(person){
	if(person.parents[0] === searchId || person.parents[1] === searchId || person.currentSpouse === searchId){
			return true;
		}
		else{
			return false;
		}
	});
for(var i=0; i < listOfFamily.length; i++){
	if(listOfFamily.currentSpouse != null){
		return listOfFamily.currentSpouse;
	}
	else{
			return listOfFamily.currentSpouse;
	}
}
	pullFamily(people, listOfFamily);
}
function pullFamily(people, listOfFamily){
	for (var i=0; i < listOfFamily.length; i++) {
		alertSeach(people, listOfFamily[i]);
	}
}
//End Family
//SearchByAllTraits
	function searchAllTraits(people) {
		var searchMultipleTraits = prompt("Search by multiple traits. Your options are Eye Color, Height, Weight, Age, or Occupation. \nPlease type your search terms, separated by commas");
		splitTraitSearch(people, searchMultipleTraits);
		}
function splitTraitSearch(people, searchMultipleTraits){
	var traitsRemoveSpacesArray = searchMultipleTraits.replace(/ /g, '');
	var traitCommaSplit = traitsRemoveSpacesArray.split(",");
	//index 0 = eye, 1 = height, 2= weight, 3= age, 4= occupation
	//1 parse to float
	//2 parse to float
	//3 convert

	var multiTrait= people.filter(function(person){
		if(person.eyeColor.toLowerCase() === traitCommaSplit.toLowerCase()
		&& person.weight === traitCommaSplit
		&& person.occupation.toLowerCase() === traitCommaSplit.toLowerCase()){
			return people.firstName && people.lastName;
		}
	}).map(function(person){
		return{
			meetsRequirements: " " + person.firstName + " " + person.lastName
		};
	});
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

	function findDescendants(people, searchId, holdList = [], i = -1){
	var listOfDescendants = people.filter(function(person){
		if(person.parents[0] === searchId || person.parents[1] === searchId){
				return true;
			}
			else{
				return false;
			}
		});
		holdList = holdList.concat(listOfDescendants);


		if(i < holdList.length -1){
			i++;
			return findDescendants(people, holdList[i].id, holdList, i);
		}
		else{
			pullDescendantInfo(people, holdList);
		}
}

function pullDescendantInfo(people, holdList, descendantName ){
    for (var i=0; i < holdList.length; i++) {
        if (holdList[i].name === descendantName) {
            alertSeach(holdList[i]);
        }
    }
}

function alertSeach(people, holdList){
try {
	alert("Search Results:" + " " + holdList.firstName + " " + holdList.lastName);
} catch (err) {
	alert("Oops! We couldn't find anyone who met your search requirements. Please try a different search.");
	initSearch(people);
}
}
