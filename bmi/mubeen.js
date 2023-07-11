function bmi() {
    let height = document.getElementById("H").value;
    let weight = document.getElementById("W").value;
    const cal = weight / (height * height);
    document.getElementById("res").innerHTML = "Your bmi is " + cal;


}

