const textArea = document.querySelector("#msg");

const joinRoomPopupOpener = document.querySelector(".join__room");
const joinRoomPopup = document.querySelector(".popup");

// Detect if text has overflowed from text area x-axis
textArea.addEventListener("input", (e) => {
  e.preventDefault();
  const target = e.target;
  const textAreaWrapper = document.querySelector(".textarea");
  if (textArea.offsetHeight < 145 && target.value !== "") {
    textAreaWrapper.style.height = `${target.scrollHeight}px`;
  }
  if (target.value === "") {
    textAreaWrapper.style.height = "40px";
  }
});

// Popup Open for room join
joinRoomPopupOpener.addEventListener("click", (e) =>
  joinRoomPopup.classList.toggle("d-none")
);
// Close Room join popup
document
  .querySelector(".popup-close-btn")
  .addEventListener("click", () => joinRoomPopup.classList.add("d-none"));

// Activate online user for chating
const allActiveUsers = document.querySelectorAll(".users > li");
allActiveUsers.forEach((user) => {
  user.addEventListener("click", (e) => {
    //   removing acitve class form every element.
    allActiveUsers.forEach((user) => user.classList.remove("active"));
    e.target.classList.add("active");
  });
});
