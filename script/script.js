/* Ultras */
let ultra = 0;


function nbreultra(){
    ultra += 1;
    document.getElementById("ultras").innerHTML = "<p>" + ultra + "</p>";
}

setInterval(nbreultra, 1000);

/* Fan */
let fan = 0;
let echarpe = 1;

function moreecharpe(){
    document.getElementById("btnnbrefan").disabled = true;
    if (ultra >= 1){
        let faninterval = setInterval(addfan, 5000);
        function addfan(){
            fan += (10 * echarpe);
            clearInterval(faninterval);
            document.getElementById("fan").innerHTML = fan;
            document.getElementById("btnnbrefan").disabled = false;
        }
    } else {
        document.getElementById("btnnbrefan").disabled = false;
    }
}

function upgradeecharpe(){
    if (fan >=50 && ultra >= 1){
        fan = fan - 50;
        ultra = ultra - 1;
        echarpe += 1;
        document.getElementById("fan").innerHTML = fan;
        document.getElementById("ultras").innerHTML = ultra;
        document.getElementById("echarpe").innerHTML = echarpe;
        document.getElementById("nbrfan").innerHTML = (echarpe * 10);
    }
}