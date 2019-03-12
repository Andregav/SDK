var header = document.getElementById("buttons");
var btns = header.getElementsByClassName("content_button");
var method = document.getElementsByClassName("emoney_method");
var amount = document.getElementById("amount");
var procent = document.getElementById("procent");
var mobmethod = document.getElementsByClassName("mobmethod");

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
    document.getElementById(paymentName).style.display = "block";
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

function myСalculation() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("procent").textContent = x;
    var y = document.getElementById("sidebar_amount");
    var procent = (+y.textContent * +x) / 100;
    document.getElementById("sum").innerHTML = procent;
    var sum = +y.textContent + +procent;
    document.getElementById("amount").setAttribute("value", sum);
}

var button = document.querySelector(".slide_open");
var popup_mob_menu = document.querySelector(".slide_block");
var button_close = document.querySelector(".slide_close");


button.addEventListener("click", function(event) {
    event.preventDefault();
    popup_mob_menu.style.display = "flex";

});

button_close.addEventListener("click", function(event) {
    event.preventDefault();
    popup_mob_menu.style.display = "none";
});