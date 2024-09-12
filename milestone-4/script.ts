document.getElementById('resumeform')?.addEventListener('submit', function (event) {
  event.preventDefault();

  // Type Assertion
  const profilepicture = document.getElementById('profilepicture') as HTMLInputElement;
  const nameelement = document.getElementById('name') as HTMLInputElement;
  const emailelement = document.getElementById('email') as HTMLInputElement;
  const phoneelement = document.getElementById('phone') as HTMLInputElement;
  const educationelement = document.getElementById('education') as HTMLInputElement;
  const experienceelement = document.getElementById('experience') as HTMLInputElement;
  const skillselement = document.getElementById('skills') as HTMLInputElement;

  if (profilepicture && nameelement && emailelement && phoneelement && experienceelement && skillselement && educationelement) {
    const name = nameelement.value;
    const email = emailelement.value;
    const phone = phoneelement.value;
    const education = educationelement.value;
    const experience = experienceelement.value;
    const skill = skillselement.value;

    // Picture element
    const profilepicturefile = profilepicture.files?.[0];
    const profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile) : '';

    // Create resume output
    const resumeoutput = `
      <h2>Resume</h2>
      ${profilepictureURL ? `<img src="${profilepictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
      <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
      <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
      <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable">${phone}</span></p>

      <h3>Education</h3>
      <p id="edit-education" class="editable">${education}</p>

      <h3>Experience</h3>
      <p id="edit-experience" class="editable">${experience}</p>

      <h3>Skills</h3>
      <p id="edit-skill" class="editable">${skill}</p>
    `;

    const resumeoutputelement = document.getElementById('resumeoutput');
    if (resumeoutputelement) {
      resumeoutputelement.innerHTML = resumeoutput;
      makeEditable();
    } else {
      console.error('The Resume Output Is Missing');
    }
  }
});

function makeEditable() {
  const editableelement = document.querySelectorAll('.editable');
  editableelement.forEach(element => {
    element.addEventListener('click', function () {
      const currentelement = element as HTMLElement;
      const currentvalue = currentelement.textContent || '';

      if (currentelement.tagName === 'P' || currentelement.tagName === 'SPAN') {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentvalue;
        input.classList.add('editing', 'input');

        input.addEventListener('blur', function () {
          currentelement.textContent = input.value;
          currentelement.style.display = 'inline';
          input.remove();
        });
        currentelement.style.display = 'none';
        currentelement.parentNode?.insertBefore(input, currentelement);
        input.focus();
      }
    });
  });
}
