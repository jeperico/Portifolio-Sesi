let time = true;
setInterval(() => {
    const number = document.querySelector("#changed-number");
    if (time) {
        switch (number.innerHTML) {
            case "2":
                number.innerHTML = "3";
                break
            case "3":
                number.innerHTML = "4!";
                time = false;
                break
            case "4!":
                number.innerHTML = "2";
                break
        }
    } else {
        time = true;
    }
}, 2000);