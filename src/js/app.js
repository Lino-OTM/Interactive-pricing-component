const pageViews = document.querySelector(".pricing-wrapper__pageviews-amount"),
  price         = document.querySelector(".pricing-wrapper__price"),
  rangeSlider   = document.querySelector(".pricing-wrapper__range-input"),
  monthlyInput  = document.querySelector(".monthly-billing-wrapper__input");

let pageViewsAmount = ["10K", "50K", "100K", "500K", "1M"];
let pageViewsPrice = [8, 12, 16, 24, 36];
let isYearly = false;
// I could have used a object ex: [ { views: xxx , price: $$ , bar-percentage: xxx}]

rangeSlider.addEventListener("input", (e) => {
  // progress bar movement.
  rangeSlider.style.backgroundSize = `${e.target.valueAsNumber * 25}% 100%`;
  // pageviews amount change
  pageViews.innerHTML = pageViewsAmount[rangeSlider.value];
  // price change
  updateValues();
});

// Apply discount
monthlyInput.addEventListener("change", () => {
  if (isYearly == false) {
    isYearly = true;
  } else {
    isYearly = false;
  }
  updateValues();
});

// Apply values / with and without discount.
const updateValues = () => {
  if (isYearly) {
    price.innerHTML = pageViewsPrice[rangeSlider.value] * 0.75;
  } else {
    price.innerHTML = pageViewsPrice[rangeSlider.value];
  }
};
