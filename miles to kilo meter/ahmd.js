function converter(){
    let kms= document.getElementById("k").value;
  const factor= 1.60934;
  let Miles =kms *factor;
  document.getElementById("res").innerText ="The distance of "+kms+"Kms is equal to"+ Miles+"Miles";
 
  
}



