const repeatString = function(word, time) {
    if (time < 0) {
        return "Error";
    } else {
        let string = '';
        for (i = 0; i < time; i++) {
            string += word;
        }
        return string
    }
};

repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;

/*
    Explication: 
    On crée une fonction expression et on met comme parametre "word et time".
    On crée une conditon:
    Si time est inférieur à 0. La fonction affiche "Error".
    Sinon, on crée un variable qu'on nome string avec une valeur vide ''. et on fait un boucle ou tant que i est inférieur au time, la fonction affiche dans la valeur de string l'argument du word et le repète jusqu'à ce que i = time.
*/
