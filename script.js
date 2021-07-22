// i had to make a few workarounds, and since i dont know anything about nothing, it gave me a headache, i shall sleep now.
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

        if (principal <= 0 || principal == '') {

        alert("Enter a positive number, please.")
        document.getElementById("principal").focus()
    } else {

        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\> at an interest rate of "+rate+
        "%\<br\> You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    }

}
        
