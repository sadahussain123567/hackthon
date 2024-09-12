var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Type Assertion
    var profilepicture = document.getElementById('profilepicture');
    var nameelement = document.getElementById('name');
    var emailelement = document.getElementById('email');
    var phoneelement = document.getElementById('phone');
    var educationelement = document.getElementById('education');
    var experienceelement = document.getElementById('experience');
    var skillselement = document.getElementById('skills');
    if (profilepicture && nameelement && emailelement && phoneelement && experienceelement && skillselement && educationelement) {
        var name_1 = nameelement.value;
        var email = emailelement.value;
        var phone = phoneelement.value;
        var education = educationelement.value;
        var experience = experienceelement.value;
        var skill = skillselement.value;
        // Picture element
        var profilepicturefile = (_a = profilepicture.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile) : '';
        // Create resume output
        var resumeoutput = "\n      <h2>Resume</h2>\n      ".concat(profilepictureURL ? "<img src=\"".concat(profilepictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n      <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n      <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n      <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n\n      <h3>Education</h3>\n      <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n      <h3>Experience</h3>\n      <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n      <h3>Skills</h3>\n      <p id=\"edit-skill\" class=\"editable\">").concat(skill, "</p>\n    ");
        var resumeoutputelement = document.getElementById('resumeoutput');
        if (resumeoutputelement) {
            resumeoutputelement.innerHTML = resumeoutput;
            makeEditable();
        }
        else {
            console.error('The Resume Output Is Missing');
        }
    }
});
function makeEditable() {
    var editableelement = document.querySelectorAll('.editable');
    editableelement.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentelement = element;
            var currentvalue = currentelement.textContent || '';
            if (currentelement.tagName === 'P' || currentelement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentvalue;
                input_1.classList.add('editing', 'input');
                input_1.addEventListener('blur', function () {
                    currentelement.textContent = input_1.value;
                    currentelement.style.display = 'inline';
                    input_1.remove();
                });
                currentelement.style.display = 'none';
                (_a = currentelement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentelement);
                input_1.focus();
            }
        });
    });
}
