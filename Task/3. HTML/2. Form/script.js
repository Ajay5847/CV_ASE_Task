function submitForm() {
    const form = document.getElementById('surveyForm');
    const formData = new FormData(form);

    let formValues = '';
    let isFormValid = true;

    for (let pair of formData.entries()) {
        if (pair[1].trim() === '' && form.elements[pair[0]].hasAttribute('required')) {
            isFormValid = false;
            break;
        }
        formValues += `${pair[0]}: ${pair[1]}\n`;
    }

    if (isFormValid) {
        alert(formValues);
        form.reset();
    }
}
