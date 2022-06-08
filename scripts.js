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


function _scroll_through_Menu(param) {
    const element = document.getElementById(param);
    element.scrollIntoView();
}


function openDropDown() {
    var dropdownContent = document.querySelector('.dropdown');
    var headerNav = document.querySelector('.header-nav');
    var header = document.querySelector('.navbar');
    var menuContainer = document.querySelector('.menu-container');
    //var svgIcon =  document.querySelector('.flecha-abajo');
    var isOpen = dropdownContent.classList.contains('open');

    if (isOpen) {
        dropdownContent.classList.remove('open');
        headerNav.classList.remove('open');
        header.classList.remove('open');
        menuContainer.classList.remove('open');
        //svgIcon.classList.remove('open');
    } else {
        dropdownContent.classList.add('open');
        headerNav.classList.add('open');
        header.classList.add('open');
        menuContainer.classList.add('open');
        //svgIcon.classList.add('open');
    }
}
/*----------------Close modal by clicking outside ------------------- */


function showBox(param1, param2, param3) {

    const modal = document.querySelector('.modal');

    document.querySelector('._picture-modal').src = param1;
    document.querySelector('.modal-title').innerHTML = param2;
    document.querySelector('.modal-mydescription').innerHTML = param3;

    if (modal.classList.contains('show')) {
        modal.classList.remove('show');
    } else {
        modal.classList.add('show');
        console.log('hola');
    }
}



document.addEventListener('click', function (e) {
    const clickedPaths = e.path;
    const button = document.querySelector('.modal');
    const modal = document.querySelector('.container-picture');

    if (!clickedPaths.includes(modal) && e.target == button) {
        button.classList.remove('show');
        console.log('adiós');
    }
});

/* -------------------JS Formulario -------------------*/
function ValidateForm() {
    const data = new Object();
    data.email = document.getElementById('email').value;
    data.phone = document.getElementById('phone').value;
    data.firstName = document.getElementById('first-name').value;
    data.lastName = document.getElementById('last-name').value;
    data.birthdayMonth = document.getElementById('date-month').value
    data.birthdayYear = document.getElementById('date-year').value
    data.address = document.getElementById('address').value
    data.formation = document.getElementById('formation').value
    data.computingLevel = document.getElementById('computing-level').value
    data.drivingLicense = document.getElementById('driving-license').value

    ValidateError();
    if (data.email == "" || data.phone == "" || data.firstName == "" || data.lastName == "" || data.birthdayMonth == "Mes*" || data.birthdayDay == "Día*" || data.birthdayYear == "Año*" || data.address == "" || data.formation == "" /*|| data.computingLevel == "" || data.drivingLicense == ""*/) {
        showModal("Debes rellenar los campos necesarios(*) para continuar")
        document.getElementById('obligatory-fields').style.color = '#e94c4c';
    } else {
        showModal("Se ha enviado correctamente")
        document.getElementById('obligatory-fields').style.color = 'gray';
        CleanForm();
    }


}

function ValidateError() {
    if (document.getElementById('email').value == "") {
        document.getElementById('email').classList.add('form-input-error');
    } else {
        document.getElementById('email').classList.remove('form-input-error')
        document.getElementById('email').classList.add('form-input-tc');
    }

    if (document.getElementById('phone').value == "") {
        document.getElementById('phone').classList.add('form-input-error');
    } else {
        document.getElementById('phone').classList.remove('form-input-error')
        document.getElementById('phone').classList.add('form-input-tc');
    }

    if (document.getElementById('first-name').value == "") {
        document.getElementById('first-name').classList.add('form-input-error');
    } else {
        document.getElementById('first-name').classList.remove('form-input-error')
        document.getElementById('first-name').classList.add('form-input-tc');
    }

    if (document.getElementById('last-name').value == "") {
        document.getElementById('last-name').classList.add('form-input-error');
    } else {
        document.getElementById('last-name').classList.remove('form-input-error')
        document.getElementById('last-name').classList.add('form-input-tc');
    }

    if (document.getElementById('date-day').value == "" || document.getElementById('date-month').value == "" || document.getElementById('date-year').value == "") {
        document.getElementById('date-day').style.borderColor = '#e94c4c';
        document.getElementById('date-month').style.borderColor = '#e94c4c';
        document.getElementById('date-year').style.borderColor = '#e94c4c';
    } else {
        document.getElementById('date-day').style.borderColor = 'gray';
        document.getElementById('date-month').style.borderColor = 'gray';
        document.getElementById('date-year').style.borderColor = 'gray';
    }
    if (document.getElementById('address').value == "") {
        document.getElementById('address').classList.add('form-input-error');
    } else {
        document.getElementById('address').classList.remove('form-input-error')
        document.getElementById('address').classList.add('form-input-tc');
    }

    if (document.getElementById('formation').value == "") {
        document.getElementById('formation').classList.add('form-input-error');
    } else {
        document.getElementById('formation').classList.remove('form-input-error')
        document.getElementById('formation').classList.add('form-input-tc');
    }
    if (document.getElementById('computing-level').value == "") {
        document.getElementById('computing-level').classList.add('select-error');
    } else {
        document.getElementById('computing-level').classList.remove('select-error')
        document.getElementById('computing-level').classList.add('select');
    }
    if (document.getElementById('driving-license').value == "") {
        document.getElementById('driving-license').classList.add('select-error');
    } else {
        document.getElementById('driving-license').classList.remove('select-error')
        document.getElementById('driving-license').classList.add('select');
    }
}

function CleanForm() {
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('first-name').value = "";
    document.getElementById('last-name').value = "";
    document.getElementById('date-day').value = "";
    document.getElementById('date-month').value = "";
    document.getElementById('date-year').value = "";
    document.getElementById('address').value = "";
    document.getElementById('formation').value = "";
    document.getElementById('textarea-formation').value = "";
    document.getElementById('languages-high').value = "";
    document.getElementById('languages-medium').value = "";
    document.getElementById('languages-low').value = "";
    document.getElementById('textarea-skills').value = "";
    document.getElementById('computing-level').value = "";
    document.getElementById('driving-license').value = "";


}
function showModal(string) {
    const modal = document.querySelector('.modal');
    const text = document.querySelector('.text');
    modal.classList.add('show');
    text.innerHTML = string;


}