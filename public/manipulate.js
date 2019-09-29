let url = "http://localhost:3001/handler/check";
localStorage.setItem("init-call-counter", 0);
let button = null;
let isAmazon = false;
let codeInput;
let inputCode;

let interVar = setInterval(() => {
    // check if macys
    if(!isAmazon){
        codeInput = document.getElementsByClassName("promo-apply-input")[0];
        button = document.getElementsByClassName("promo-apply-button")[0];    
    }

    //amazon check
    if(button ==  null){
        codeInput = document.getElementById("spc-gcpromoinput");
        button = document.getElementsByClassName("a-declarative a-button-text")[4];

        button !== null? isAmazon = true: null;
    }

    
    !isAmazon && button !== null && button.addEventListener("click", () => {
        codeInput = document.getElementsByClassName("promo-apply-input")[0];    // update value
        inputCode = codeInput.value;
        
        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({code: inputCode})
        })
        
        .then((response) => {

            if(response.status === 200 && parseInt(localStorage.getItem("init-call-counter")) === 0){
                alert("The code you entered is invalid. Try again");
                localStorage.setItem("init-call-counter", 1);
            }
            else if(response.status === 200 && parseInt(localStorage.getItem("init-call-counter") === 1)){
                codeInput.innerText = "Received";
                codeInput.style.animation = "blinker 1s linear 3";
                localStorage.setItem("init-call-counter", 0);
            }
        })
        .catch((err) => {
            console.log("Not found");
        });
    })

    isAmazon && button !== null && button.addEventListener("click", () => {
        codeInput = document.getElementById("spc-gcpromoinput");
        inputCode = codeInput.value;

        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({code: inputCode})
        })
        
        .then((response) => {

            if(response.status === 200 && parseInt(localStorage.getItem("init-call-counter")) === 0){
                alert("The code you entered is invalid. Try again");
                localStorage.setItem("init-call-counter", 1);
            }
            else if(response.status === 200 && parseInt(localStorage.getItem("init-call-counter") === 1)){
                codeInput.innerText = "Received";
                codeInput.style.animation = "blinker 1s linear 3";
                localStorage.setItem("init-call-counter", 0);
            }
        })
        .catch((err) => {
            console.log("Not found");
        });
    })
    
}, 1000);
