const basket1Count = document.querySelector(".basket-1 span");
const basket2Count = document.querySelector(".basket-2 span");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let totalApple = 10;
let SecondAppleCount = 0;
let FirstAppleCount = totalApple - SecondAppleCount;

basket1Count.innerText = FirstAppleCount;
basket2Count.innerText = SecondAppleCount;

rightArrow.addEventListener("click", () => {
  if (FirstAppleCount > 0) {
    FirstAppleCount--;
    basket1Count.innerText = FirstAppleCount;
    SecondAppleCount++;
    basket2Count.innerText = SecondAppleCount;
  }
});
leftArrow.addEventListener("click", () => {
  if (SecondAppleCount > 0) {
    FirstAppleCount++;
    basket1Count.innerText = FirstAppleCount;
    SecondAppleCount--;
    basket2Count.innerText = SecondAppleCount;
  }
});
