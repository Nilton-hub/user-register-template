export default class UserController
{
    constructor(formId) {
        this.formEle = document.getElementById(formId);
    }

    onSubmit() {
        this.formEle;addEventListener('submit', e => {
            e.preventDefault();
            this.getValues();
        });
    }

    getValues() {
        const fields = [];
        const user = {};
        [...this.formEle.elements].forEach((field, index) => {
            if (field.name === 'gender') {
                if (field.checked) {
                    user[field.name] = field.value;
                }
            } else {
                user[field.name] = field.value;
            }
        });

        return new User( // name, gender, birth, email, password
            formUser.name.value,
            formUser.gender.value,
            formUser.birth.value,
            formUser.email.value,
            formUser.password.value
        );
    }
}
