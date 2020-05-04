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

// console.log(stepper[0]);

let currentIndex = 0;

// start test function :

StartBtn.addEventListener('click', startTest)
function startTest() {
    stepper[0].classList.remove('select')
    stepper[1].classList.add('select')
    StartBtn.style.display = 'none'
    Préambule.style.display = 'none'
    Quiz.style.display = 'block'
    hideprevious()
    showQuestion(allQuestions[currentIndex])
}

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
                        <input type="radio" name="${input.id}" id="${options}">
                        <label for="${options}">
                        <span>${options}</span> </label>
                    </div>`
        })
    } else {
        OptionsInput.innerHTML += `<input type="number" name="${input.id}" id="${input.name}" min="${input.min}" max="${input.max}" placeholder="${input.min} - ${input.max}">
        <span class="input-span">${input.name}</span>`
    }
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < 21) {
        currentIndex++
        showQuestion(allQuestions[currentIndex])
        folowProgress(currentIndex)
        hideprevious()
        // nextBtn.disabled = true
        if (currentIndex === 21) {
            nextBtn.innerText = 'Terminer'
        } else {
            nextBtn.innerText = 'Suivant'
        }
    }
})

prevBtn.addEventListener('click', () => {
    currentIndex--
    showQuestion(allQuestions[currentIndex])
    folowProgress(currentIndex)
    hideprevious()
    // nextBtn.disabled = true
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
