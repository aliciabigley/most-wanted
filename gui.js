function initSearch(people, holdList = [], i = -1){
var searchType = prompt("What would you like to search by?\n\n[1] Name\n[2] Traits\n[3] Descendants\n[4] Family");
	switch(searchType){
		case "1":
			nameSearch(people);
			break;
		case "2":
			whichTraitsSearch(people);
			break;
			case "3":
				decendantSearch(people, holdList, i);
				break;
			case "4":
				familySearch(people);
				break;
		default:
			alert("Oops! That's not an option. Try [1], [2], [3], or [4] next time.");
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
function displayResults(people, filterResults){
	if (filterResults.length === 0){
		alert("Sorry, we couldn't find anyone with that search request.");}

		else if (filterResults.length === 1) {
			var oneResult = filterResults.map(function(person) {
				return ["\n"+ "Name:" + " " + person.firstName, person.lastName,
					"\n"+ "Birthday:" + " " + person.dob,
					"\n"+ "Occupation:" + " " + person.occupation]. join(" ");
			});
			alert("We found the following result:" + " " + oneResult );
		}
		else {
			var firstNameLastNameMultiResult = filterResults.map(function(person) {
				return ["\n"+ "Name:" + " " + person.firstName, person.lastName]. join(" ");
			});
			alert("We found the following results:" + " " + firstNameLastNameMultiResult + " "  );

		}
	}

function firstNamePrompt(){
var first = promptQuestion("Please type in the FIRST NAME of the person you would like to search for.");
return first;
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

function nameSearch(people){
var firstName = firstNamePrompt();
var lastName = lastNamePrompt();
var filterResults = nameFilter(people, firstName, lastName);
displayResults(people, filterResults);
}

function whichTraitsSearch(people){
	var chooseTrait = prompt("How many traits would you like to search by?\n\n[1] One Trait\n[2] Multiple Traits");
	switch (chooseTrait) {
		case "1":
			SearchByOneTrait(people);
			break;
			case "2":
			multiTraitSearch(people);
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
					weightSearch(people);
					break;
				case "4":
					eyeColorSearch(people);
					break;
				case "5":
					occupationSearch(people);
					break;
				default:
					alert("Oops! That's not an option.");
					SearchByOneTrait(people);
					break;
	}
}
function agePrompt(){
var ageInput = promptQuestion("How old is the person you are looking for?");
return ageInput;
}

	function calculateAgeFromDOB(age){
		var today = new Date();
		var birthDate = parseInt(age);
		var ageYear = today.getFullYear() - birthDate;
		var birthYear = ageYear.toString();
		return birthYear;
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
}

function ageSearch(people){
var age = agePrompt();
var calculation = calculateAgeFromDOB(age);
var filterResults = ageFilter(people, calculation);
displayResults(people, filterResults);
}

function heightPrompt(){
	var heightInput = promptQuestion("How tall is the person you are looking for ex: 5' 7''?");
	return heightInput;
}
 function heightConvert(heightInput){
	var twelveInch = 12;
	var heightArray = heightInput.split("'");
	var splitFt = heightArray[0];
	var splitIn = heightArray[1].replace('"', '');
	var feet = parseFloat(splitFt);
	var inch = parseFloat(splitIn);
	var feetToInch = twelveInch * feet + inch;
	return feetToInch;
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
	}

function heightSearch(people){
var height = heightPrompt();
var calculation = heightConvert(height);
var filterResults = heightFilter(people, calculation);
displayResults(people, filterResults);
}

function weightPrompt(){
	var weightInput = promptQuestion("How much does the person you are looking for weight (lbs)?");
	return weightInput;
}

function weightFilter(people, weightInput) {
 var weightConvert = parseFloat(weightInput);
 return people.filter(function(person){
	if(person.weight === weightConvert){
		return person.firstName && person.lastName;
 }
	else{
		return false;
	}
 });
 }

function weightSearch(people){
var weight = weightPrompt();
var filterResults = weightFilter(people, weight);
displayResults(people, filterResults);
}

function eyePrompt(){
	var eyeInput = promptQuestion("What color eyes would you like to search? Ie: Blue, Green, Brown, Black, Hazel, or any color");
	return eyeInput;
}

function eyeFilter(people, eyeInput) {
 return people.filter(function(person){
	if(person.eyeColor.toLowerCase() === eyeInput.toLowerCase()){
		return person.firstName && person.lastName;
 }
	else{
		return false;
	}
 });
 }

 function eyeColorSearch(people){
 var eyeColor = eyePrompt();
 var filterResults = eyeFilter(people, eyeColor);
 displayResults(people, filterResults);
 }

function occupationPrompt() {
	var occupationInput = promptQuestion("What occupation would you like to search? Ie: Landscaper, Doctor, Programmer, Freelancer");
	return occupationInput;
}

function occupationFilter(people, occupationInput) {
 return people.filter(function(person){
	if(person.occupation.toLowerCase() === occupationInput.toLowerCase()){
		return person.firstName && person.lastName;
 }
	else{
		return false;
	}
 });
 }

function occupationSearch(people){
var occupation = occupationPrompt();
var filterResults = occupationFilter(people, occupation);
displayResults(people, filterResults);
}

function familyPrompt_FirstName(){
	var firstNamefamilyMemberSearch = promptQuestion("Enter the FIRST name of the person who's family you would like to see");
	return firstNamefamilyMemberSearch;
}
function familyPrompt_LastName() {
	var LastNamefamilyMemberSearch = promptQuestion("Enter the LAST name of the person who's family you would like to see");
	return LastNamefamilyMemberSearch;
}




// function nameFilter(people, firstName, lastName){
// 	return people.filter(function(person){
// 		if(person.firstName.toLowerCase() === firstName.toLowerCase() && person.lastName.toLowerCase() === lastName.toLowerCase()){
// 			return true;
// 		}	else{
// 			return false;
// 		}
// 	});
// }

///you are here
function indexZeroID(people, firsttPersonFilterResults){
	//try{
		return firsttPersonFilterResults[0].id;
	// }
	// catch(err){
	// 		alert("We couldn't find anyone with that name on the Most Wanted List.");
	// 		initSearch(people);
	// }
}

function familyFilter(people, searchId){
return people.filter(function(person){
	if(person.parents[0] === searchId || person.parents[1] === searchId || person.currentSpouse === searchId){
			return true;
		}
		else{
			return false;
		}
	});
// for(var i=0; i < listOfFamily.length; i++){
// 	if(listOfFamily.currentSpouse != null){
// 		return listOfFamily.currentSpouse;
// 	}
// 	else{
// 			return listOfFamily.currentSpouse;
	}
//}
//	pullFamily(people, listOfFamily);
//}
// function pullFamily(people, listOfFamily){
// 	for (var i=0; i < listOfFamily.length; i++) {
// 		alertSeach(people, listOfFamily[i]);
// 	}
// }

function familySearch(people){
var firstName = familyPrompt_FirstName();
var lastName = familyPrompt_LastName();
var firstPersonFilterResults = nameFilter(people, firstName, lastName);
var idForSearchedPerson = indexZeroID(people, firstPersonFilterResults);
var filterResults = familyFilter(people, idForSearchedPerson);
displayResults(people, filterResults);
}


//SearchByAllTraits
	function searchAllTraits() {
		var multipleTraitsInput = promptQuestion("Search by multiple traits. Your options are Eye Color, Height, Weight, Age, or Occupation. \nPlease type your search terms, separated by commas");
		return multipleTraitsInput;
		//return multipleTraitsInput;
		}
function splitSpaceTraitSearch(multipleTraitsInput){
	var traitsRemoveSpacesArray = multipleTraitsInput.replace(/ /g, '');
	//var traitCommaSplit = traitsRemoveSpacesArray.split(",");
	return traitsRemoveSpacesArray;
}
function splitCommaTraitSearch(traitsRemoveSpacesArray){
	//var traitsRemoveSpacesArray = searchMultipleTraits.replace(/ /g, '');
	var traitCommaSplit = traitsRemoveSpacesArray.split(",");
	return traitCommaSplit;
}
function multiTraitSearch(people){
	var multipleTraits = searchAllTraits();
	var removeSpace = splitSpaceTraitSearch(multipleTraits);
	var splitComma = splitCommaTraitSearch(removeSpace);

}
	//index 0 = eye, 1 = height, 2= weight, 3= age, 4= occupation
	//1 parse to float
	//2 parse to float
	//3 convert



////DO NOT DELETE
// 	var multiTrait= people.filter(function(person){
// 		if(person.eyeColor.toLowerCase() === traitCommaSplit.toLowerCase()
// 		&& person.weight === traitCommaSplit
// 		&& person.occupation.toLowerCase() === traitCommaSplit.toLowerCase()){
// 			return people.firstName && people.lastName;
// 		}
// 	}).map(function(person){
// 		return{
// 			meetsRequirements: " " + person.firstName + " " + person.lastName
// 		};
// 	});
// }
////DO NOT DELETE

	// function descendantPrompt(people){
	// var firstName = prompt("Please type in the FIRST NAME of the person who's descendants you would like to see");
	// var lastName = prompt("Please type in the LAST NAME of the person who's descendants you would like to see");
	// initSearchDescendants(people, firstName, lastName);
	// }

	// function initSearchDescendants(people, firstName, lastName){
	// 	return people.filter(function(person){
	// 		if(person.firstName.toLowerCase() === firstName.toLowerCase() && person.lastName.toLowerCase() === lastName.toLowerCase()){
	// 			return true;
	// 		}
	// 		else{
	// 			return false;
	// 		}
	// 	});
	// 	//nameSearchForDescendants(people, nameSearchValue);
	// }

	// function nameSearchForDescendants(people, nameSearchValue){
	// 	try{
	// 		var searchId = nameSearchValue[0].id;
	// 	}
	// 	catch(err){
	// 			alert("We couldn't find anyone with that name on the Most Wanted List.");
	// 			initSearch(people);
	// 	}
	// findDescendants(people, searchId);
	// }

	function descendantFilter(people, searchId, holdList = [], i = -1){
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
			//return findDescendants(people, holdList[i].id, holdList, i);
		}
		else{
			return holdList;
			//pullDescendantInfo(people, holdList);
		}
}

// function pullDescendantInfo(people, holdList, descendantName ){
//     for (var i=0; i < holdList.length; i++) {
//         if (holdList[i].name === descendantName) {
//             alertSeach(holdList[i]);
//         }
//     }
// }

function decendantSearch(people, holdList, i){
	var firstName = firstNamePrompt();
	var lastName = lastNamePrompt();
	var firstPersonFilterResults = nameFilter(people, firstName, lastName);
	var idForSearchedPerson = indexZeroID(people, firstPersonFilterResults);
	var filterResults = descendantFilter(people, idForSearchedPerson, holdList, i);
	displayResults(people, filterResults);
}


// function alertSeach(people, holdList){
// try {
// 	alert("Search Results:" + " " + holdList.firstName + " " + holdList.lastName);
// } catch (err) {
// 	alert("Oops! We couldn't find anyone who met your search requirements. Please try a different search.");
// 	initSearch(people);
// }
// }
