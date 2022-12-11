// logique de calcul des résultats
// variable pour facilier les actions et les outputs
var buttonSubmit = document.getElementById('survey__form__submit');
var buttonReset = document.getElementById('survey__reset');
var surveyForm = document.getElementById('survey__form');
var surveyResult = document.getElementById('survey__result');
var surveyPersonOutput = document.getElementById('survey__person__output');
var surveyScoreOutput1 = document.getElementById('survey__score__output1');
var surveyScoreOutput2 = document.getElementById('survey__score__output2');
var surveyScoreOutput3 = document.getElementById('survey__score__output3');

var total1 = 0;
var total2 = 0;
var total3 = 0;

var myChart = null;
var initChart = false;
//quand le formulaire est envoyer
surveyForm.addEventListener('submit' , function(event){
    event.preventDefault();
    //je recupére la liste des réponses sélectionnées
    var answers1 = document.querySelectorAll('.survey__form__input__radio1:checked');
    var answers2 = document.querySelectorAll('.survey__form__input__radio2:checked');
    var answers3 = document.querySelectorAll('.survey__form__input__radio3:checked');
    //je récupère les infos personelles
    var sex = document.querySelector('.survey__form__input__sex:checked').value;
    var name = document.getElementById('name').value;
    var fname = document.getElementById('firstname').value;

    //pour chaque réponses
    answers1.forEach(element => {
        //j'ajoute au total la valeur de l'input que je force en int
        // pcq les valeur des input sont des chaine de char
        // et en JS si on ajouter "90" + "3" => "903"
        total1 += parseFloat(element.value);
    });
    answers2.forEach(element => {
        //j'ajoute au total la valeur de l'input que je force en int
        // pcq les valeur des input sont des chaine de char
        // et en JS si on ajouter "90" + "3" => "903"
        total2 += parseFloat(element.value);
    });
    answers3.forEach(element => {
        //j'ajoute au total la valeur de l'input que je force en int
        // pcq les valeur des input sont des chaine de char
        // et en JS si on ajouter "90" + "3" => "903"
        total3 += parseFloat(element.value);
    });
    //je mets les valeurs dans les éléments de sortie
    var totalRounded1 = Math.round((total1 / 55) * 100);
    var totalRounded2 = Math.round((total2 / 25) * 100);
    var totalRounded3 = Math.round((total3 / 25) * 100);

    surveyPersonOutput.innerText = sex + ' ' + name + ' ' +fname;
    surveyScoreOutput1.innerText = totalRounded1;
    surveyScoreOutput2.innerText = totalRounded2;
    surveyScoreOutput3.innerText = totalRounded3;

    /*// capture data to .csv file
    let form = new FormData(document.getElementById('survey__form'));
    fetch("./php/dataCollection.php", {
      method: "POST",
      body: form
    })*/

    //ajout et remove de class pour rendre des parties visible ou non
    surveyForm.classList.add('d-none');
    surveyResult.classList.remove('d-none');

    //Affichage dynamique de la bonne réponse
    if( total1 < 17) {
        var e = document.getElementById('q-1-0');
        e.classList.remove('d-none');
    } else if (total1 >= 17 && total1 < 33) {
        var e = document.getElementById('q-1-1');
        e.classList.remove('d-none');
    }  else {
        var e = document.getElementById('q-1-2');
        e.classList.remove('d-none');
    }

    if( total2 < 8) {
        var e = document.getElementById('q-2-0');
        e.classList.remove('d-none');
    } else if (total2 >= 8 && total2 < 15) {
        var e = document.getElementById('q-2-1');
        e.classList.remove('d-none');
    }  else {
        var e = document.getElementById('q-2-2');
        e.classList.remove('d-none');
    }

    if( total3 < 8) {
        var e = document.getElementById('q-3-0');
        e.classList.remove('d-none');
    } else if (total3 >= 8 && total3 < 15) {
        var e = document.getElementById('q-3-1');
        e.classList.remove('d-none');
    }  else {
        var e = document.getElementById('q-3-2');
        e.classList.remove('d-none');
    }

    // instance & relance le graphique
    var values = [totalRounded1, totalRounded2, totalRounded3];
    if( initChart == false ) {
        initChart = true;
        config.data.datasets[0].data = values;
        myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
    } else {
        myChart.data.datasets[0].data = values;
        myChart.update();
    }
});

buttonReset.addEventListener('click' , function(){
    //reset du formulaire
    surveyForm.reset();
    //ajout et remove de class pour rendre des parties visible ou non
    surveyForm.classList.remove('d-none');
    surveyResult.classList.add('d-none');
});