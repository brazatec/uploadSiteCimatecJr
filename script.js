// Seleciona elementos do modal
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeModal = document.querySelector(".close");

// Adiciona evento de clique para os botões "Saiba Mais"
document.querySelectorAll(".saiba-mais").forEach(button => {
    button.addEventListener("click", (event) => {
        // Obtém o conteúdo detalhado do produto a partir do atributo data-info
        const info = event.target.closest(".product-card").getAttribute("data-info");
        
        // Insere o texto no modal e exibe o modal
        modalText.textContent = info;
        modal.style.display = "flex";
    });
});

// Fecha o modal ao clicar no "X"
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fecha o modal ao clicar fora do conteúdo do modal
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
