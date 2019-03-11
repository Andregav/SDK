var header = document.getElementById("buttons");
var btns = header.getElementsByClassName("content_button");
var method = document.getElementsByClassName("emoney_method");
var amount = document.getElementById("amount");
var procent = document.getElementById("procent");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

function openPayment(paymentName, elmnt) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(paymentName).style.display = "flex";
}
document.getElementById("defaultOpen").click();


for (var i = 0; i < method.length; i++) {
    method[i].addEventListener("click", function(myFunction) {
        var current = document.getElementsByClassName("active_emoney_method");
        current[0].className = current[0].className.replace(" active_emoney_method", "");
        this.className += " active_emoney_method";
        document.getElementById("nameMethod").textContent = this.querySelector("p").textContent;
        document.getElementById("procent").textContent = this.querySelector("span").textContent;
        var y = document.getElementById("sidebar_amount");
        var x = this.querySelector("span");
        var procent = (+y.textContent * +x.textContent) / 100;
        document.getElementById("sum").innerHTML = procent;
        var sum = +y.textContent + +procent;
        document.getElementById("amount").setAttribute("value", sum);
    });
}


var slide_open = document.querySelector(".slide_open");
var slide_close = document.querySelector(".slide_close");
var slide_block = document.querySelector(".slide_block");

slide_open.addEventListener("touchmove", function(event) {
    event.preventDefault();
    slide_block.classList.add("popup_slideblock");
});

slide_open.addEventListener("touchmove", function(event) {
    event.preventDefault();
    slide_block.classList.remove("popup_slideblock");
});