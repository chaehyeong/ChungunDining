"use strict";

const name = document.querySelector("#name"),
    category = document.querySelector("#category"),
    loc = document.querySelector("#loc"),
    email = document.querySelector("#email"),
    askBtn = document.querySelector("button");

askBtn.addEventListener("click", ask);

function ask() {
    if (!name.value) return alert("식당명을 입력해주세요.");
    if (!category.value) return alert("분류를 입력해주세요.");
    if (!loc.value) return alert("위치를 입력해주세요.");
    if (!email.value) return alert("메일 주소를 입력해주세요.");    

    const req = {
        name: name.value,
        category: category.value,
        loc: loc.value,
        email: email.value,
    };
    console.log(req);

    fetch("/ask", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/ask";
            } else {
                alert(res.msg);
            }
        })
        .catch((error) => {
            console.error(new Error("요청 중 에러 발생"));
        });
    
    alert("요청되었습니다.");
}