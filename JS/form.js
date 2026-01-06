    
    const formulario = document.getElementById("oMeuForm")

    formulario.addEventListener("submit", enviarForm)
  
    function enviarForm(event) {
      event.preventDefault();

      const form = event.target;
      const nome = form.nome.value; 
      const feedback = document.getElementById("feedback");

      feedback.textContent = "Mensagem enviada com sucesso! Obrigada pelo contacto " + nome + "😊";
      feedback.className = "sucesso";

      form.reset();
    }
