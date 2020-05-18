(function() 
 {
  var allQuestions=[
    {
        question:'Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?',
        options:['Oui', 'Non'],
    },
    {
        question:'Quelle est votre température corporelle ?',
        options:[''],
    },
    {
        question:'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',
        options:['Oui', 'Non'],
    },
    {
        question:'Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?',
        options:['Oui', 'Non'],
    },
    {
        question:'Ces derniers jours, avez-vous un mal de gorge ?',
        options:['Oui', 'Non'],
    },
    {
        question:'Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.',
        options:['Oui', 'Non'],
    },
    {
        question:'Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?',
        options:['Oui', 'Non'],
    },
    {
        question:'Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?',
        options:['Oui', 'Non'],
    },
    {
        question:'Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',
        options:['Oui', 'Non'],
    },
    {
        question:'Actuellement, comment vous vous sentez ?',
        options:['Bien', 'Assez Bien', 'Fatiqué(e)', 'Trés fatigué(e)'],
    },
    {
        question:'Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.',
        options:[''],
    },
    {
        question:'Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',
        options:[''],
    },
    {
        question:'Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',
        options:[''],
    },
    {
        question:'Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?',
        options:['Oui', 'Non'],
    },
    {
        question:'Êtes-vous diabétique ?',
        options:['Oui', 'Non'],
    },
    {
        question:'Avez-vous ou avez-vous eu un cancer ?',
        options:['Oui', 'Non'],
    },
    {
        question:'Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?',
        options:['Oui', 'Non'],
    },
    {
        question:'Avez-vous une insuffisance rénale chronique dialysée ?',
        options:['Oui', 'Non'],
    },
    {
        question:'Avez-vous une maladie chronique du foie ?',
        options:['Oui', 'Non'],
    },
    {
        question:'Êtes-vous enceinte ?',
        options:['Oui', 'Non', 'Homme'],
    },
    {
        question:'Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?',
        options:['Oui', 'Non'],
    },
    {
        question:'Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).',
        options:['Oui', 'Non'],
    }
];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2> ' + (index + 1) + ' /22</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }


  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  // function displayResult() 
  //   {
  //       var score = $('<p>',{id: 'question'});
  //       var correct = 0;
  //       for (var i = 0; i < selectOptions.length; i++) 
  //       {
  //         if (selectOptions[i] === allQuestions[i].answer) 
  //         {
  //           correct++;
  //         }
  //       }
  //       score.append('You scored ' + correct + ' out of ' +allQuestions.length);
  //       return score;
  // }
})();