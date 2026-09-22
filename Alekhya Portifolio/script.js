const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    alert(
        "Thank you for contacting me!\n\n" +
        "Name : " + name + "\n" +
        "Email : " + email + "\n\n" +
        "I will get back to you soon."
    );

    form.reset()

});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    sections.forEach(function (section) {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {

            section.classList.add("show");

        }

    });

});

window.dispatchEvent(new Event("scroll"));