document.getElementById("output").style.visibility="hidden";

document.getElementById("lbsInput").addEventListener('input',(e)=>{
    document.getElementById("output").style.visibility="visible";
    let lbs = e.target.value;
    document.getElementById("gramsoutput").innerHTML=lbs/0.0022046;
    document.getElementById("kgoutput").innerHTML= 0.45359237*lbs;
    document.getElementById("ounceoutput").innerHTML=16*lbs;
    
})