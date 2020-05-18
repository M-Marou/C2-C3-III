const allQuestions=[
    {
        question:'Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?',
        input : {
            id : 'Q1',
            type : 'radio',
            options:['Oui', 'Non']
        }
    },
    {
        question:'Quelle est votre température corporelle ?',
        input : {
            id : 'Q2',
            type : 'number',
            name : 'degrés',
            min: '34',
            max: '42',
        }
    },
    {
        question:'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',
        input : {
            id : 'Q3',
            type : 'radio',
            options:['Oui', 'Non'],
        }
    },
    {
        question:'Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?',
        input : {
            id : 'Q4',
            type : 'radio',
            options:['Oui', 'Non']
        }
    },
    {
        question:'Ces derniers jours, avez-vous un mal de gorge ?',
        input : {
            id : 'Q5',
            type : 'radio',
            options:['Oui', 'Non']
        }
    },
    {
        question:'Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.',
        input : {
            id : 'Q6',
            type : 'radio',
            options:['Oui', 'Non']
        }
    },
    {
        question:'Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?',
        input : {
            id : 'Q7',
            type : 'radio',
            options:['Oui', 'Non']
        }
    },
    {
        question:'Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?',
        input : {
            id : 'Q8',
            type : 'radio',
            options:['Oui', 'Non']
        }
    },
    {
        question:'Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',
        input : {
            id : 'Q9',
            type : 'radio',
            options:['Oui', 'Non']
        }
    },
    {
        question:'Actuellement, comment vous vous sentez ?',
        input : {
            id : 'Q10',
            type : 'radio',
            options:['Bien', 'Assez Bien', 'Fatiqué(e)', 'Trés fatigué(e)']
        }
    },
    {
        question:'Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.',
        input : {
            id : 'Q11',
            type : 'number',
            name : 'ans',
            min: '15',
            max: '110',
        }
    },
    {
        question:'Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',
        input : {
            id : 'Q12',
            type : 'number',
            name : 'kg',
            min: '20',
            max: '250',
        }
    },
    {
        question:'Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',
        input : {
            id : 'Q13',
            type : 'number',
            name : 'cm',
            min: '80',
            max: '250',
        }
    },
    {
        question:'Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?',
        input : {
            id : 'Q14',
            type : 'radio',
            options:['Oui', 'Non']
        }
    },
    {
        question:'Êtes-vous diabétique ?',
        input : {
            id : 'Q15',
            type : 'radio',
            options:['Oui', 'Non']
        }
    },
    {
        question:'Avez-vous ou avez-vous eu un cancer ?',
        input : {
            id : 'Q16',
            type : 'radio',
            options:['Oui', 'Non']
        }
    },
    {
        question:'Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?',
        input : {
            id : 'Q17',
            type : 'radio',
            options:['Oui', 'Non']
        }
    },
    {
        question:'Avez-vous une insuffisance rénale chronique dialysée ?',
        input : {
            id : 'Q18',
            type : 'radio',
            options:['Oui', 'Non']
        }
    },
    {
        question:'Avez-vous une maladie chronique du foie ?',
        input : {
            id : 'Q19',
            type : 'radio',
            options:['Oui', 'Non']
        }
    },
    {
        question:'Êtes-vous enceinte ?',
        input : {
            id : 'Q20',
            type : 'radio',
            options:['Oui', 'Non', 'Homme']
        }
    },
    {
        question:'Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?',
        input : {
            id : 'Q21',
            type : 'radio',
            options:['Oui', 'Non']
        }
    },
    {
        question:'Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).',
        input : {
            id : 'Q22',
            type : 'radio',
            options:['Oui', 'Non']
        }
    }
];

const StartBtn = document.querySelector('.StartBtn')
const CurrentQuestion = document.querySelector('.question')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const Q_Box = document.querySelector('.quiz__questions')
const OptionsInput = document.querySelector('.OptionsInput')
const Préambule = document.querySelector('.info')
const Quiz = document.querySelector('.quiz')
const QuestionNumber = document.querySelector('.quiz__progress--number')
const progressBar = document.querySelector('.bar')
const stepper = document.querySelectorAll('.stepper h3')
const quiznote = document.querySelector('.quiz__note')
const result = document.querySelector('.info h2')
const resultMessage = document.querySelectorAll('.info p')

