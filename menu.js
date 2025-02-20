let carrinho = [];
let itemAtual = null;

// Menu Promoção
async function carregarMenuPromo() {
    try {
        const response = await fetch("http://localhost:3000/promo");
        const promo = await response.json();

        const container = document.querySelector(".row.g-4");
        container.innerHTML = "";

        if (promo.length === 0) {
            container.innerHTML = '<h2>Sem promoções no momento</h2>';
            return;
        }

        promo.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("col-md-6", "col-lg-3");
            card.innerHTML = `
                <button type="button" class="open-modal-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    data-nome="${item.nome}" data-descricao="${item.descricao}" data-preco="${item.preco}">
                    <div class="card text-bg-dark mb-3 h-100">
                        <img src="src/assets/images/hambugerSalada.png" class="card-img-top" alt="${item.nome}">
                        <div class="card-body">
                            <h5 class="burgerName">${item.nome}</h5>
                            <p class="burgerDesc">${item.descricao}</p>
                        </div>
                    </div>
                </button>
            `;
            container.appendChild(card);
        });

        document.querySelectorAll(".open-modal-btn").forEach(button => {
            button.addEventListener("click", function () {
                const nome = this.getAttribute("data-nome");
                const descricao = this.getAttribute("data-descricao");
                const preco = this.getAttribute("data-preco");
                itemAtual = {nome, descricao, preco}
                document.querySelector(".modal-body").innerHTML = `
                    <img src="src/assets/images/hambugerSalada.png" alt="${nome}">
                    <div class="modal-content">
                        <h1>${nome}</h1>
                        <p class="modal-descricao">${descricao}</p>
                        <p class="modal-preco">R$ ${parseFloat(preco).toFixed(2)}</p>
                    </div>
                `;
            });
        });

    } catch (error) {
        console.error("Erro ao carregar o menu:", error);
    }
}


// Menu Refri
async function carregarMenuRefri() {
    try {
        const response = await fetch("http://localhost:3000/refri");
        const refri = await response.json();

        const container = document.querySelector(".row.g-4");
        container.innerHTML = "";

        if (refri.length === 0) {
            container.innerHTML = '<h2>Sem Refris no momento</h2>';
            return;
        }

        refri.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("col-md-6", "col-lg-3");
            card.innerHTML = `
                <button type="button" class="open-modal-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"
                data-nome="${item.nome}" data-descricao="${item.descricao}" data-preco="${item.preco}">
                    <div class="card text-bg-dark mb-3 h-100">
                        <img src="src/assets/images/soft-drinks.jpg" class="card-img-top" alt="${item.nome}">
                        <div class="card-body">
                            <h5 class="refriName">${item.nome}</h5>
                            <p class="refriDesc">${item.descricao}</p>
                        </div>
                    </div>
                </button>
            `;
            container.appendChild(card);
        });

        document.querySelectorAll(".open-modal-btn").forEach(button => {
            button.addEventListener("click", function () {
                const nome = this.getAttribute("data-nome");
                const descricao = this.getAttribute("data-descricao");
                const preco = this.getAttribute("data-preco");

                document.querySelector(".modal-body").innerHTML = `
                    <img src="src/assets/images/soft-drinks.jpg" alt="${nome}">
                    <div class="modal-content">
                        <h1>${nome}</h1>
                        <p class="modal-descricao">${descricao}</p>
                        <p class="modal-preco">R$ ${parseFloat(preco).toFixed(2)}</p>
                    </div>
                `;
            });
        });

    } catch (error) {
        console.error("Erro ao carregar o menu:", error);
    }
}

