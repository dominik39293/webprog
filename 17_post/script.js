const API_URI = "https://nodejs118.dszcbaross.edu.hu/api/auth";

// reg
const regName = document.querySelector("#regName");
const regEmail = document.querySelector("#regEmail");
const regPsw = document.querySelector("#regPsw");
const regBtn = document.querySelector("#regBtn");
const regMess = document.querySelector("#registerMessage");

// login
const logEmail = document.querySelector("#loginEmail");
const logPsw = document.querySelector("#loginPsw");
const logBtn = document.querySelector("#loginBtn");
const logMess = document.querySelector("#loginMessage");

// test login
const testBtn = document.querySelector("#testLoginBtn");

// logout
const logoutBtn = document.querySelector("#logoutBtn");

// Handler for the register button
regBtn.addEventListener("click", async () => {
    // email, name, psw
    if(!regEmail.value || !regName.value || !regPsw.value) return; // these data needed for register;

    const data = {
        email: regEmail.value,
        name: regName.value,
        psw: regPsw.value
    };

    const resp = await fetch(API_URI+"/register", {
        body: JSON.stringify(data),
        headers: {
        "Content-Type": "application/json"
    },
        method: "POST"
    });

    const text = await resp.json();
    regMess.textContent = text.message;
});

logBtn.addEventListener("click", async () => {
    if(!logEmail.value || !logPsw.value) return;

    const data = {
        email: logEmail.value,
        psw: logPsw.value
    }

    const resp = await fetch(API_URI+"/login", {
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST"
    })

    const text = await resp.json();
    logMess.textContent = text.message; 
})