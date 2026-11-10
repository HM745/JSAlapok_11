const cimElem = document.getElementById("focim")
cimElem.innerText = "Mátrix rendszer"

const statuszElem = document.getElementsByClassName("statusz-szoveg")
console.log(statuszElem.length)

statuszElem[0].innerText = "Rendszer ellenőrzése folyamatban"

statuszElem[1].innerText = "Kapcsolódás a hálózathoz..."

const listaElemek = document.querySelectorAll(".lista-elem")

console.log(listaElemek[0])

listaElemek[1].innerText = "Szerver állapot: ONLINE"

const nevInput = document.querySelector("#jatekos-nev-input")

const eredmenyDiv = document.getElementById("eredmeny")

const inditoGomb = document.querySelector("#indito-gomb")
inditoGomb.addEventListener("click", function(){
    const gombSzovege = inditoGomb.textContent;
    const jatekosNev = nevInput.value;
    eredmenyDiv.textContent = `Üdvözlünk, ${jatekosNev}! Végrehajtott akció: ${gombSzovege}`
})