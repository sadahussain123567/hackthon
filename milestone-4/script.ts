const form = document.getElementById("resume-form") as HTMLFormElement;
const resumedisplay = document.getElementById("resume-display");

if (form) {
    form.addEventListener("submit", function (event: Event) {
        event.preventDefault();

        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLInputElement).value;
        const experience = (document.getElementById("experience") as HTMLInputElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value;

        const resumehtml = `
            <h2><b>Editable Resume</b></h2>
            <h3>Personal information</h3>
            <p><b>Name:</b><span contenteditable="true">${name}</span></p>
            <p><b>Email:</b><span contenteditable="true">${email}</span></p>
            <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
            
            <h3>Education</h3>
            <p contenteditable="true">${education}</p>
            
            <h3>Experience</h3>
            <p contenteditable="true">${experience}</p>
            
            <h3>Skills</h3>
            <p contenteditable="true">${skills}</p>
        `;

        if (resumedisplay) {
            resumedisplay.innerHTML = resumehtml;
        } else {
            console.error("The Resume Display Element is missing");
        }
    });
} else {
    console.error("The form element is missing");
}

