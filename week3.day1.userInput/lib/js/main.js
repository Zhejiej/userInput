let titleInput = document.getElementById("title_input");
let mainTitle = document.getElementById("main_title");
let nounInput = document.getElementById("noun");
let verbInput = document.getElementById("verb");
let adjectiveInput = document.getElementById("adjective");
let submitButton = document.getElementById("submit_button");
let formContainer = document.querySelector(".form_container");
let storyResult = document.getElementById("story_result");

titleInput.addEventListener("input", function () {
    mainTitle.textContent = titleInput.value;
  });

submitButton.onclick = function (event) {
    event.preventDefault();

    let noun = nounInput.value;
    let verb = verbInput.value;
    let adjective = adjectiveInput.value;

    if (noun === "" || verb === "" || adjective=== "") {
    alert("Please fill in all fields");
    } else {
    let storyText = `Last night I ate a ${noun}, and today I just had to ${verb}. What a ${adjective} day!`;

    formContainer.style.display = "none";
    storyResult.textContent = storyText;
    }
};
