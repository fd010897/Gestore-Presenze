// alert pop-up accedi - registrati

function accedi() {
    var html = `
    <div class="card-body accedi">
    <form>

      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus>
        <label for="floatingInputUsername">Username</label>
      </div>

      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="d-grid mb-2">
        <button class="btn btn-lg btn-login fw-bold text-uppercase main-button" type="submit">Accedi</button>
      </div>

      <a class="d-block text-center mt-2 small color" onclick="registrati()" href="#" onClick>Non hai un account? Registrati</a>

      <hr class="my-4">

      <div class="d-grid mb-2">
        <button class="btn btn-lg btn-google btn-login fw-bold text-uppercase" type="submit">
          <i class="fab fa-google me-2"></i> Accedi con Google
        </button>
      </div>

      <div class="d-grid">
        <button class="btn btn-lg btn-facebook btn-login fw-bold text-uppercase" type="submit">
          <i class="fab fa-facebook-f me-2"></i> Accedi con Facebook
        </button>
      </div>

    </form>
    </div>`;

    Swal.fire({
        title: 'Accedi',
        html: html,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
    });
}

function registrati() {
    var html = `
    <div class="card-body registrati">
                    <form>
        
                      <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus>
                        <label for="floatingInputUsername">Username</label>
                      </div>
        
                      <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com">
                        <label for="floatingInputEmail">Email</label>
                      </div>
        
                      <hr>
        
                      <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                      </div>
        
                      <div class="d-grid mb-2">
                        <button class="btn btn-lg btn-login fw-bold text-uppercase main-button" type="submit">Registrati</button>
                      </div>
        
                      <a class="d-block text-center mt-2 small color" href="#" onclick="accedi()">Hai un account? Accedi</a>
        
                      <hr class="my-4">
        
                      <div class="d-grid mb-2">
                        <button class="btn btn-lg btn-google btn-login fw-bold text-uppercase" type="submit">
                          <i class="fab fa-google me-2"></i> Registrati con Google
                        </button>
                      </div>
        
                      <div class="d-grid">
                        <button class="btn btn-lg btn-facebook btn-login fw-bold text-uppercase" type="submit">
                          <i class="fab fa-facebook-f me-2"></i> Registrati con Facebook
                        </button>
                      </div>
        
                    </form>
                  </div>

`;

    Swal.fire({
        title: 'Registrati',
        html: html,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
    });
}

// Elimina il colore di default di bootstrap nel dropdown

document.addEventListener('DOMContentLoaded', function () {

    var dropdown_servizi = document.querySelector('.dropdown_servizi');
    var dropdown_items = document.querySelectorAll('.dropdown-item');

    dropdown_items.forEach(function (dropdownItem) {
        dropdownItem.addEventListener('mouseover', function () {
            dropdown_servizi.style.backgroundColor = 'var(--dark-grey)';
        });

        dropdownItem.addEventListener('mouseout', function () {
            dropdown_servizi.style.backgroundColor = "transparent !important";
        });
    });
});






var bambini = [
    {
        nome: "Lucia",
        cognome: "Rossi",
        data: "2024-05-13",
        oraE: "9:00",
        oraU: "13:00"
    },
    {
        nome: "Giulia",
        cognome: "Verdi",
        data: "2024-05-13",
        oraE: "9:10",
        oraU: "13:20"
    },
    {
        nome: "Stefano",
        cognome: "Bianchi",
        data: "2024-05-13",
        oraE: "8:50",
        oraU: '12:50'
    }
];


    //data minima
    var oggi = new Date();
    var dataOdierna = oggi.toISOString().split("T")[0];
    document.getElementById("data").setAttribute("min", dataOdierna);
    


function aggiungiPresenza() {

    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var data = document.getElementById("data").value;
    var oraE = document.getElementById("oraE").value;
    var oraU = document.getElementById("oraU").value;

    //creiamo un oggetto libro
    var nuovoBambino = {
        nome: nome,
        cognome: cognome,
        data: data,
        oraE: oraE,
        oraU: oraU
    };

    //aggiunta del bambino all array
    bambini.push(nuovoBambino);

    //aggiorna la lista dei bambini sul documento
    aggiungiBambiniAllaPagina();


    //resetta il modul del form
    document.getElementById("aggiungi-presenza").reset();

}

//funzione per creare e aggiungere elementi HTML alla lista dei bambini

function aggiungiBambiniAllaPagina() {
    // Selezioniamo la table tramite il suo id
    var listaBimbiElement = document.getElementById("tabella");
    listaBimbiElement.innerHTML = "";//pulisce la tabella prima di aggiungere un elemento

    bambini.forEach(function (bimbo, index) {
        const tr = document.createElement("tr");

        const tdNome = document.createElement("td");
        const tdCognome = document.createElement("td");
        const tdData = document.createElement("td");
        const tdOraE = document.createElement("td");
        const tdOraU = document.createElement("td");
        const tdElimina = document.createElement("td"); // Aggiungi una colonna per il bottone Elimina

        tdNome.textContent = bimbo.nome;
        tdCognome.textContent = bimbo.cognome;
        tdData.textContent = bimbo.data;
        tdOraE.textContent = bimbo.oraE;
        tdOraU.textContent = bimbo.oraU;

        const btnElimina = document.createElement("button"); // Crea il bottone Elimina
        btnElimina.textContent = "Elimina";
   
        btnElimina.addEventListener("click", function () {
            eliminaBambino(index); 
        });

        tdElimina.appendChild(btnElimina); // Aggiungi il bottone Elimina alla cella

        tr.appendChild(tdNome);
        tr.appendChild(tdCognome);
        tr.appendChild(tdData);
        tr.appendChild(tdOraE);
        tr.appendChild(tdOraU);
        tr.appendChild(tdElimina); // Aggiunge la cella con il bottone Elimina

        listaBimbiElement.appendChild(tr);
    });
}

   //chiamata della funzione di scrittura su HTML tramite EventListener
document.addEventListener("DOMContentLoaded", function () {
    aggiungiBambiniAllaPagina();

    //aggiunta di un eventListener per intercettare il submit
    document.getElementById("aggiungi-presenza").addEventListener("submit", aggiungiPresenza);
});


function eliminaBambino(index) {
    bambini.splice(index, 1); // Rimuove direttamente l'elemento <tr> dalla tabella
    aggiungiBambiniAllaPagina();
}

   


