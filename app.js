const questions = document.querySelectorAll(".question");
const responses = document.querySelectorAll(".response");
const plusButtons = document.querySelectorAll(".plus-button");
const minusButtons = document.querySelectorAll(".minus-button");

questions.forEach((question, index) => {
  question.addEventListener("click", (event) => {
    // Toggle the 'hidden' class for the corresponding paragraph
    responses[index].classList.toggle("hidden");
    plusButtons[index].classList.toggle("hidden");
    minusButtons[index].classList.toggle("hidden");

    // Close other open paragraphs
    responses.forEach((response, i) => {
      if (i !== index) {
        response.classList.add("hidden");
      }
    });
    plusButtons.forEach((plusButton, i) => {
      if (i !== index) {
        plusButton.classList.remove("hidden");
      }
    });
    minusButtons.forEach((minusButton, i) => {
      if (i !== index) {
        minusButton.classList.add("hidden");
      }
    });
  });
});
