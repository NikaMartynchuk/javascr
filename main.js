document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.querySelector("[data-action='open-modal']");
    const closeModalBtn = document.querySelector("[data-action='close-modal']");
    const backdrop = document.querySelector(".backdrop");
    const body = document.body;

    openModalBtn.addEventListener("click", function () {
        body.classList.add("show-modal");
    });

    closeModalBtn.addEventListener("click", function () {
        body.classList.remove("show-modal");
    });

    backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) {
            body.classList.remove("show-modal");
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            body.classList.remove("show-modal");
        }
    });
});


// 3
document.querySelectorAll('input[name="color"]').forEach(input => {
    input.addEventListener("change", function () {
        document.body.style.backgroundColor = this.value;
    });
});


// 4
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function () {
    nameOutput.textContent = this.value.trim() || "Незнайомець";
});


// 5
const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function () {
    const expectedLength = Number(this.dataset.length);
    if (this.value.length === expectedLength) {
        this.classList.add("valid");
        this.classList.remove("invalid");
    } else {
        this.classList.add("invalid");
        this.classList.remove("valid");
    }
});


// 6
const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSizeControl.addEventListener("input", function () {
    text.style.fontSize = this.value + "px";
});