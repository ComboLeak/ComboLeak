liste = ["mail1", "mail2", "mail3", "mail4"]

for(let i=0; i<liste.length; i++){
    document.getElementById("container").innerHTML += "<span>" + liste[i] + "</span><br><br>"
}