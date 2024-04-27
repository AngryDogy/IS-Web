
document.addEventListener('DOMContentLoaded', async () => {
    let randomId = Math.floor(Math.random() * 10) + 1;
    if (!localStorage.getItem('filter')) {
        localStorage.setItem('filter', '0');
    }
    console.log(localStorage.getItem('filter'))
    if (localStorage.getItem('filter') === '0') {
        if (randomId % 2 !== 0) {
            randomId++
        }
        localStorage.setItem('filter', '1')
    } else {
        if (randomId % 2 === 0) {
            randomId--
        }
        localStorage.setItem('filter', '0')
    }

    const url = `https://jsonplaceholder.typicode.com/users/${randomId}`;

    fetch(url)
        .then(response => response.json())
        .then(user => {

            const usernameElement = document.getElementById('user-username');
            const nameElement = document.getElementById('user-name');
            const emailElement = document.getElementById('user-email');
            const phoneElement = document.getElementById('user-phone');
            const addressElement = document.getElementById("user-address")
            const companyElement = document.getElementById("user-company")

            usernameElement.textContent = user.username;
            nameElement.textContent = user.name;
            emailElement.textContent = user.email;
            phoneElement.textContent = user.phone;
            addressElement.textContent = `${user.address.city}, ${user.address.street}, ${user.address.suite}`;
            companyElement.textContent = user.company.name;
        })
        .catch(() => {
            preloader.style.display = 'none';
            const errorElement = document.getElementById('error-message');
            errorElement.textContent = '⚠️ Что-то пошло не так';
        });
    const preloader = document.getElementById('preloader');
    await sleep(500);
    preloader.style.display = 'none';
});
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}