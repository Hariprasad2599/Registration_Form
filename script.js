document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault();

        var firstName = document.querySelector('input[name="firstName"]').value;
        var middleName = document.querySelector('input[name="middleName"]').value;
        

        if (validateForm(firstName, middleName)) {
            
            alert("Form submitted successfully!");

            
            document.getElementById("registrationForm").reset();
        } else {
            alert("Please fill in all required fields.");
        }
    });

    function validateForm(firstName, middleName) {
        return firstName.trim() !== "" && middleName.trim() !== "";
    }
});
