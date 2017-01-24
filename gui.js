function initSearch(people, data){
var searchType = prompt("What would you like to search by Name [1] or Traits [2]?\n\nName includes First and Last, Kin, Descendants, and Immediate Family Members");
	switch(searchType){
		case "1":
			initSearchByName(data);
			break;
		case "2":
			initSearchByTraits(data);
			break;
		default:
			alert("Oops! That's not an option. Try [1] or [2] next time.");
			initSearch(people, data);
			break;
	}
}
function initSearchByName(data){
	var name = promtp("Please type in the name of the person you would like to search.")
	alert = data.find(name);
	;
}
function initSearchByTraits(data){
	;
}
function displayResults(){
	;
}
function isNumeric() {
	;
}
function getAge(){
	;
}
function getHeight(){
	;
}
function getWeight(){
	;
}
function getEye(){
	;
}
function getOccupation(){
	;
}
