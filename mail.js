const formEl = document.querySelector("form");

// console.log(formEl, listEl);
formEl.addEventListener("submit", handleSubmit);

// working with checkboxes was completely new to me and i had to do a little research.
function handleSubmit(event) {
  console.log(event.target);
  event.preventDefault();

  console.dir(event.target);
  const nameInput = event.target.name.value;
  const mailInput = event.target.mail.value;
  const socInput = event.target.soc.checked;
  const artInput = event.target.art.checked;
  const pubInput = event.target.pub.checked;
  const webDevInput = event.target.webdev.checked;
  if (nameInput !== "" || mailInput !== "") {
  console.log(nameInput, mailInput, socInput, artInput, pubInput, webDevInput);
  }
  else {
    const para = document.createElement("p");
    para.innerText = "Please complete all the fields!";
    formEl.append(para);
    para.style.color = "red";
  }
  event.target.reset();
}