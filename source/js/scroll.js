const link = document.querySelector('.header__button');

const  scrollPage = () => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    const target = document.querySelector(id);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
  });
  });
};
export default scrollPage;
