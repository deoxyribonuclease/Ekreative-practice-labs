const testimonials = [
    {
        img: "user4.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
        name: "JAMES JOKOVIC",
        title: "IT CONSULTANT"
    },
    {
        img: "user1.png",
        text: "Пікселів не вистачило, сорі) Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
        name: "MAN JPG",
        title: "MARKETING MANAGER"
    },
    {
        img: "user2.png",
        text: "Пікселів не вистачило, сорі) Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
        name: "MAN PNG",
        title: "PROJECT MANAGER"
    },
    {
        img: "user3.png",
        text: "Пікселів не вистачило, сорі) Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.",
        name: "WOMAN AHAHA",
        title: "PROJECT MANAGER"
    }
];

let currentIndex = 0;

function changeSlide(index) {
    currentIndex = index;
    const testimonial = document.querySelector(".testimonial");
    const userImg = document.querySelector(".user-img");
    const userText = document.querySelector(".testimonial-text");
    const userName = document.querySelector(".user-name");
    const userTitle = document.querySelector(".user-title");

    testimonial.classList.remove("active");
    
    setTimeout(() => {
        userImg.src = "assets/users/" + testimonials[index].img;
        userText.textContent = testimonials[index].text;
        userName.textContent = testimonials[index].name;
        userTitle.textContent = testimonials[index].title;

        testimonial.classList.add("active");
    }, 300);

    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

changeSlide(0); 

const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        changeSlide(index); 
    });
});
