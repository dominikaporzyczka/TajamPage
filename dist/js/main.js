(function () {
    const navBarTop = document.getElementById('nav-fixed'),
        navBar = document.querySelector('.nav-bar'),
        navBarItem = document.querySelectorAll('.nav-bar li a'),
        navToggleIcon = document.querySelector('.nav_toggler'),
        teamMembers = document.querySelectorAll('.team-member'),
        peoplesPhotos = document.querySelectorAll('.peoplesay_content__imgs img'),
        peoplesOpinions = document.querySelectorAll('.peoplesay_content__opinion');
        buttons = document.querySelectorAll('.btn');

    const idSet = ['header', 'about', 'expertise', 'team', 'works', 'peoplesay', 'contact'];

    /**
     * @description Gets coordinates of element
     * @param {Element} el - HTML element
     * @returns object with element position
     */
    function getOffset(el) {
        el = el.getBoundingClientRect();
        return {
            left: el.left + window.scrollX,
            top: el.top + window.scrollY
        }
    }

    /**
     * @description Scrolls to specific position
     * @param {Element} element - reference element
     * @param {Number} to - scroll position
     * @param {Number} duration - duration of animation
     */
    function scrollTo(element, to, duration) {
        if (duration <= 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(function () {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop == to) return;
            scrollTo(element, to, duration - 10);
        }, 10);
    }

    /**
     * @description Calls scrollTo function
     * @param {Element} el - HTML element
     */
    function callScrollTo(el) {
        const attribute = el.getAttribute('href'),
            element = document.querySelector(attribute),
            offset = getOffset(element);

        // Call scrollTo function
        scrollTo(document.documentElement, offset.top - 93, 500);
    }

    /**
     * @description Checks if element is visible
     * @param {Element} el - HTML element
     * @returns true or false (true if element is visible, false otherwise )
     */
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        // Partially visible elements return true:
        var isVisible = elemTop < 94 && (elemBottom - 90) >= 0;
        return isVisible;
    }

    // Add class active to visible element
    window.addEventListener('scroll', function () {
        for (let i = 0; i < idSet.length; i++) {
            const element = document.getElementById(idSet[i]);
            const isVisible = isScrolledIntoView(element);

            if (isVisible) {
                const aElem = 'a[href="#' + idSet[i] + '"]';
                const navItem = document.querySelector(aElem);
                const activeElem = document.querySelector('.nav-bar .nav-bar_active');

                if (activeElem !== null) {
                    activeElem.classList.remove('nav-bar_active');
                }

                navItem.classList.add('nav-bar_active');
            }
        }
    });

    // Remove class 'show-nav-bar' after select item
    for (let i = 0; i < navBarItem.length; i++) {
        navBarItem[i].addEventListener('click', function (e) {
            navBar.classList.remove('show-nav-bar');

            // Call scrollTo function
            callScrollTo(this);

            e.preventDefault();
        });
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (e) {
            callScrollTo(this);

            e.preventDefault();
        });
    }

    // Show nav bar after click toggler button
    navToggleIcon.addEventListener('click', function (e) {
        navBar.classList.toggle('show-nav-bar');

        e.preventDefault();
    });

    // Change color of nav's background during scrolling
    window.addEventListener('scroll', function () {
        const top = window.pageYOffset || document.documentElement.scrollTop;
        if (top > 100) {
            navBarTop.style.background = 'linear-gradient(rgba(76, 61, 114, 0.8), rgba(76, 61, 114, 0.8))';
        }
        else {
            navBarTop.style.background = 'transparent';
        }
    });

    // Add animations to team members photos
    for (let i = 0; i < teamMembers.length; i++) {
        const img = teamMembers[i].querySelector('img');

        teamMembers[i].addEventListener('mouseenter', function () {
            img.classList.add('flipInY');
        });

        teamMembers[i].addEventListener('mouseleave', function () {
            img.classList.remove('flipInY');
        });
    }

    // Change content for each person opinion
    for (let i = 0; i < peoplesPhotos.length; i++) {
        const animation = 'fadeInRight';

        peoplesPhotos[i].addEventListener('click', function () {
            for (let j = 0; j < peoplesPhotos.length; j++) {
                peoplesPhotos[j].classList.remove('active');
                peoplesOpinions[j].classList.remove(animation);
                peoplesOpinions[j].classList.remove('active');
            }

            this.classList.add('active');
            peoplesOpinions[i].classList.add(animation);
            peoplesOpinions[i].classList.add('active');
        });
    }
})();