function displayInfo() {

    var firstName = document.getElementById("firstName").value;
    if (firstName == "")
    {
        alert("First name must be entered");
        return false;
    }

    var lastName = document.getElementById("lastName").value;
    if (lastName == "") {
        alert("Last name must be entered");
        return false;
    }

    var age = document.getElementById("age").value;
    if (age == "") {
        alert("Last name must be entered");
        return false;
    }

    var summary = firstName + " " + lastName + " is " + age + " years old.";

    document.getElementById("summary").innerText = summary;

    console.log(summary.toString());

    return false;
}