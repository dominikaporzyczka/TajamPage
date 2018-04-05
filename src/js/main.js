(function() {
    const navBarTop = document.getElementById('nav-fixed'),
        navBar = document.querySelector('.nav-bar'),
        navBarItem = document.querySelectorAll('.nav-bar li a'),
        navToggleIcon = document.querySelector('.nav_toggler');
        
    // Add class 'active' to active nav item
    for (let i = 0; i < navBarItem.length; i++) {
        navBarItem[i].addEventListener('click', function () {
            document.querySelector('.nav-bar .active').classList.remove('active');
            this.classList.add('active');
            navBar.classList.remove('show-nav-bar');
        });
    }

    // Show nav bar after click toggler button
    navToggleIcon.addEventListener('click', function(e) {
        navBar.classList.toggle('show-nav-bar');

        e.preventDefault();
    });

    // Change color of nav's background during scrolling
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