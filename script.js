
    const header = document.querySelector(".header");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll(".nav-link");
    const hamburgerButton = document.querySelector("#hamburger-button");
    const form = document.querySelector("form");
    const submitButton = document.querySelector(".submit-button");
    const invisibleElements = document.querySelectorAll(".invisible");

    const secondaryClr = "#081019";
    const darkBoxShadow = " 0px 0px 6px black";
    

    var isOpen = false;

  

    
    window.addEventListener("scroll", function () {
        

        if (window.pageYOffset >= 100) {
            header.style.backgroundColor = secondaryClr; 

            nav.style.backgroundColor = secondaryClr;
         

        }
        else {
            header.style.backgroundColor = "transparent";
            
            nav.style.backgroundColor = "transparent";
            
        }
    })
    /*
    window.addEventListener("scroll", () => {

        console.log(window.pageYOffset);

        if (window.pageYOffset >= 100 && isOpen) {
            header.style.backgroundColor = secondaryClr;
            nav.style.backgroundColor = secondaryClr;
            nav.style.boxShadow = darkBoxShadow;
        }

        else if (window.pageYOffset >= 100 && !isOpen) {
            header.style.backgroundColor = secondaryClr;
            header.style.boxShadow = darkBoxShadow;

        }
        else if  {
            header.style.backgroundColor = "none";
            header.style.boxShadow = "none";
            nav.style.backgroundColor = "none";
            nav.style.boxShadow = "none";
        }
    })*/



    hamburgerButton.addEventListener("click", function () {
        // Toggle the 'nav-dropdown-appear' class on the nav element
        nav.classList.toggle("nav-dropdown-appear");
    });





    hamburgerButton.addEventListener("click", () => {
        if (isOpen) {
            closeMenu(nav, hamburgerButton);
            hamburgerButton.firstChild.innerText = "menu";
            isOpen = !isOpen;
        }
        else {
            openMenu(nav, hamburgerButton);
            hamburgerButton.firstChild.innerText = "close";
            isOpen = !isOpen;
        }
    })

    const openMenu = (list,button) => {
        list.classList.add("nav-dropdown-appear");
    }

    const closeMenu = (list, button) => {
        list.classList.remove("nav-dropdown-appear");
    }


/*
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                block: "end",
                behavior: 'smooth',
                inline: "nearest"
            });
           
        });
        window.scrollBy(0, -200);
     
        closeMenu(nav, hamburgerButton);
    });*/
    
    /*nav.addEventListener("click", (e) => {
        console.log(e.target.className);
        if (e.target.className == "nav-link") {
            e.preventDefault();
            window.scrollBy(0, -200);
        }
    });*/

  /*  nav.addEventListener("click", (e) => {
        console.log(e.target.className);
        if (e.target.className == "nav-link") {
            e.target.scrollIntoView({
                block: "start",
                behavior: 'smooth',
                inline: "nearest"
            });
            window.scrollBy(0, -200);
        }
    })*/

    nav.addEventListener("click", (e) => {
        if (e.target.className == "nav-link") {
            let section = document.getElementById(e.target.getAttribute('name'));
            /*section.offsetTop-180*/ 
            let sectionTop = section.offsetTop - 175;
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth',
            });
            /*window.scrollTo(0, section.offsetTop);*/
        }
    })



    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        form.submit();
        //window.confirm("Success! " + "Your message has been sent.");
    })




    let observerOptions = {
    
        rootMargin: "0px",
        threshold: 1.0,
    };

    let callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("invisible");
                console.log("class removed");
            }
        });
    };

    let observer = new IntersectionObserver(callback, observerOptions);

    invisibleElements.forEach((e) => {
        observer.observe(e);
    });