"use strict";

const id = document.querySelector("#floatingInput"),
    pw = document.querySelector("#floatingPassword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        pw: pw.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/register";
            } else {
                alert(res.msg);
            }
        })
        .catch((error) => {
            console.error(new Error("로그인 중 에러 발생"));
        });
}