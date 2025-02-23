let index = 0;
const images = document.querySelectorAll(".gallery img");
function showImage(idx) {
    images.forEach(img => img.style.transform = `translateX(-${idx * 320}px)`);
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        index = (index + 1) % images.length;
        showImage(index);
    }
    if (event.key === "ArrowLeft") {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    }
});

   // 2
   const input = document.getElementById("input-number");
   const createBtn = document.getElementById("create-btn");
   const destroyBtn = document.getElementById("destroy-btn");
   const boxesContainer = document.getElementById("boxes");
   function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function createBoxes(amount) {
    boxesContainer.innerHTML = "";
    let size = 30;
    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomColor();
        box.textContent = i + 1;
        boxesContainer.appendChild(box);
        size += 10;
    }
    function destroyBoxes() {
        boxesContainer.innerHTML = "";
    }

    createBtn.addEventListener("click", () => {
        const amount = Number(input.value);
        if (amount > 0) {
            createBoxes(amount);
        }
    })
    destroyBtn.addEventListener("click", destroyBoxes);}
