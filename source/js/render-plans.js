import { userPlans } from "./mocks.js";

const subscription = document.querySelector(".subscription__duration");
const subsPlan = document.querySelector(".subscription__plan");
const newPlan = subsPlan.querySelector(".card");
const planFragment = document.createDocumentFragment();

const renderCards = (plan) => {
  console.log("start render");
  const activeButton = subscription.querySelector(".subscription__button--active");

  plan.forEach(({ id, name, schedule, price, src }) => {
    const planCard = newPlan.cloneNode(true);
    planCard.querySelector(".card__title").textContent = name;
    planCard.querySelector(".card__schedule").textContent = schedule;
    planCard.querySelector(".card__price").innerHTML = `<span>${price}</span><span>${price}</span><span>₽</span>`;
    planCard.querySelector(".card__button").href = src;
    planCard.dataset.cardId = id;
    planFragment.appendChild(planCard);
  });
  activeButton.classList.remove("subscription__button--active");
  subsPlan.innerHTML = "";
  subsPlan.appendChild(planFragment);
}

const renderPlan = () => {
  subscription.addEventListener('click', (evt) => {
    const subsPlan = evt.target.closest('[data-id]');
    if (!subsPlan) {
      return;
    }
    for (let key in userPlans) {
      if (key === subsPlan.dataset.id && !subsPlan.classList.contains("subscription__button--active")) {
        renderCards(userPlans[key]);
        subsPlan.classList.add("subscription__button--active");
      }
    }
  });
};
export {renderPlan};

