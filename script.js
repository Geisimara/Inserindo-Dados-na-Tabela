
// recuper os campos de imputs 
let nomer = document.getElementById("nome");
let emailr = document.getElementById("email");
let tabelar = document.getElementById("tabela");


// criar um array pra colocar os objetos
 ArrayAgenda = [];

// criar um construtor 
function Agenda (nome, email) {
    this.nome = nome;
    this.email = email;
}

// criar um metodo para instanciar e criar o objeto Agenda

let cont = 0;
function AddContatos() {

    event.preventDefault();
    agenda = new Agenda(nomer.value, emailr.value);
    ArrayAgenda.push(agenda);
    cont ++;


    InserirDadosTabela();
    
}

function InserirDadosTabela() {
    
    var addtbody = document.createElement('tbody');
    tabelar.appendChild(addtbody);

    var addtr = document.createElement('tr');
    addtbody.appendChild(addtr);
    

    var addtdnumero = document.createElement('td'); 
    addtdnumero.innerHTML += (cont);
    addtr.appendChild(addtdnumero);

    var addtdnome = document.createElement('td'); 
    addtdnome.innerHTML += (nomer.value);
    addtr.appendChild(addtdnome);

    var addtdemail = document.createElement('td'); 
    addtdemail.innerHTML += (emailr.value);
    addtr.appendChild(addtdemail);

    var btnremove = document.createElement('td'); 
    btnremove.innerHTML += "<button type='button' class='btn btn-primary' onclick=Remove()>Remover</button>"
    addtr.appendChild(btnremove);

    nomer.value = "";
    emailr.value = "";

}


function Remove() {
    
    var btn_rem = event.target
    console.log(btn_rem);

    var btn_coluna = btn_rem.parentNode
    console.log(btn_coluna);

    var btn_linha = btn_coluna.parentNode;

    var conf = confirm("Deseja remover o contao ?");
   

    if(conf == true){

        btn_coluna.remove();  
        btn_linha.remove(); 

        ArrayAgenda.pop();
    }

    
}


let btn = document.getElementById("btn-sub");

btn.addEventListener('click', function( ) {    
    
    AddContatos();
    
})