(function () {
    const navBarTop = document.getElementById('nav-fixed'),
        navBar = document.querySelector('.nav-bar'),
        navBarItem = document.querySelectorAll('.nav-bar li a'),
        navToggleIcon = document.querySelector('.nav_toggler');
        teamMembers = document.querySelectorAll('.team-member');

    // Add class 'active' to active nav item
    for (let i = 0; i < navBarItem.length; i++) {
        navBarItem[i].addEventListener('click', function () {
            document.querySelector('.nav-bar .nav-bar_active').classList.remove('nav-bar_active');
            this.classList.add('nav-bar_active');
            navBar.classList.remove('show-nav-bar');
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

    for (let i = 0; i < teamMembers.length; i++) {
        const img = teamMembers[i].querySelector('img');

        teamMembers[i].addEventListener('mouseenter', function() { 
            img.classList.add('flipInY');
        });

        teamMembers[i].addEventListener('mouseleave', function() {
            img.classList.remove('flipInY');
        });
    }
})();