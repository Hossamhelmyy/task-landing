const profiles = document.querySelectorAll(".profile");
const rate = document.querySelector(".rate_1");

profiles.forEach((profile, i) => {
    profile.addEventListener("click", () => {
        // console.log(i);
        document
            .querySelector(`.rate_${i + 1}`)
            .classList.toggle("show");
    });
});