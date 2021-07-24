let personID = 0;
let perNum = 0;
document.getElementById("per-button").onclick = function(){

    let perName = document.getElementById("per-name").value;
    let perEmail = document.getElementById("per-email").value;
    let perPassword = document.getElementById("per-pass").value;
    let perAddress = document.getElementById("per-address").value;
    let perCpf = document.getElementById("per-cpf").value;

    let person = `{"personName":"${perName}", "personEmail":"${perEmail}", "personPassword":"${perPassword}", "personAddress":"${perAddress}", "personCPF":"${perCpf}"}`;
    perNum += 1;
    personID = "pessoa" + perNum;
    localStorage.setItem(personID, person);

    document.getElementById("per-name").value = "";
    document.getElementById("per-email").value = "";
    document.getElementById("per-pass").value = "";
    document.getElementById("per-address").value = "";
    document.getElementById("per-cpf").value = "";
}

let productID = 0;
let proNum = 0;
document.getElementById("pro-button").onclick = function(){

    let proName = document.getElementById("pro-name").value;
    let proBrand = document.getElementById("pro-brand").value;
    let proPrice = document.getElementById("pro-price").value;
    let proQuantity = document.getElementById("pro-quantity").value;

    let product = `{"productName":"${proName}", "productBrand":"${proBrand}", "productPrice":"${proPrice}", "productQuantity":"${proQuantity}"}`;
    proNum += 1;
    productID = "produto" + proNum;
    localStorage.setItem(productID, product);

    document.getElementById("pro-name").value = "";
    document.getElementById("pro-brand").value = "";
    document.getElementById("pro-price").value = "";
    document.getElementById("pro-quantity").value = "";
}