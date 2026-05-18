const API_URI = "https://nodejs118.dszcbaross.edu.hu/api/auth";

// reg
const regName = document.querySelector("#regName");
const regEmail = document.querySelector("#regEmail");
const regPsw = document.querySelector("#regPsw");
const regBtn = document.querySelector("#regBtn");

// login
const logEmail = document.querySelector("#loginEmail");
const logPsw = document.querySelector("#loginPsw");
const logBtn = document.querySelector("#loginBtn");

// test login
const testBtn = document.querySelector("#testLoginBtn");

// logout
const logoutBtn = document.querySelector("#logoutBtn");

// Handler for the register button
regBtn.addEventListener("click", async () => {
    // email, name, psw
    const data = {
        email: regEmail,
        name: regName,
        psw: regPsw
    };

    const resp = await fetch(API_URI+"/register", {
        body: data,
        method: "POST"
    });

    console.log(await resp.json());
});