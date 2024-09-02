var tab = [];
var i = 0; 


function CzyPuste(pole) {
    if (pole === "") {
        return true
    } else {
        return false
    }
}

function CzyLiczba(pole) {
    if (!Number.isNaN(Number.parseInt(pole))) {
        return true
    } else {
        return false        
    }
}

function CzyCheckbox(chb1, chb2, chb3) {                     
    if(chb1.checked || chb2.checked || chb3.checked)  
    {
        return true
    } 
    else 
    {
        return false
        
    }   
}

function CzyRadio(r1, r2) {                          
    if((r1.checked || r2.checked) && !(r1.checked && r2.checked))  
    {
        return true
    } 
    else 
    {
        return false
               
    } 
}

function potwierdz() {
    var imie = document.getElementById("imie");
    var nazwisko = document.getElementById("nazwisko");
    var data = document.getElementById("data");                    
    var ubezpieczenie = document.getElementById("tak");
    var ubezpieczenie2 = document.getElementById("nie");
    var sniadanie = document.getElementById("sniadania");
    var obiad = document.getElementById("obiady");
    var kolacja = document.getElementById("kolacje");
    var dzieci = document.getElementById("liczba");
    var telefon = document.getElementById("telefon");
    var czy_wszystkie = true;

    if (CzyPuste(imie.value)){
        imie.reportValidity();
        czy_wszystkie = false;
    }
    if (CzyPuste(nazwisko.value)){
        nazwisko.reportValidity();
        czy_wszystkie = false;
    }

    if(CzyPuste(data.value)){
        data.reportValidity();
        czy_wszystkie = false;
    }

    if(!CzyLiczba(dzieci.value)){
        dzieci.reportValidity();
        czy_wszystkie = false;
    }

    if(!CzyCheckbox(sniadanie, obiad, kolacja)){
        document.getElementById("uzupelnij2").innerHTML="Proszę wypełnić to pole"
        czy_wszystkie = false;
    }

    if(!CzyRadio(ubezpieczenie, ubezpieczenie2)){
        document.getElementById("uzupelnij").innerHTML="Proszę wypełnić to pole"
        czy_wszystkie = false;
    }

    if(CzyPuste(telefon.value)){
        telefon.reportValidity();
        czy_wszystkie = false;
    }
    
    if(czy_wszystkie == true){
        alert("Dziękujemy za wypełnienie formularza!");
        document.getElementById("f1").submit()
    }
}


function powieksz(x){;
    var okno = document.getElementById("zdjecie");
    okno.src=this.src;
    var okno = document.getElementById("okno");
    okno.style.display = "block";
    
}

function pomniejsz(x){
    var okno = document.getElementById("okno");
    okno.style.display = "none";
}

window.onload = function(){
    var test = document.getElementsByClassName("img");
    for(var i=0; i<test.length; i++) {
        var element = test[i];
        element.onmouseover = powieksz;                                   
        element.onmouseout = pomniejsz; 

    };
    
    
}; 