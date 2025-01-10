const questions = [
            "¿Te sientes orgulloso/a de tus logros?",
            "¿Te das tiempo para cuidar de ti mismo/a?",
            "¿Crees en tu capacidad para superar desafíos?",
            "¿Te enfocas en tus fortalezas más que en tus debilidades?",
            "¿Te permites celebrar tus logros, por pequeños que sean?",
            "¿Te rodeas de personas que te apoyan y valoran?",
            "¿Eres amable contigo mismo/a cuando cometes errores?",
            "¿Reconoces tus cualidades positivas?",
            "¿Te hablas a ti mismo/a con respeto y cariño?",
            "¿Aceptas los cumplidos con gratitud?",
            "¿Confías en tu capacidad para aprender cosas nuevas?",
            "¿Te permites descansar cuando lo necesitas?",
            "¿Te pones metas realistas y alcanzables?",
            "¿Agradeces las cosas buenas de tu vida?",
            "¿Te esfuerzas por mantener una actitud positiva?",
            "¿Evitas compararte constantemente con los demás?",
            "¿Reconoces el progreso que haces día a día?",
            "¿Sabes que mereces ser feliz?",
            "¿Crees que tienes cosas valiosas para aportar?",
            "¿Te rodeas de personas que te inspiran?",
            "¿Te permites sentir emociones sin juzgarte?",
            "¿Te das crédito por tu esfuerzo, incluso si no obtienes el resultado deseado?",
            "¿Evitas ser demasiado perfeccionista contigo mismo/a?",
            "¿Te permites disfrutar del presente?",
            "¿Aceptas que cometer errores es parte del aprendizaje?",
            "¿Te hablas con paciencia y comprensión?",
            "¿Te tomas el tiempo para reconocer tus logros?",
            "¿Te das permiso para pedir ayuda cuando lo necesitas?",
            "¿Reconoces que eres digno/a de amor y respeto?",
            "¿Tomas decisiones pensando en tu bienestar?",
            "¿Valoras tu individualidad y autenticidad?",
            "¿Te permites decir no cuando es necesario?",
            "¿Aceptas los aspectos de ti mismo/a que no puedes cambiar?",
            "¿Te esfuerzas por mejorar sin ser demasiado crítico/a contigo mismo/a?",
            "¿Te enfocas en lo que puedes controlar?",
            "¿Te das tiempo para hacer cosas que disfrutas?",
            "¿Reconoces que eres valioso/a tal y como eres?",
            "¿Te esfuerzas por ver el lado positivo de las cosas?",
            "¿Te tratas a ti mismo/a con la misma amabilidad que tratarías a un amigo?",
            "¿Te permites celebrar tus pequeñas victorias diarias?",
            "¿Sabes que siempre hay algo bueno en ti, incluso en los días difíciles?"
        ];

        const motivationalMessages = [
            "Cada día es una nueva oportunidad para empezar de nuevo.",
            "Eres más fuerte de lo que crees.",
            "Tómate un momento para valorar todo lo que has logrado hasta ahora.",
            "Recuerda que los errores son pasos hacia el éxito.",
            "Siempre hay algo positivo en ti, incluso en los días difíciles."
        ];

        const proudMessages = [
            "¡Eso es genial! Sigue así.",
            "¡Bien hecho! Eres increíble.",
            "¡Qué orgullo! Continúa valorándote.",
            "¡Bravo! Sigue cuidando de ti mismo/a.",
            "¡Excelente respuesta! Tú puedes con todo."
        ];

        let currentQuestionIndex = 0;
        const questionContainer = document.getElementById("questionContainer");
        const messageContainer = document.getElementById("messageContainer");
        const prevButton = document.getElementById("prevButton");
        const nextButton = document.getElementById("nextButton");
        const submitButton = document.getElementById("submitButton");

        function renderQuestion() {
            const question = questions[currentQuestionIndex];
            questionContainer.innerHTML = `<p>${currentQuestionIndex + 1}. ${question}</p>
                <label><input type="radio" name="q${currentQuestionIndex + 1}" value="positive" onclick="showMessage(true)"> Sí.</label>
                <label><input type="radio" name="q${currentQuestionIndex + 1}" value="negative" onclick="showMessage(false)"> No.</label>`;

            messageContainer.classList.add("hidden");
            prevButton.classList.toggle("hidden", currentQuestionIndex === 0);
            nextButton.classList.toggle("hidden", currentQuestionIndex === questions.length - 1);
            submitButton.classList.toggle("hidden", currentQuestionIndex !== questions.length - 1);
        }

        function showMessage(isPositive) {
            const messages = isPositive ? proudMessages : motivationalMessages;
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            messageContainer.textContent = randomMessage;
            messageContainer.classList.remove("hidden");
        }

        function nextQuestion() {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                renderQuestion();
            }
        }

        function prevQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                renderQuestion();
            }
        }

        function evaluateQuiz() {
            const form = document.getElementById('quizForm');
            const feedback = document.getElementById('feedback');
            const reward = document.getElementById('reward');
            let positiveCount = 0;
            let negativeCount = 0;

            const answers = new FormData(form);

            for (let [key, value] of answers.entries()) {
                if (value === 'positive') {
                    positiveCount++;
                } else if (value === 'negative') {
                    negativeCount++;
                }
            }

            if (negativeCount > 0) {
                feedback.textContent = "Recuerda que eres valioso/a y capaz de grandes cosas. Tómate un momento para apreciar todo lo que eres.";
                feedback.classList.remove('hidden');
                reward.classList.add('hidden');
            } else {
                reward.classList.remove('hidden');
                feedback.classList.add('hidden');
            }
        }

        renderQuestion();
