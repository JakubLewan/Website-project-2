
// navigation shadowing at x px
document.addEventListener('DOMContentLoaded', function() {

    const nav = document.querySelector('.navbar')
    function addShadowing() {

        if(window.scrollY >= 200) {
nav.classList.add('shadow-bg')
        }
        else 
        {
nav.classList.remove('shadow-bg')
        }
    };

    window.addEventListener('scroll', addShadowing);

})

// hiding menu at link click event

const navLinks= document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.collapse');

navLinks.forEach(item => item.addEventListener('click', () => navbarCollapse.classList.remove('show')));