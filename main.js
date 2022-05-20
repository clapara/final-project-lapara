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

    hover.addEventListener("mouseout", function(h) {
        h.preventDefault();

        const left_image = h.target;
        left_image.classList.remove("hover");
        
    });
    hover.addEventListener("click", function(h) {
        h.preventDefault();

        const container = h.target.closest(".img");
        container.classList.toggle("big");
    });  

});
    


    
  



//* next step: click for the name - goal: when mouse hovers over an img, 'named' gets added to 'inner' >> name appears on image *//
/* const naming = document.querySelectorAll(".inner");

naming.forEach(function (named) { 
    named.addEventListener("mouseover", function (n) {
        n.preventDefault();
        const add_name = n.target;
        add_name.classList.add("named"); //* want to add 'named' to 'inner' 
    });
    
}); */


//* ok final step: when I click on an image, make it as large as the section 'animals' & show text about the animal

/* const full_size = document.querySelectorAll(".img")

full_size.forEach(function(big) {
    big.addEventListener("click", function(f) {
        f.preventDefault();
        const clicked_image = f.target;
        clicked_image.classList.add("big"); //* make 'big' a class in CSS/HTML that makes the pic bigger + text OR just show new pic??? 

    })
}
) */ 

//* ok, bringing up text BELOW filter 

/* const choose = document.querySelectorAll(".img")

choose.forEach(function (click) {
    click.addEventListener("click", function(c) {
        c.preventDefault();
        const clicked_image = 
        const show_text = c.target;
        const show_text = clicked_image.querySelector(".text"); //* I DON'T KNOW WHAT TO DO WITH THIS
        show_text.classList.add("clicked");


    })

}) */








    
    

    




