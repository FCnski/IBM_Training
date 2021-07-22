var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validate() {

        if (getElementById("principal") <= 0) {
        alert("Enter a positive number, please.")
        document.getElementById("principal").focus()
    }
}

function compute()
{
        if (getElementById("principal") <= 0) {
        alert("Enter a positive number, please.")
        document.getElementById("principal").focus()
    }
    getElementById("result").innerHTML="If you deposit "+principal+",\<br\> at an interest rate of "+rate+
+rate+"%\<br\>You will receive an amount of"+interest+",\<br\>in the year"+year+"\<br\>"

}
        