// Menu Hamburger
async function carregarMenuHamb() {
    try {
        const response = await fetch("http://localhost:3000/hamburgers");
        const hamburger = await response.json();

        const container = document.querySelector(".row.g-4");
        container.innerHTML = "";

        if (hamburger.length === 0) {
            container.innerHTML = '<h2>Sem hamburgers no momento</h2>';
            return;
        }

        hamburger.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("col-md-6", "col-lg-3");
            card.innerHTML = `
                <button type="button" class="open-modal-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"
                data-nome="${item.nome}" data-descricao="${item.descricao}" data-preco="${item.preco}">
                    <div class="card text-bg-dark mb-3 h-100">
                        <img src="src/assets/images/hambugerSalada.png" class="card-img-top" alt="${item.nome}">
                        <div class="card-body">
                            <h5 class="refriName">${item.nome}</h5>
                            <p class="refriDesc">${item.descricao}</p>
                        </div>
                    </div>
                </button>
            `;
            container.appendChild(card);
        });

        document.querySelectorAll(".open-modal-btn").forEach(button => {
            button.addEventListener("click", function () {
                const nome = this.getAttribute("data-nome");
                const descricao = this.getAttribute("data-descricao");
                const preco = this.getAttribute("data-preco");

                document.querySelector(".modal-body").innerHTML = `
                    <img src="src/assets/images/hambugerSalada.png" alt="${nome}">
                    <div class="modal-content">
                        <h1>${nome}</h1>
                        <p class="modal-descricao">${descricao}</p>
                        <p class="modal-preco">R$ ${parseFloat(preco).toFixed(2)}</p>
                    </div>
                `;
            });
        });

    } catch (error) {
        console.error("Erro ao carregar o menu:", error);
    }
}

// Menu Sobremesa
async function carregarMenuSobremesa() {
    try {
        const response = await fetch("http://localhost:3000/sobremesas");
        const sobremesa = await response.json();

        const container = document.querySelector(".row.g-4");
        container.innerHTML = "";

        if (sobremesa.length === 0) {
            container.innerHTML = '<h2>Sem sobremesas no momento</h2>';
            return;
        }

        sobremesa.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("col-md-6", "col-lg-3");
            card.innerHTML = `
                <button type="button" class="open-modal-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"
                data-nome="${item.nome}" data-descricao="${item.descricao}" data-preco="${item.preco}">
                    <div class="card text-bg-dark mb-3 h-100">
                        <img src="src/assets/images/hambugerSalada.png" class="card-img-top" alt="${item.nome}">
                        <div class="card-body">
                            <h5 class="refriName">${item.nome}</h5>
                            <p class="refriDesc">${item.descricao}</p>
                        </div>
                    </div>
                </button>
            `;
            container.appendChild(card);
        });

        document.querySelectorAll(".open-modal-btn").forEach(button => {
            button.addEventListener("click", function () {
                const nome = this.getAttribute("data-nome");
                const descricao = this.getAttribute("data-descricao");
                const preco = this.getAttribute("data-preco");

                document.querySelector(".modal-body").innerHTML = `
                    <img src="src/assets/images/hambugerSalada.png" alt="${nome}">
                    <div class="modal-content">
                        <h1>${nome}</h1>
                        <p class="modal-descricao">${descricao}</p>
                        <p class="modal-preco">R$ ${parseFloat(preco).toFixed(2)}</p>
                    </div>
                `;
            });
        });

    } catch (error) {
        console.error("Erro ao carregar o menu:", error);
    }
}


// Carrinho

document.getElementById(`addcarrinho`).addEventListener(`click`, function() {
    if (itemAtual) {
        carrinho.push(itemAtual)
        atualizarCarrinho()
    }
})

function atualizarCarrinho() {
    const footer = document.querySelector("footer");
    if (carrinho.length === 0) {
        footer.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>
        <p>Seu carrinho está vazio</p>`
    }else {
        footer.innerHTML = `<i class="fa-solid fa-cart-shopping"></i><p>${carrinho.length} itens no carrinho</p>`
    }
}

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    carregarMenuPromo();
    atualizarCarrinho();

    document.getElementById("btnRefris").addEventListener("click", carregarMenuRefri);
    document.getElementById("btnPromo").addEventListener("click", carregarMenuPromo);
    document.getElementById("btnHamb").addEventListener("click", carregarMenuHamb);
    document.getElementById("btnsobremesas").addEventListener("click", carregarMenuSobremesa);
});