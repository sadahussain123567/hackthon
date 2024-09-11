//Listing Element 
document.getElementById(`resumeform`)?.addEventListener(`submit`, function (event) {
  event.preventDefault();

  //Type Assertion
  const nameelement = document.getElementById(`name`) as HTMLInputElement;
  const emailelement = document.getElementById(`email`) as HTMLInputElement;
  const phoneelement = document.getElementById(`phone`) as HTMLInputElement;
  const educationelement = document.getElementById(`education`) as HTMLInputElement;
  const experienceelement = document.getElementById(`experience`) as HTMLInputElement;
  const skillselement = document.getElementById(`skills`) as HTMLInputElement;

  if (nameelement && emailelement && phoneelement && experienceelement && skillselement && educationelement) {
    const name = nameelement.value;
    const email = emailelement.value;
    const phone = phoneelement.value;
    const education = educationelement.value;
    const experience = experienceelement.value;
    const skill = skillselement.value;

    //create resume output
    const resumeoutput = `
<h2>Resume</h2>
<P><strong>Name:</strong> ${name} </p>
<P><strong>email:</strong>${email}</p>
<P><strong>Phone Number:</strong>${phone}</p>

<h3>Education</h3>
<P>${education}</p>

<h3>Experience</h3>
<P>${experience}</p>
<h3>Skills</h3>
<P>${skill}</p>
`

    const resumeoutputelement = document.getElementById(`resumeoutput`)
    if (resumeoutputelement) {
      resumeoutputelement.innerHTML = resumeoutput
    } else {
      console.error(`The Resume Output Is Missing`)
    }

  }

})
