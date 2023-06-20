function openMenu() {
    document.body.classList += " menu--open"
}


function closeMenu() {
    document.body.classList.remove("menu--open")
}


const dropDown = document.querySelectorAll(".drop");
const textNote = document.querySelectorAll(".text_note");

dropDown.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (textNote[index].style.display === "block") {
            textNote[index].style.display = "none";
        } else {
            textNote[index].style.display = "block";
        }
    })
})


dropDown.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (textNote[index].classList.contains("active")) {
        textNote[index].style.maxHeight = "0px";
        textNote[index].classList.remove("active");
      } else {
        textNote.forEach((note) => {
          note.style.maxHeight = "0px";
          note.classList.remove("active");
        });
  
        textNote[index].style.maxHeight = `${textNote[index].scrollHeight}px`;
        textNote[index].classList.add("active");
      }
    });
  });
