const form = document.querySelector("form");
const ratingContainer = document.querySelector("main");
const thankingContainer = document.querySelector(".container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const rating = document.querySelector("input[type= 'radio']:checked").value;
  const para = thankingContainer.querySelector(".thanks__rating");
  para.textContent = `You selected ${rating} out of 5`;
  ratingContainer.classList.add("hidden");
  thankingContainer.classList.remove("hidden");
});
