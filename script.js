const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");

let scrollPos = 0;

window.addEventListener("scroll", () => {
  const newScrollPos = window.scrollY;

  if (newScrollPos > scrollPos) {
    // Scrolling down
    div1.style.transform = `translateY(-${newScrollPos}px)`;
    div2.style.transform = `translateY(${110 - newScrollPos}px)`;
  } else {
    // Scrolling up
    div1.style.transform = `translateY(-${newScrollPos}px)`;
    div2.style.transform = `translateY(${110 - newScrollPos}px)`;
  }

  scrollPos = newScrollPos;
});
