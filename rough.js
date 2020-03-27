const number = document.getElementById('number');
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    // const selectValue = select.Value;
    const numberValue = number.value;

    // if (selectValue === '') {
    // 	setErrorFor(select);
    // } else {
    // 	setSuccessFor(select);
    // }

    if (numberValue === '') {
        setErrorFor(number);
    } else {
        setSuccessFor(number);
    }
}
function setErrorFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
