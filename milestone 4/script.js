//Get references to the form and display area
var form = document.getElementById("resume-form");
var resume_display_element = document.getElementById("resume-display");
//Handle Form Submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload
    //Collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //Generate Resume content Dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p><b>Education:</b> ").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p><b>Experience:</b> ").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p><b>Skills:</b> ").concat(skills, "</p>\n    ");
    //Display generated resume
    if (resume_display_element) {
        resume_display_element.innerHTML = resumeHTML;
    }
    else {
        console.error("Resume Display Element not found.");
    }
});
