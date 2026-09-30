const form = document.getElementById("formFuncionario");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const cargo = document.getElementById("cargo").value;
    const salario = document.getElementById("salario").value;
    
    const funcionario = {
        nome: nome,
        cargo: cargo,
        salario:salario,
    };

    console.log(funcionario);
});

    