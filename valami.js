window.addEventListener("load", init);
var autok=[
    {
        auto:"Opel",
        ar: 123456
    },
    {
        auto: "Mercedes",
        ar: 200000
    },
    {
        auto: "Lexus",
        ar: 1000000
    },
    {
        auto: "Porsche",
        ar: 2000000
    },
    {
        auto: "Peugeot",
        ar: 1500500
    }
]
var trTomb=document.querySelectorAll("tr")
/**röviditőfüggvény */
function ID(elem){
    return document.getElementById(elem)
}
function $(elem){
    return document.querySelector(elem);
}
function init(){
    ID("elem").innerHTML=txt;





    /**Formázás js-sel */
    /**inline stíéusok használatával */
    ID("elem").style.color="red";
    var tdTomb=document.querySelectorAll("td");
    for (let index = 0; index < tdTomb.length; index++) {
        tdTomb[index].style.backgroundColor="yellow";
    }
    
    //tdTomb[2].style.color="green";

    $("td:nth-child(2)").style.color="green";
    $("table tr th").style.border="1px dotted pink";
    $("tr").addEventListener("mouseover",hatterszinAllitas);
    $("tr").addEventListener("mouseout",hatterszinLeAllitas);

    
    /**Esemémykezelők */
    /**ha a tr tagek fölé viszem az egeret, akkor változon meg a háttérszín */
    /*for (let index = 0; index < trTomb.length; index++) {
        trTomb[index].addEventListener("mouseover", function hatterszinAllitas(index){
            trTomb[index].style.backgroundColor=("gray");
        })
    }*/
    

}

function hatterszinAllitas(){
    document.querySelector("tr").style.backgroundColor="gray";
    document.querySelector("tr").className="formazas"
}
function hatterszinLeAllitas(){
    document.querySelector("tr").style.backgroundColor="pink";
    document.querySelector("tr").className="";
}

let txt = "";
for (let i = 0; i < autok.length; i++) {
    txt = txt + "<tr><td>"+autok[i].auto+"</td><td>"+autok[i].ar+"</td></tr>"
}



