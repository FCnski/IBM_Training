var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute()
{
    p = document.getElementById("principal").value;
    getElementById("result").innerHTML="If you deposit 1000000"+principal+",\<br\> at an interest rate of "+rate+
+rate+"%\<br\>You will receive an amount of"+amount+",\<br\>in the year"+year+"\<br\>"
    if (getElementById("principal") <= 0) {
        alert("Enter a positive number, please.")
        document.getElementById("principal").focus()
    }
}
        