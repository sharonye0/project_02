const progressBar = document.querySelector(".progress");

const num = document.querySelectorAll(".num");
const nums = Array.from(num);

const prev = document.querySelector(".btn-prev");
const next = document.querySelector(".btn-next");

const nextProgress = function (index, className) {
  progressBar.classList.add(className);
  setTimeout(function () {
    nums[index].classList.add("active");
  }, 550);
};

const prevProgress = function (index, className) {
  progressBar.classList.remove(className);
  nums[index].classList.remove("active");
};

let currentActive = 1;

next.addEventListener("click", function () {
  currentActive++;
  console.log(currentActive);

  if (currentActive === 2) {
    nextProgress(1, "progress-two");
    prev.disabled = false;
  } else if (currentActive === 3) {
    nextProgress(2, "progress-three");
  } else if (currentActive === 4) {
    nextProgress(3, "progress-four");
    next.disabled = true;
  }
});

prev.addEventListener("click", function () {
  if (!(currentActive <= 1)) currentActive--;

  if (currentActive === 3) {
    prevProgress(3, "progress-four");
    next.disabled = false;
  } else if (currentActive === 2) {
    prevProgress(2, "progress-three");
  } else if (currentActive === 1) {
    prevProgress(1, "progress-two");
    prev.disabled = true;
  }
});
