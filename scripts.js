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
/*
function showModal(param1, param2, param3) {
    const modal = document.querySelector('.modal');

    document.querySelector('._picture-modal').src = param1;
    document.querySelector('.modal-title').innerHTML = param2;
    document.querySelector('.modal-mydescription').innerHTML = param3;

    modal.classList.add('show');
    console.log('hola');
}
*/

function _scrollTop() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}

function _scrollBurgers() {
    window.scroll({
        top: 180,
        behavior: 'smooth'
    });
}


function _scrollRibs() {
    window.scroll({
        top: 900,
        behavior: 'smooth'
    });
}

function _scrollDesserts() {
    window.scroll({
        top: 1618,
        behavior: 'smooth'
    });
}


/*----------------Close modal by clicking outside ------------------- */


function showBox(param1, param2, param3) {

    const modal = document.querySelector('.modal');
        
    document.querySelector('._picture-modal').src = param1;
    document.querySelector('.modal-title').innerHTML = param2;
    document.querySelector('.modal-mydescription').innerHTML = param3;
  
  	if(modal.classList.contains('show')) {
    	modal.classList.remove('show');
    } else {
    	modal.classList.add('show');
        console.log('hola');
   }    


document.addEventListener('click', function(e) {
    const clickedPaths = e.path;
    const button = document.querySelector('.modal');
    const modal = document.querySelector('.container-picture');
  
  if(!clickedPaths.includes(modal) && e.target == button) {
      button.classList.remove('show');
      console.log('adiós');
  }
})
}