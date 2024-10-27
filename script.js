window.addEventListener("load",buttons);
var gradenumber = ""
var sum = 0
var count = 0
var Average, gpa, grade;
var inputGrades
function buttons()
{	
	document.getElementById("btnsubmit").addEventListener("click",CheckInput);
}
function CheckInput()
{
	if(gradenumber == "")
	{
		NumberOfGrades()
	}
	else
	{
		grade = document.getElementById("inputGrades").value;
		GradeAverageAndGPA(gradenumber)
	}
}
function NumberOfGrades()
{
    inputGrades = document.getElementById("inputGrades")

	gradenumber = inputGrades.value;
	var check = parseFloat(gradenumber) % 1;
	if (gradenumber == "" || check !== 0 )
		{
			alert("Input The Correct Number Of Grades/Grade Value");
		}
	else
		{
			gradenumber = parseInt(gradenumber);
			inputGrades.value = null;
			inputGrades.focus();
			document.getElementById("labelNumberOfGrades").textContent = "Grades: ";
		}
}
function GradeAverageAndGPA(Number)
{

    inputGrades = document.getElementById("inputGrades")
	
	if(grade > 100 || grade < 0)
	{
	    alert("Input The Correct Number Of Grades/Grade Value"); 
		inputGrades.value = ""; 
		inputGrades.focus();
	}
	else
	{
		for(let i = 1; i <= Number; i++)
		{
			sum = sum + parseFloat(grade);
			inputGrades.value = "";
	    	inputGrades.focus()	
	    	break;
		}
		count = count + 1; 
		if(count == Number)
		{
			Average = sum/Number; 
			gpa = Average/25; 
		}
	}
	document.getElementById("labelgpa").textContent = gpa;
	document.getElementById("labelaverage_input").textContent = Average;
}
