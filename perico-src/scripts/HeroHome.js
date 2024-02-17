let time = true;
setInterval(() => {
    const number = document.querySelector("#changed-number");
    console.log("-> " + time)
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
                console.log(time)
                break
        }
    } else {
        console.log("mano");
        time = true;
    }
}, 1000);