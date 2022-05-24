window.addEventListener('scroll', function(e) {
    console.log(window.scrollY);
    const arrow = document.querySelector('.arrow-up');
    if (window.scrollY > 100) {
        arrow.classList.add('visible');
    } else {
        arrow.classList.remove('visible');
    }
});

function scrollUp() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}

function openSidebar() {
    document.querySelector('.sidebar').classList.add('open');
}

function openDropDown() {
    var dropdownContent = document.querySelector('.dropdown');
    var svgIcon = document.querySelector('.flecha-abajo');
    var isOpen = dropdownContent.classList.contains('open');

    if (isOpen) {
        dropdownContent.classList.remove('open');
        svgIcon.classList.remove('open');
    } else {
        dropdownContent.classList.add('open');
        svgIcon.classList.add('open');
    }
}

function closeSidebar() {
    document.querySelector('.sidebar').classList.remove('open');
}