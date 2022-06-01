window.addEventListener('scroll', function (e) {
    console.log(window.scrollY);
    const arrow = document.querySelector('.arrow-up');
    if (window.scrollY > 150) {
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

function closeSidebar() {
    document.querySelector('.sidebar').classList.remove('open');
}
function viewFullScreen() {
    var imag = document.querySelector('.modal-image');
    openFullscreen(imag);
}

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}
function hideModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('show');
}
function showModal(imageSrc, title, description) {
    const modal = document.querySelector('.modal');

        document.querySelector('.picture-modal').src = imageSrc;
        document.querySelector('.title').innerHTML = title;
        document.querySelector('.myDescription').innerHTML = description;
        modal.classList.add('show');
}

function _scrollTop() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}

function _scrollBurgers() {
    window.scroll({
        top: 230,
        behavior: 'smooth'
    });
}


function _scrollRibs() {
    window.scroll({
        top: 950,
        behavior: 'smooth'
    });
}

function _scrollDesserts() {
    window.scroll({
        top: 1670,
        behavior: 'smooth'
    });
}