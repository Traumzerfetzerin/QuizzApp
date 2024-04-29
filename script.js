let currentQuestion = 0;
let questions = [
    {
        'question': 'Was ist ein Byte?',
        'answer_1': 'Teil der Hardware',
        'answer_2': 'Eine Maßeinheit für Datenmengen',
        'answer_3': 'Programmiersprache',
        'answer_4': 'Ein Bildbearbeitungsprogramm',
        'right_answer': 2,
    },
    {
        'question': 'Vervollständige die Zahlenfolge: 2-7-6-11-10-15-14-?',
        'answer_1': '16',
        'answer_2': '17',
        'answer_3': '18',
        'answer_4': '19',
        'right_answer': 4,
    },
    {
        'question': 'Was bedeutet die Abkürzung IT?',
        'answer_1': 'Intelligenztest',
        'answer_2': 'Informationstechnologie',
        'answer_3': 'Informatik und Technik',
        'answer_4': 'Integrationstaktik',
        'right_answer': 3,
    },
    {
        'question': 'Welches Ergebnis ist korrekt?',
        'answer_1': '502',
        'answer_2': '220',
        'answer_3': '121',
        'answer_4': '402',
        'right_answer': 1,
    },
    {
        'question': 'Was ist eine MAC-Adresse?',
        'answer_1': ' Eine spezielle E-Mail-Adresse auf einem Apple-Macintosh-Rechner',
        'answer_2': 'Eine Reihenfolge aus Zahlen und Buchstaben, die einen Computer eindeutig identifiziert',
        'answer_3': 'Steht für Multiple Access Cache und erlaubt den Zugriff auf verschlüsselte Seiten',
        'answer_4': 'Die Kontaktadresse des Geräteherstellers',
        'right_answer': 2,
    },
    {
        'question': 'Wie lautet der Binärcode für die Dezimalzahl 20?',
        'answer_1': '10101',
        'answer_2': '10011',
        'answer_3': '10110',
        'answer_4': '10100',
        'right_answer': 4,
    },
    {
        'question': 'Till ist älter als Karla, aber jünger als Ole. Ella ist älter als Ole. Ordne die Namen der vier Kinder nach deren Alter. Beginne dabei mit dem Namen des ältesten Kindes.',
        'answer_1': 'Ole, Ella, Till, Karla',
        'answer_2': 'Till, Ella, Ole, Karla',
        'answer_3': 'Ella, Ole, Till, Karla',
        'answer_4': 'Ella, Till, Ole, Karla',
        'right_answer': 3,
    },
];


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1); // letzter Buchstabe

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
    }
}