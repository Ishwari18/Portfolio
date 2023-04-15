const mailbtn = document.querySelector("#mail");
console.log(mailbtn);

function myFunction() {
  // Get the text field
  const copyText = "ishwarirele18@gmail.com";
  console.log("yesssssssss");

  // Copy the text inside the text field
  navigator.clipboard.writeText("ishwarirele18@gmail.com");
  mailbtn.classList.add("anime");
}
