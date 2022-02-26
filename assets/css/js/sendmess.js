let bot = {
    TOKEN: "5109185823:AAGCBhoe_xRUwhrkZOMB9di4FTnaD0iq-0g",
    chatID: "1483390408",

}

function sendMessage() {

    let xabar = document.querySelector("#message");
	let ism = document.querySelector("#name");
	let email = document.querySelector("#email");
	let tel = document.querySelector("#tel");
    if(ism.value.length < 3){
        document.querySelector(".err-name").style.display = "block";
        console.log("xato ism");
    }else if(tel.value.length < 13){
        document.querySelector(".err-tel").style.display = "block";
        console.log("xato tel");
    }else if(email.value.length < 0){
        document.querySelector(".err-email").style.display = "block";
        console.log("xato email");
    }else if(xabar.value.length < 1){
        document.querySelector(".err-mess").style.display = "block";
        console.log("xato xabar");
    }else{
        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=Ism: ${ism.value} %0AXabar: ${xabar.value} %0AEmail: ${email.value} %0ATelefon: ${tel.value}`, {
            method: "GET"
        })
        .then(success => {
            document.getElementById("send-sucs").style.display="block";
            setInterval(() => {
                document.getElementById("send-sucs").style.display="none";
            }, 5000);
        }, error => {
            document.getElementById("send-err").style.display="block";
            setInterval(() => {
                document.getElementById("send-err").style.display="none";
            }, 5000);
        })
        console.log("true");
        document.querySelector(".err-tel").style.display = "none";
        document.querySelector(".err-email").style.display = "none";
        document.querySelector(".err-name").style.display = "none";
        document.querySelector(".err-mess").style.display = "none";

    }

}