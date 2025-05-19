document.addEventListener("DOMContentLoaded", function() {
    
    const contatoButton = document.getElementById("contato");
    const contatoForm = document.getElementById("contato-form");
    const fecharButton = document.getElementById("fechar");

    contatoButton.addEventListener("click", () => {
        contatoForm.style.display = "block";
    });

    fecharButton.addEventListener("click", () => {
        contatoForm.style.display = "none";
    });





    matricular.addEventListener("click", function() {
        let name = document.getElementById("name").value
        let lastName = document.getElementById("lastName").value
        let email = document.getElementById("email").value
        let date = document.getElementById("date").value
        let cpf = document.getElementById("cpf").value
        let phone = document.getElementById("phone").value
        let address = document.getElementById("address").value
        let rg = document.getElementById("rg").value
        let resname = document.getElementById("resname").value
        let password = document.getElementById("password").value



        const data = {
            name,
            lastName,
            email,
            date,
            cpf,
            phone,
            address,
            rg,
            resname
        }
        
        const isEmptyField = Object.values(data).some(value => value === "");
        
        if (isEmptyField) {
            alert("preencha todos os campos");
        }else if (cpf.length < 11) {
            alert("cpf inválido");
        }else if (phone.length < 11) {
            alert("telefone inválido");
        }else if (rg.length < 9) {
            alert("rg inválido");
        }else if (resname.length < 3) {
            alert("nome dos responsáveis inválido");
        }else if (!email.includes("@")) {
            alert("email inválido");
        }else if (!email.includes(".")) {
            alert("email inválido");
        }else if (!email.endsWith(".com")) {
            alert("email inválido");
        }else if (password.length < 8){
            alert("senha muito curta");
        }else if (cpf.length = isNaN(cpf)){
            alert("cpf inválido");
        }
        else{
            console.log(data);
            alert("Matriculado com sucesso, entre em contato com a escola no número (11)1234-5678");
            window.location.href = "index.html";
        }
    })
})