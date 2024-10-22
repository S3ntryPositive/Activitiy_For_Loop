window.addEventListener("load", addListener);

var Grade_Input, Sum, Average, GPA;

function addListener()
{
    document.getElementById("btnsubmit").addEventListener("click", CheckInput);
}

function CheckInput()
{
    var Grade_Input = document.getElementById("input_number_grades").value;
    if(Grade_Input = "")
    {
        alert("Enter Input");
    }

    else
    {
        Calculate();
    }
}

function Calculate()
{
    var Grade_Input = document.getElementById("input_number_grades").value;
    var i = 0;
    while(i<=Grade_Input)
    {
        document.getElementById("lblgrades").textContent = "Enter Each Grade And Submit"
        var Sum = Sum + Grade_Input;
        i++;
    }
    document.getElementById("lbl_grade_average").textContent = Sum
}