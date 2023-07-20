const subscription = document.querySelector(".subscription__duration");

const showPlan = () => {

  subscription.addEventListener('click', (evt) => {
    const subsPlan = evt.target.closest('[data-id]');
    const activeButton = subscription.querySelector(".subscription__button--active");
    const currentPlan = document.querySelector(".subscription__plan--current");
    if (!subsPlan) {
      return;
    }
      if (!subsPlan.classList.contains("subscription__button--active")) {
        switch (subsPlan.dataset.id) {
          case "1": activeButton.classList.remove("subscription__button--active");
                    currentPlan.classList.remove("subscription__plan--current");
                    document.querySelector(".subscription__plan--one").classList.add("subscription__plan--current");
                    subsPlan.classList.add("subscription__button--active");
                    break;
          case "6": activeButton.classList.remove("subscription__button--active");
                    currentPlan.classList.remove("subscription__plan--current");
                    document.querySelector(".subscription__plan--six").classList.add("subscription__plan--current");
                    subsPlan.classList.add("subscription__button--active");
                    break;
          case "12": activeButton.classList.remove("subscription__button--active");
                    currentPlan.classList.remove("subscription__plan--current");
                    document.querySelector(".subscription__plan--twelve").classList.add("subscription__plan--current");
                    subsPlan.classList.add("subscription__button--active");
                    break;
          default: break;
        }
    }
  });
};
export {showPlan};
