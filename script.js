let VALID = false;

const section = document.querySelectorAll('section')
const p = document.createElement('p')
const input = document.getElementById('sub')
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.com$/
let element = null;

function is_form_valid() {
    if (!VALID) {
        input.disabled = true;
        input.className = 'Disabled'
    }
}

function check_sections() {
    let VALID_FORMS = 4;
    for (let i=1; i < section.length - 2; i++) {
        if (section[i].className != "Invalid") {
            VALID_FORMS -= 1
        }
        else {
            if (VALID_FORMS < 4) {
                VALID_FORMS += 1
            }
        }
        console.log(VALID_FORMS)
    }
}

document.addEventListener('input', (e) => {
    element = e.target;

    if (element.name == 'first-name') {
        if (element.value.length < 8) {
            p.textContent = "Name needs to be 8 characters!"
            section[1].append(p)
            section[1].className = "Invalid"
        }
        else {
            p.textContent = ""
            section[1].className = ""
        }
    }

    if (element.name == 'email') {
        if (!regex.test(element.value)) {
            p.textContent = "Please, use e-mail under following: name@domain.com"
            section[2].append(p)
            section[2].className = "Invalid"
        }
        else { 
            section[2].className = ""
            p.textContent = ""
        }
    }

    if (element.name == 'password-2') {
        const p1 = document.getElementById("password-1")
        if (element.value != p1.value) {
            p.textContent = "Passwords must coincide!"
            section[4].className = "Invalid"
            section[4].append(p)
        }
        else {
            p.textContent = ""
            section[4].className = ""
        }
    }
    check_sections()
    console.log("\n")
})



document.addEventListener("DOMContentLoaded", () => {
    is_form_valid()
})