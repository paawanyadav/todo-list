var id = "1di";
var temp = [''];

function addingTask(){
	var flag = false;
	var gettingTheNumberFromid = "";
	var element = document.getElementById('addingToTheList').value.toString().toLowerCase();
	for(var i=0; i<temp.length; i++){
		if (element == temp[i]){
			flag = true;
			console.log(flag);
			break;
		}
	}
	if (flag==false){
		var BodyOfHTML = document.getElementById('list');
		BodyOfHTML.innerHTML += "<p id='"+id+"'>"+ element +"</p>";
		temp.push(element);
		console.log(temp);

		for(var i=0; i<id.length-2; i++){
			gettingTheNumberFromid += id[i];
		}
		gettingTheNumberFromid = Number(gettingTheNumberFromid);
		gettingTheNumberFromid += 1;
		id = String(gettingTheNumberFromid)+"di";
		document.getElementById('addingToTheList').value = "";
	}
	else{
		alert('The Given Task '+ element.toUpperCase() + ' Is Already In The List.');
		document.getElementById('addingToTheList').value = "";
	}
}


function removingTask(){
	try{
		var flag = false;
		var gettingTheNumberFromid = "";
		var elementToBeRemoved = document.getElementById('removingFromTheList').value.toString().toLowerCase();

		for(var i=0; i<id.length-2; i++){
			gettingTheNumberFromid += id[i];
		}
		gettingTheNumberFromid = Number(gettingTheNumberFromid);

		for(var i=1; i<gettingTheNumberFromid; i++){
			try{
			var currentP = document.getElementById(String(i)+"di").innerHTML.toString().toLowerCase();
			if (currentP == elementToBeRemoved){
				flag = true;
				var currentId = (String(i)+"di");
				break;
			}
			}
			catch(ex)
			{
				console.log('Exception Raised....');;
			}
		}

		if (flag==true){
			currentP = document.getElementById(currentId);
			currentP.remove();
			for(var i=0; i<temp.length; i++){
				if (temp[i] == elementToBeRemoved){
					temp.splice(i,1);
					break;
				}
			}
			document.getElementById('removingFromTheList').value = '';
		}
		else{
			alert('The Given Task '+ elementToBeRemoved.toUpperCase() + ' Is Not In The List.');
			document.getElementById('removingFromTheList').value = '';	
		}
	}
	catch(ex){
		console.log(ex);
		alert('The Given Task '+ document.getElementById('removingFromTheList').value.toUpperCase() + ' Is Not In The List.');
	}
}

function ChangingTheMouseToPointer(){
	var AddingToListButton = document.getElementById('button1');
	var RemovingFromTheListButton = document.getElementById('button2');
	AddingToListButton.style.cursor = "pointer";
	RemovingFromTheListButton.style.cursor = "pointer";
}
function ChangingTheMouseToGrabbing(){
	var AddingToListButton = document.getElementById('button1');
	var RemovingFromTheListButton = document.getElementById('button2');
	AddingToListButton.style.cursor = "grabbing";
	RemovingFromTheListButton.style.cursor = "grabbing";
}