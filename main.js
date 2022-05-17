//* first, the filter *//

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

//* now for the hover event listener - goal: when mouse hovers over an image in the collage, it gets opaque & text with animal name shows up *//

const images = document.querySelectorAll(".img");

images.forEach(function (hover) {
    hover.addEventListener("mouseover", function (h) {
        h.preventDefault();
        const hovered_img = h.target;
        hovered_img.classList.add("hover");
    });

});
    

const mouse_out= document.querySelectorAll(".img");

mouse_out.forEach(function (full_opacity) {
    full_opacity.addEventListener("mouseout", function(h) {
        h.preventDefault();

        const left_image = h.target;
        left_image.classList.remove("hover");
        
    });
});


//* next step: hover for the name - goal: when mouse hovers over an img, 'named' gets added to 'inner' >> name appears on image *//

/* const naming = document.querySelectorAll(".inner");

naming.forEach(function (named) { 
    named.addEventListener("mouseover", function (n) {
        n.preventDefault();
        const add_name = n.target;
        add_name.classList.add("named"); //* want to add 'named' to 'inner' 
    });
    
}); */


//* ok final step: when I click on an image, make it as large as the section 'animals' & show text about the animal

/* const full_size = document.querySelectorAll(".img");

choose.addEventListener("click", function (f) {


}); */ 



    
    

    




