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
    var string = `<img src="${imageSrc}" class="modal-image"><button onclick="hideModal()" class="cross-button">&#10006;</button><div class="modal-footer"><h3 class="modal-title">${title}</h3><div class="modal-description">${description}</div><button class="hideButton" onclick="hideModal()">Cerrar</button><button onclick="viewFullScreen()">View Full Screen</button></div>`
    document.querySelector('.modal-content').innerHTML = string;
    modal.classList.add('show');
}