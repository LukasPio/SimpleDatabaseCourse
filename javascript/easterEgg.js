var counter = 0;

document.getElementById("homemDeRespeito").onclick = function(){
    counter++;
    
    if (counter == 10){
        window.open('https://www.jorgestreet.com.br/cursos/mtec-desenvolvimento-de-sistemas/', '_blank');
    }
    if (counter == 15){
        window.open('https://github.com/Liminha07', '_blank');
    }
    if (counter == 20){
        window.open('https://www.youtube.com/@Liminha256', '_blank');
    }
    console.log(counter)
}