let currentIndex = 0;

// button disabled function : button disabled when inputs are empty!

Q_Box.addEventListener('change', (e) => {
    const input = e.target
    if (input.type === 'number') {
        const number = parseFloat(input.value)
        if (number >= input.min && number <= input.max) {
            options[input.name] = input.value
            console.log(options);
            nextBtn.disabled = false
        } else {
            nextBtn.disabled = true
        }
    } else {
        options[input.name] = input.id
        console.log(options);
        nextBtn.disabled = false
    }
})


// start test function :

StartBtn.addEventListener('click', () => {
    stepper[0].classList.remove('select')
    stepper[1].classList.add('select')
    StartBtn.style.display = 'none'
    Préambule.style.display = 'none'
    Quiz.style.display = 'block'
    // nextBtn.disabled = true
    hideprevious()
    hidenote()
    showQuestion(allQuestions[currentIndex])
})

// display question function :

function showQuestion(question) {

    CurrentQuestion.innerText = question.question
    OptionsInput.innerHTML = ''
    const OpInp = question.input.options
    const input = question.input

    if (question.input.type === 'radio') {
        OpInp.forEach(options => {
            OptionsInput.innerHTML += `
                    <div>
                        <label for="${options}" class="radio">
                        <input class="radio__input" type="radio" name="${input.id}" id="${options}">
                        <div class="radio__radio"></div>
                        ${options}
                        </label>
                    </div>`
        })
    } else {
        OptionsInput.innerHTML += `<div class="number">
        <input type="number" name="${input.id}" id="${input.name}" min="${input.min}" max="${input.max}" placeholder="${input.min} - ${input.max}">
        <span class="input-span">${input.name}</span>
        </div>`
    }
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < 21) {
        currentIndex++
        showQuestion(allQuestions[currentIndex])
        folowProgress(currentIndex)
        hideprevious()
        hidenote()
        nextBtn.disabled = true
        if (currentIndex === 21) {
            nextBtn.innerText = 'Terminer'
            nextBtn.classList.add('result')
            const resultBtn = document.querySelector('.result')
            resultBtn.addEventListener('click' , Results)
        } else {
            nextBtn.innerText = 'Suivant'
        }
    }
})

// nextBtn.addEventListener('click', () => {
//     const isChecked = document.querySelector('input[type=radio]:checked');
//     // const NumberChecked = document.querySelector('input[type=number].value');
//     if (!isChecked) {
//         alert('Please select an option !');return;
//     }
//     // if (!NumberChecked) {
//     //     alert('Please select an option !!');return;
//     // }
//     if (currentIndex < 21) {
//         currentIndex++
//         showQuestion(allQuestions[currentIndex])
//         folowProgress(currentIndex)
//         hideprevious()
//         hidenote()
//     // nextBtn.disabled = true
//     if (currentIndex === 21) {
//         nextBtn.innerText = 'Terminer'
//     } else {
//         nextBtn.innerText = 'Suivant'
//     }
// }
// })

// previous button function : 

prevBtn.addEventListener('click', () => {
    currentIndex--
    showQuestion(allQuestions[currentIndex])
    folowProgress(currentIndex)
    hideprevious()
    hidenote()
    nextBtn.disabled = true
    if (currentIndex === 21) {
        nextBtn.innerText = 'Terminer'
    } else {
        nextBtn.innerText = 'Suivant'
    }
})

// hide previous button function :

function hideprevious() {
    if (currentIndex === 0) {
        prevBtn.classList.add('hide')
    } else {
        prevBtn.classList.remove('hide')
    }
}
// follow question progress function :

function folowProgress(number) {
    const currentNumber = number + 1
    QuestionNumber.innerText = currentNumber
    progressBar.style.width = `calc(${currentNumber} * calc(100% / 22))`

}
// hide quiz note function : 

function hidenote() {
    if (currentIndex >= 1) {
        quiznote.style.display = 'none'
    } else {
        quiznote.style.display = 'block'
    }
}

// show results function : 

