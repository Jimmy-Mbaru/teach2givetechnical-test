const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-btn");
const cancelBtn = document.getElementById("cancel-btn");
const submitBtn = document.getElementById("submit-btn");
const ratingButtons = document.getElementsByClassName("rating-btn");

let selectedRating = null;

// Open Modal
openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// Close Modal
const closeModal = () => {
  modal.classList.add("hidden");
  clearSelection();
};

closeModalBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);

// Click outside modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Handle Rating Selection
Array.from(ratingButtons).forEach((btn) => {
  btn.addEventListener("click", () => {
    clearSelection();
    btn.classList.add("selected");
    selectedRating = btn.dataset.rating;
  });
});

// Submit Feedback
submitBtn.addEventListener("click", () => {
  if (selectedRating) {
    alert(`You selected a rating of ${selectedRating}`);
    closeModal();
  } else {
    alert("Please select a rating before submitting.");
  }
});

// Reset Selection
function clearSelection() {
  Array.from(ratingButtons).forEach((btn) => {
    btn.classList.remove("selected");
  });
  selectedRating = null;
}
