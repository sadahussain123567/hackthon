const buttonss = document.getElementById(`toggle-skills`) as HTMLButtonElement
const skillsss = document.getElementById(`skills`) as HTMLElement

buttonss.addEventListener(`click`, () => {
  if (skillsss.style.display === `none`) {
    skillsss.style.display = `block`
  } else {
    skillsss.style.display = `none`
  }
});