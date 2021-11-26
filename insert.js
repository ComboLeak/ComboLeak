liste = ["kamilpro@interia.eu:1973kamil", "oliorz2004@interia.pl:monika35", "pawelstrusz@interia.pl:bucuskot22", "pawelstrusz@interia.pl:zuziaela15"]

for(let i=0; i<liste.length; i++){
    document.getElementById("container").innerHTML += "<span>" + liste[i] + "</span><br><br>"
}
