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
<P><strong>Name:</strong> <spam id="edit-name" class="editable"> ${name}</spam> </p>
<P><strong>email:</strong> <spam id="edit-email" class="editable">${email}</spam></p>
<P><strong>Phone Number:</strong><spam id="edit-phone" class="editable">${phone}</spam></p>

<h3>Education</h3>
<P id="edit-education" class="editable">${education}</p>


<h3>Experience</h3>
<P id="edit-experience" class="editable"=>${experience}</p>

<h3>Skills</h3>
<P id="edit-skill" class="editable">${skill}</p>
`

    const resumeoutputelement = document.getElementById(`resumeoutput`)
    if (resumeoutputelement) {
      resumeoutputelement.innerHTML = resumeoutput;
      makeEditable();
    } else {
      console.error(`The Resume Output Is Missing`)
    }

  }

})

function makeditable() {
  const editableelement = document.querySelectorAll(`.editable`)
  editableelement.forEach(element => {
    element.addEventListener(`click`, function () {
      const currentelement = element as HTMLElement;
      const currentvalue = currentelement.textContent || "";

      if (currentelement.tagName === "p" || currentelement.tagName === "SPAN") {
        const input = document.createElement(`input`)
        input.type = `text`
        input.value = currentvalue
        input.classList.add(`editing input`)

        input.addEventListener(`blur`, function () {
          currentelement.textContent = input.value;
          currentelement.style.display = `inline`
          input.remove()
        })
        currentelement.style.display = `none`;
        currentelement.parentNode?.insertBefore(input, currentelement)
        input.focus()
      }
    })
  })
}