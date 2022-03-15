function signupFormHandler(event) {
    event.preventDefualt();

    const username = document.querySelector('#username-singup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }  
        }).then((response) => {console.log(response)})
    }

}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);