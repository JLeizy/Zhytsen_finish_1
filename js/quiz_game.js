const questions = [
    {
        question: "В месте, где плач земли слился с лучом, мне дали силу, чтоб стать высоты лучом. Кормил я тела, врачевал души раны, но сорванный жадно — стал прахом и раной. Что Жыцень вручил, чтоб мир обновить? Кто преданность духам сумел сохранить?",
        answers: [
            { text: "Зерно из слезы земли и солнечного луча", correct: true },
            { text: "Соломенная кукла с лицом Велены", correct: false },
            { text: "Священный дуб из рощи", correct: false },
            { text: "Чумной колос Тугора", correct: false }
        ],
        hint: "Дар, рождённый светом и скорбью, чья потеря обрекла племя на страдания. Его хранила та, чьи ладони врачевали раны."
    },
    {
        question: "На краю болот, где топи шепчут с тенями, стоял идол с глазами из камня чёрного. Вор, вырвав один, смолой был наказан, а бог превратил его в стражника вечного. Что украл Радогост, чтоб выковать меч? Чью утрату боги не смогли сберечь?",
        answers: [
            { text: "Зёрна овса для даров", correct: false },
            { text: "Священный меч из капища", correct: false },
            { text: "Обсидиановый глаз идола", correct: true },
            { text: "Чёрную смолу из глазницы", correct: false }
        ],
        hint: "Этот символ всевидения был утрачен из-за жажды силы. Его разрушение пробудило гнев богов и превратило вора в вечного стража."
    },
    {
        question: "В год, когда чума косила сильней, чем серпы, явился жнец с косой в лунном свете. Он губил колосья, но дал сиротке зёрна, что проросли на могилах белым звоном. Чей дар силу давал лишь тем, кто делился крошкой с голодными? Что посеяла Марьяна, чтоб смерть превратить в жизнь?",
        answers: [
            { text: "Соломенную шляпу жнеца", correct: false },
            { text: "Зёрна с могил от Жыценя", correct: true },
            { text: "Серп незримого лезвия", correct: false },
            { text: "Белые колосья-саваны", correct: false }
        ],
        hint: "Эти зёрна рождались там, где кончается путь, а их хлеб крепил дух лишь щедрых. Их белизна — цвет памяти, а звон — голос ушедших."
    },
    {
        question: "В селении лжи, где мельник пепел в муку подмешал, слепой нищий грудь разорвал — сердце-колос в реку бросил, чтоб правда грязь смыла. Грешник в чешую облечён, а под ивой звёздный звон. Что в воду кинул Жыцень, чтобы ложь стала видна как день?",
        answers: [
            { text: "Глиняные таблички с именами", correct: false },
            { text: "Звёзды из дупла ивы", correct: false },
            { text: "Сердце-колос с росой на зубцах", correct: true },
            { text: "Пепел из мешка Гривоя", correct: false }
        ],
        hint: "Оно билось в груди, как зерно в ветрах, а его потеря обнажила тайны. Теперь под ивой его голос стучит, отсчитывая вечность."
    },
    {
        question: "Раз в семь лет, когда багровая луна зовёт Жыценя на танец, нивы волнуются, а на полях остаются круги примятой пшеницы — словно следы босых ног, опалённых звёздами. Что бог оставляет, чтоб девушки сплели оберег, хранящий от бурь?",
        answers: [
            { text: "Следы ног, обожжённые звёздной пылью", correct: true },
            { text: "Огненные змейки с межей", correct: false },
            { text: "Не Глиняные кувшины с мёдом", correct: false },
            { text: "Слепоту пастуха Лешка", correct: false }
        ],
        hint: "Эти отпечатки — память о божественном хороводе. Их вплетают в талисманы, чтобы слышать песню Жыценя в грозу."
    },
    {
        question: "На опушке Чёрного леса, где пчёлы с цветами-оборотнями пир вели, бортник украл у бога золотой серп. Мёд стал смолой, рой — мошкарой с ликами скорби, а вор — стражем дупла, где жужжат проклятья. Что Ведогон спрятал в дубе, за что обрёл вечный дозор?",
        answers: [
            { text: "Мошкару с человечьими лицами", correct: false },
            { text: "Золотую пряжку в форме серпа", correct: true },
            { text: "Смолу из испорченных сот", correct: false },
            { text: "Горсть полбы для путников", correct: false }
        ],
        hint: "Она была выкована из солнечного металла, чтобы напоминать о жатве. Её кража смешала сладость труда с горечью вечного караула."
    },
    {
        question: " Когда река Сож, взбешённая жарой, вышла из берегов, Жыцень бился с водяным духом Воданом три дня. Их договор гласил: река дарит ил, но требует дар. Что люди бросают в воду, чтобы зерно не проросло корнями-удавками?",
        answers: [
            { text: "Пшеничные ленты из потока", correct: false },
            { text: "Первый каравай нового урожая", correct: true },
            { text: "Ядовитые грибы с берегов", correct: false },
            { text: "Рыбьи скелеты из пучин", correct: false }
        ],
        hint: "Этот хлеб — не еда, а ключ от соглашенья. Его крошки — плата воде за то, чтобы земля дышала."
    },
    {
        question: "В деревне, где говорят шелестом листьев и стуком камней, немой жнец ударил серпом по валуну. Звука не было, но враги упали, хватаясь за уши, а их мечи проросли ежевикой. Что Жыцень использовал, чтобы победить захватчиков, не проронив ни слова?",
        answers: [
            { text: "Шелест листьев из Глухомани", correct: false },
            { text: "Беззвучный удар серпа по камню", correct: true },
            { text: "Глаза цвета спелой полбы у детей", correct: false },
            { text: "Щиты-гнёзда для жаворонков", correct: false }
        ],
        hint: "Он бил по тишине, и тишина ответила. То, что не слышат уши, разрывает сердца врагов и дарит земле голос."
    },
    {
        question: "Перед уходом в вечность Жыцень завещал сплести сноп из колосьев, что пережили засуху, потоп и град. Его поставили на перекрёстке трёх дорог, где он стоит нетронутый бурями. Что защищает деревни от голода, но станет смертью богу, если его сжечь в страхе?",
        answers: [
            { text: "Кратер вулкана с ростками", correct: false },
            { text: "Искры-светляки из грозы", correct: false },
            { text: "Сноп из колосьев-испытаний", correct: true },
            { text: "Ежевика с шипами из обсидиана", correct: false }
        ],
        hint: "Он сплетён из стойкости, а его пламя — гибель надежды. Даже шипы на страже — не от людей, а от слабости."
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = new Array(questions.length).fill(null);

function initQuiz() {
    const container = document.querySelector('.quiz-slides');
    container.innerHTML = '';
    
    questions.forEach((q, index) => {
        const slide = document.createElement('div');
        slide.className = `quiz-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <h3 class="question-text">${q.question}</h3>
            <div class="answers-container">
                ${q.answers.map((a, i) => `
                    <button class="answer-btn" 
                            onclick="selectAnswer(${index}, ${i})">
                        ${a.text}
                    </button>
                `).join('')}
            </div>
        `;
        container.appendChild(slide);
    });
    
    updateControls();
    updateProgressBar();
}

function selectAnswer(questionIndex, answerIndex) {
    const buttons = document.querySelectorAll(`.quiz-slide:nth-child(${questionIndex + 1}) .answer-btn`);
    const isCorrect = questions[questionIndex].answers[answerIndex].correct;
    
    buttons.forEach(btn => btn.disabled = true);
    buttons[answerIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    
    userAnswers[questionIndex] = answerIndex;
    if(isCorrect) score++;
    
    updateControls();
    checkCompletion();
}

function updateControls() {
    document.querySelector('.slide-counter').textContent = 
        `Вопрос ${currentQuestion + 1}/${questions.length}`;

    document.querySelector('.prev-btn').disabled = currentQuestion === 0;
    document.querySelector('.next-btn').disabled = 
        userAnswers[currentQuestion] === null || currentQuestion === questions.length - 1;
}

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.querySelector('.progress-fill').style.width = `${progress}%`;
}

function checkCompletion() {
    if(userAnswers.every(answer => answer !== null)) {
        showResult();
    }
}

function prevQuestion() {
    if(currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function nextQuestion() {
    if(currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    }
}

function showQuestion() {
    document.querySelectorAll('.quiz-slide').forEach((slide, index) => {
        slide.classList.toggle('active', index === currentQuestion);
    });
    updateControls();
    updateProgressBar();
}

function showHint() {
    const hintText = document.querySelector('.hint-text');
    hintText.textContent = questions[currentQuestion].hint;
    hintText.classList.remove('hidden');
    setTimeout(() => hintText.classList.add('hidden'), 3000);
}

function showResult() {
    document.querySelector('.quiz-slides').classList.add('hidden');
    document.querySelector('.quiz-controls').classList.add('hidden');
    const result = document.querySelector('.quiz-result');
    result.classList.remove('hidden');
    
    document.querySelector('.result-score').textContent = `${score}/${questions.length}`;
    document.querySelector('.result-text').textContent = getResultText(score);
}

function getResultText(score) {
    if(score === 9) return "🎉 Ты взрастил сноп из зёрен, что пережили потопы и засуху. Жыцень стучит в твоей груди, как колос о ветер, а дороги мёртвых, живых и нерождённых сплелись в твоих ладонях. Теперь ты — страж урожая, чьё имя прорастёт в легендах звёздной пылью на полях вечности.  ";
    if(score >= 6) return "🌾 Ты собрал пол-урожая, но забыл, что колос зреет в тишине. Пройди тропой, где корни помнят голод, и научись танцу дождя у духов межей. Жатва близка — но серп ещё не заточен. ";
    if(score >= 3) return "🌱 Твои зёрна ещё в почве — не все всходы пробивают камни. Слушай шепот земли, а не рёв бурь. Жыцень даёт урожай лишь тем, кто сеет вопреки страху. ";
    return "🌷 Попробуйте еще раз, весна того стоит!";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers.fill(null);
    
    const slidesContainer = document.querySelector('.quiz-slides');
    slidesContainer.innerHTML = '';
    
    document.querySelector('.quiz-result').classList.add('hidden');
    document.querySelector('.quiz-controls').classList.remove('hidden');
    
    initQuiz();
    updateProgressBar();
    updateControls();
}

document.addEventListener('DOMContentLoaded', initQuiz);