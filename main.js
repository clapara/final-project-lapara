const select = document.querySelector(".filter")

select.addEventListener("change", function(e) {
    const chosen_animal = e.target.value;
    const currently_visible = document.querySelectorAll(".img.active");
    const make_visible = document.querySelectorAll(`.img.${chosen_animal}`);

currently_visible.forEach(function(animals) {
    animals.classList.remove("active");

});

make_visible.forEach(function(animals) {
    animals.classList.add("active");
});

});