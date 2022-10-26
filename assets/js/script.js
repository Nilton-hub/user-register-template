import User from "./User.js";
import UserController from "./UserController.js";

const formUser = document.querySelector('.content form');
window.formUser = formUser;

formUser.addEventListener('submit', e => {
    e.preventDefault();
    const userObj = new User( // name, gender, birth, email, password
        formUser.name.value,
        formUser.gender.value,
        formUser.birth.value,
        formUser.email.value,
        formUser.password.value
    );

    console.log(userObj);
});

const userController = new UserController();
console.log(UserController);
