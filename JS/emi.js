 var p,n,r;
 var emi;
   
function getLoanAmt()
{
    p=parseFloat(document.getElementById("vol1").value);
    document.getElementById("lmt").innerHTML="Rs."+p;
    document.getElementById("pam").innerHTML="Rs."+p;
    var roi=r/12/100;
    emi=(p*roi*(1+roi)^n)/[(1+roi)^n-1];
    document.getElementById("em").innerHTML="Rs."+emi;
}
function getyears()
{
    n=parseFloat(document.getElementById("vol2").value);
    document.getElementById("yr").innerHTML=n+" yrs";
    var roi=r/12/100;
    emi=(p*roi*(1+roi)^n)/[(1+roi)^n-1];
    document.getElementById("em").innerHTML="Rs."+emi;
}
function getinterest()
{
   
    r=parseFloat(document.getElementById("vol3").value);
    document.getElementById("ir").innerHTML=r+" %";
    var roi=r/12/100;
    emi=(p*roi*(1+roi)^n)/[(1+roi)^n-1];
    document.getElementById("em").innerHTML="Rs."+emi;
    var intr =p*(((1+roi)^n)-1);
    document.getElementById("pip").innerHTML="Rs."+(((p*r*n)/100)+p);
    document.getElementById("pia").innerHTML="Rs."+((p*r*n)/100);
}
 