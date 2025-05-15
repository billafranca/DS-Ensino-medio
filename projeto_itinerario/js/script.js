document.addEventListener("DOMContentLoaded", function() {
    

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




        let data = {
            name: name,
            lastName: lastName,
            email: email,
            date: date,
            cpf: cpf,
            phone: phone,
            address: address,
            rg: rg,
            resname: resname
        }
        fetch("http://localhost:3000/alunos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            alert(`Parabéns, ${data.name}! Seu cadastro foi realizado com sucesso!
                , agora entre em contato com a escola para a entrega de documentos. (11) 9999-9999`)
            window.location.href = "index.html"
        }).catch(function(error) {
            alert("Erro ao cadastrar")
        })
    })
})