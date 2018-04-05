// add class 'active' to active nav item
const addActiveClassToNavElement = (function () {
    const navBarItem = document.querySelectorAll('.nav-bar li a');

    for (let i = 0; i < navBarItem.length; i++) {
        navBarItem[i].addEventListener('click', function () {
            document.querySelector('.nav-bar .active').classList.remove('active');
            this.classList.add('active');
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
            navBarTop.style.background = 'linear-gradient(rgba(76, 61, 114, 0.7), rgba(76, 61, 114, 0.7))';
        }
        else {
            navBarTop.style.background = 'transparent';
        }
    });
})();
