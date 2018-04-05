// Add class 'active' to active nav item
const addActiveClassToNavElement = (function () {
    const navBarItem = document.querySelectorAll('.nav-bar li a');
    const navBar = document.querySelector('.nav-bar');
        
    for (let i = 0; i < navBarItem.length; i++) {
        navBarItem[i].addEventListener('click', function () {
            document.querySelector('.nav-bar .active').classList.remove('active');
            this.classList.add('active');
            navBar.classList.remove('show-nav-bar');
        });
    }
})();

// Change color of nav's background during scrolling
const navScroll = (function () {
    const navBarTop = document.getElementById('nav-fixed');

    window.addEventListener('scroll', function () {
        console.log(document.body.scrollTop);
        const top = window.pageYOffset || document.documentElement.scrollTop;
        if (top > 100) {
            navBarTop.style.background = 'linear-gradient(rgba(76, 61, 114, 0.8), rgba(76, 61, 114, 0.8))';
        }
        else {
            navBarTop.style.background = 'transparent';
        }
    });
})();

const toggleNav = (function() {
    const navToggleIcon = document.querySelector('.nav_toggler');

    navToggleIcon.addEventListener('click', function(e) {
        const navBar = document.querySelector('.nav-bar');
        navBar.classList.toggle('show-nav-bar');

        e.preventDefault();
    });
})();