function ShowResults() {
    stepper[1].classList.remove('select')
    stepper[2].classList.add('select')
    Préambule.style.display = 'block'
    StartBtn.style.display = 'block'
    Quiz.style.display = 'none'
    hidenote()
    result.innerText = 'Résultats'
    StartBtn.textContent = ' Recommencer le test '
    StartBtn.addEventListener('click', () => {
        window.location.reload()
    })
}

// Algo function : 

let options = {}

let severity = 0

function Results() {
    if (((options['Q1'] === 'Oui' || options['Q3'] === 'Oui') && (options['Q5'] === 'Oui' || options['Q3'] === 'Oui') && (options['Q4'] === 'Oui' || options['Q1'] === 'Oui') && options['Q6'] === 'Oui') && (options['Q14'] === 'Non' && options['Q15'] === 'Non' && options['Q16'] === 'Non' && options['Q17'] === 'Non' && options['Q18'] === 'Non' && options['Q19'] === 'Non' && ( options['Q20'] === 'Non' || options['Q20'] === 'Homme' ) && options['Q21'] === 'Non' && options['Q22'] === 'Non' &&  options['Q11'] < 50 )) {

        resultMessage[0].innerText = 'Nous vous conseillons de rester à votre domicile et de contacter votre médecin' +
                ' en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouv' +
                'eau l’application pour réévaluer vos symptômes'
        resultMessage[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Pren' +
                'ez votre température deux fois par jour. Rappel des mesures d’hygiène.'
        resultMessage[0].style.color = '#369D53'
    }
    if  (((options['Q1'] === 'Oui' || options['Q3'] === 'Oui') && (options['Q5'] === 'Oui' || options['Q3'] === 'Oui') && (options['Q4'] === 'Oui' || options['Q1'] === 'Oui') && options['Q6'] === 'Oui') && ((options['Q14'] === 'Non' && options['Q15'] === 'Non' && options['Q16'] === 'Non' && options['Q17'] === 'Non' && options['Q18'] === 'Non' && options['Q19'] === 'Non' && ( options['Q20'] === 'Non' || options['Q20'] === 'Homme' ) && options['Q21'] === 'Non' && options['Q22'] === 'Non' && options['Q11'] > 50) || ((options['Q2'] >= 39) || (options['Q7'] === 'Oui') || (options['Q10'] === ' Fatigué(e)') || (options['Q10'] === 'Très fatigué')))) {

        resultMessage[0].innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
        "cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p" +
        "our s’alimenter ou boire pendant plus de 24h apparaissent."
        resultMessage[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Pren' +
        'ez votre température deux fois par jour. Rappel des mesures d’hygiène.'
         resultMessage[0].style.color = '#369D53'
    }
    if (((options['Q1'] === 'Oui' || options['Q3'] === 'Oui') && (options['Q5'] === 'Oui' || options['Q3'] === 'Oui') && (options['Q4'] === 'Oui' || options['Q1'] === 'Oui') && options['Q6'] === 'Oui') && ((options['Q14'] === 'Oui' || options['Q15'] === 'Oui' || options['Q16'] === 'Oui' || options['Q17'] === 'Oui' || options['Q18'] === 'Oui' || options['Q19'] === 'Oui' || options['Q20'] === 'Oui'  || options['Q21'] === 'Oui' || options['Q22'] === 'Oui') && (options['Q7'] === 'Non' && options['Q8'] === 'Non' && options['Q17'] === 'Non' && options['Q10'] === 'Assez bien' && options['Q10'] === 'Bien'))){

        resultMessage[0].innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
        "cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p" +
        "our s’alimenter ou boire pendant plus de 24h apparaissent."
        resultMessage[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Pren' +
        'ez votre température deux fois par jour. Rappel des mesures d’hygiène.'
         resultMessage[0].style.color = '#369D53'
    }
   if (((options['Q1'] === 'Oui' || options['Q3'] === 'Oui') && (options['Q5'] === 'Oui' || options['Q3'] === 'Oui') && (options['Q4'] === 'Oui' || options['Q1'] === 'Oui') && options['Q6'] === 'Oui') && (options['Q14'] === 'Oui' || options['Q15'] === 'Oui' || options['Q16'] === 'Oui' || options['Q17'] === 'Oui' || options['Q18'] === 'Oui' || options['Q19'] === 'Oui' || options['Q20'] === 'Oui'  || options['Q21'] === 'Oui' || options['Q22'] === 'Oui') && (options['Q2'] >= 39 || options['Q7'] === 'Oui' || options['Q10'] === 'Très fatigué' || options['Q10'] === 'Fatigué(e)' )){

    resultMessage[0].innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
    "cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p" +
    "our s’alimenter ou boire pendant plus de 24h apparaissent."
    resultMessage[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Pren' +
    'ez votre température deux fois par jour. Rappel des mesures d’hygiène.'
     resultMessage[0].style.color = '#369D53'
   }
    if (((options['Q1'] === 'Oui' || options['Q3'] === 'Oui') && (options['Q5'] === 'Oui' || options['Q3'] === 'Oui') && (options['Q4'] === 'Oui' || options['Q1'] === 'Oui') && options['Q6'] === 'Oui') && (options['Q14'] === 'Oui' || options['Q15'] === 'Oui' || options['Q16'] === 'Oui' || options['Q17'] === 'Oui' || options['Q18'] === 'Oui' || options['Q19'] === 'Oui' || options['Q20'] === 'Oui'  || options['Q21'] === 'Oui' || options['Q22'] === 'Oui') && ((options['Q2'] >= 39 && options['Q7'] === 'Oui') || (options['Q2'] >= 39 && options['Q10'] === 'Fatigué(e)') || (options['Q2'] >= 39 && options['Q10'] === 'Très fatigué') || (options['Q7'] === 'Oui' && options['Q10'] === 'Fatigué(e)') || (options['Q7'] === 'Oui' && options['Q10'] === 'Très fatigué'))){

        resultMessage[0].innerText = "Appelez le 141"
        resultMessage[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Pren' +
                'ez votre température deux fois par jour. Rappel des mesures d’hygiène.'
        resultMessage[0].style.color = '#369D53'

    }
if (((options['Q1'] === 'Oui' && options['Q3'] === 'Oui') && (options['Q14'] === 'Non' && options['Q15'] === 'Non' && options['Q16'] === 'Non' && options['Q17'] === 'Non' && options['Q18'] === 'Non' && options['Q19'] === 'Non' && ( options['Q20'] === 'Non' || options['Q20'] === 'Homme' ) && options['Q21'] === 'Non' && options['Q22'] === 'Non')) && (options['Q7'] === 'Non' && options['Q8'] === 'Non' && options['Q17'] === 'Non' && options['Q10'] === 'Assez bien' && options['Q10'] === 'Bien') || ((options['Q2'] >= 39 || options['Q7'] === 'Oui' || options['Q10'] === 'Très fatigué' || options['Q10'] === 'Fatigué(e)') && options['Q2'] <= 35,4 && options['Q17'] === 'Non' && options['Q8'] === 'Non')) {

    resultMessage[0].innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
    "cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p" +
    "our s’alimenter ou boire pendant plus de 24h apparaissent."
    resultMessage[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Pren' +
    'ez votre température deux fois par jour. Rappel des mesures d’hygiène.'
     resultMessage[0].style.color = '#369D53'
}
if ((options['Q1'] === 'Oui' && options['Q3'] === 'Oui') && (options['Q14'] === 'Non' && options['Q15'] === 'Non' && options['Q16'] === 'Non' && options['Q17'] === 'Oui' || options['Q18'] === 'Oui' || options['Q19'] === 'Oui' || options['Q20'] === 'Oui'  || options['Q21'] === 'Oui' || options['Q22'] === 'Oui') && options['Q7'] === 'Non' && options['Q8'] === 'Non' && options['Q17'] === 'Non' && options['Q10'] === 'Assez bien' && options['Q10'] === 'Bien') {

    resultMessage[0].innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
    "cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p" +
    "our s’alimenter ou boire pendant plus de 24h apparaissent."
    resultMessage[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Pren' +
    'ez votre température deux fois par jour. Rappel des mesures d’hygiène.'
     resultMessage[0].style.color = '#369D53'

}
if ((options['Q1'] === 'Oui' && options['Q3'] === 'Oui') && (options['Q14'] === 'Non' && options['Q15'] === 'Non' && options['Q16'] === 'Non' && options['Q17'] === 'Oui' || options['Q18'] === 'Oui' || options['Q19'] === 'Oui' || options['Q20'] === 'Oui'  || options['Q21'] === 'Oui' || options['Q22'] === 'Oui') && (options['Q2'] >= 39 || options['Q7'] === 'Oui' || options['Q10'] === 'Très fatigué' || options['Q10'] === 'Fatigué(e)')) {

    resultMessage[0].innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
    "cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p" +
    "our s’alimenter ou boire pendant plus de 24h apparaissent."
    resultMessage[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Pren' +
    'ez votre température deux fois par jour. Rappel des mesures d’hygiène.'
     resultMessage[0].style.color = '#369D53'
}
if (((options['Q1'] === 'Oui' && options['Q3'] === 'Oui') && (options['Q14'] === 'Oui' || options['Q15'] === 'Oui' || options['Q16'] === 'Oui' || options['Q17'] === 'Oui' || options['Q18'] === 'Oui' || options['Q19'] === 'Oui' || options['Q20'] === 'Oui'  || options['Q21'] === 'Oui' || options['Q22'] === 'Oui')) && ((options['Q2'] >= 39 && options['Q7'] === 'Oui') || (options['Q2'] >= 39 && options['Q10'] === 'Fatigué(e)') || (options['Q2'] >= 39 && options['Q10'] === 'Très fatigué') || (options['Q7'] === 'Oui' && options['Q10'] === 'Fatigué(e)') || (options['Q7'] === 'Oui' && options['Q10'] === 'Très fatigué'))) {

    resultMessage[0].innerText = "Appelez le 141"
    resultMessage[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Pren' +
            'ez votre température deux fois par jour. Rappel des mesures d’hygiène.'
    resultMessage[0].style.color = '#FF0000'
}
if ((options['Q1'] === 'Oui' ||options['Q3'] === 'Oui'  || options['Q5'] === 'Oui' || options['Q4'] === 'Oui') &&(options['Q7'] === 'Non' && options['Q8'] === 'Non' && options['Q17'] === 'Non' && options['Q10'] === 'Assez bien' && options['Q10'] === 'Bien')){

    resultMessage[0].innerText = 'Votre situation ne relève probablement pas du Covid-19.' +
    'Consultez votre médecin au moindre doute.'
    resultMessage[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Pren' +
    'ez votre température deux fois par jour. Rappel des mesures d’hygiène.'
    resultMessage[0].style.color = '#369D53'

}
if ((options['Q1'] === 'Oui' ||options['Q3'] === 'Oui'  || options['Q5'] === 'Oui' || options['Q4'] === 'Oui') && ((options['Q14'] === 'Oui' || options['Q15'] === 'Oui' || options['Q16'] === 'Oui' || options['Q17'] === 'Oui' || options['Q18'] === 'Oui' || options['Q19'] === 'Oui' ||options['Q20'] === 'Oui'  || options['Q21'] === 'Oui' || options['Q22'] === 'Oui') || (options['Q7'] === 'oui' && options['Q8'] === 'oui' && options['Q17'] === 'oui' && options['Q10'] === 'Très fatigué' && options['Q10'] === 'Fatigué(e)' ) )) {

    resultMessage[0].innerText = 'Votre situation ne relève probablement pas du Covid-19.' +
    'Un avis médical est recommandé. Au moindre doute, appelez le 141.'
    resultMessage[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Pren' +
    'ez votre température deux fois par jour. Rappel des mesures d’hygiène.'
    resultMessage[0].style.color = '#369D53'
}
if ((options['Q1'] === 'Non') && (options['Q3'] === 'Non') && (options['Q4'] === 'Non') && (options['Q5'] === 'Non') && (options['Q6'] === 'Non')){

    resultMessage[0].innerText = 'Votre situation ne relève probablement pas du Covid-19.' +
    'N’hésitez pas à contacter votre médecin en cas de doute.' + 'Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation.' + 'Pour toute information concernant le Covid-19 allez vers la page d’accueil.'
    resultMessage[1].innerText = 'Restez chez vous au maximum en attendant que les symptômes disparaissent. Pren' +
    'ez votre température deux fois par jour. Rappel des mesures d’hygiène.'
    resultMessage[0].style.color = '#369D53'
}
    ShowResults(severity)
}