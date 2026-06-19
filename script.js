// Identity et afficher une "cartie d'identité" prenom nom age


//#region getElement
// const mail = document.getElementById("mailUser");
// const pwd = document.querySelector(".pwdUser");
// const pres = document.querySelector(".pres");
// const btn = document.getElementById("btn"); 
// //#endregion

// btn.onclick = () => {
//     mail.classList.remove("shadow","border" ); // remove multiple class
//     //mail.classList.remove(...mail.classList); //remove toute les class
//     // mail.classList.add("shadow");
// }
// pwd.addEventListener("change",(e)=>{
//     if(e.target.value.length>3){
//         pwd.classList.add("green");
//         pwd.classList.remove("red");
//     }else{
//         pwd.classList.add("red");
//     }
// })




// btn.onclick = () => {
//     p.innerHTML = `Nom : ${name.value} <br> Age : ${age.value} <br> Ville : ${city.value}`;
// }

// function creerId(){
//     p.innerHTML = `Nom : ${name.value} <br> Age : ${age.value} <br> Ville : ${city.value}`;
// };

// function sePresenter(){
//     p.innerHTML = `Bonjour je m'appelle ${name.value}
//     Je suis en formation Développeur Web.
//     J'habite à ${city.value}`
//     pres.classList.add("presHidden");
// }


//Bonjour, je m'appelle "...".
//Je suis en formation Développeur Web.
//J'habite à .... .

//Calculer un devis et une tva 



//calculer la moyenne des notes .

// const inp = document.querySelector("input");


// inp.addEventListener("change",(e) => {
//     if(e.target.value === "vert"){
//         inp.classList.remove(...inp.classList);
//         inp.classList.add("green")
//     }else if(e.target.value ==="rouge"){
//         inp.classList.remove(...inp.classList);
//         inp.classList.add('red');
//     }else if(e.target.value === "bleu"){
//         inp.classList.remove(...inp.classList);
//         inp.classList.add('blue')
//     }else{
//         inp.classList.remove(...inp.classList);
//     }
// })


//Simuler un panier d'achat avec des articles et leurs prix, puis calculer le total et la TVA applicable.

const bask = document.querySelectorAll(".panier");
const btn = document.querySelector("button");
const p = document.querySelector("p");
const total = document.getElementById("result");
let result = "Vous avez choisis : <br>";
let tot= 0;

btn.addEventListener("click",()=>
{
    tot += bask[1].value*bask[2].value*1.21;
    result +=`${bask[0].value} au prix de ${bask[1].value} htva x ${bask[2].value} pour un total de ${bask[1].value*bask[2].value*1.21} TVAC <br>`
    p.innerHTML= result
    total.innerHTML = tot;
})
