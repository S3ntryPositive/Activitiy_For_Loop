window.addEventListener("load", addListener);

var input, grade, Average, gpa;
var sum = 0;

function addListener()
{
	document.getElementById("btnSubmit").addEventListener("click", CheckInput);
}

function CheckInput()
{
	input = document.getElementById("input_grades").value;
	if(input == "")
		{
			alert("No Input Found");
		}
	else
	{
		Average(input)
	}
}

function Average(amount)
{
	document.getElementById("Label_Amount_Grades").textContent = "Grades"
	document.getElementById("input_grades").value = null;
	document.getElementById("input_grades").focus()
	for(i = 1; i<=amount; i++)
		{
			sum = sum 
		}
}
