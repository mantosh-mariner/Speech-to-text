let speech =new SpeechSynthesisUtterance();

// let str=" h";

const bnt=document.querySelector(".tt button")
bnt.addEventListener("click", ()=>
{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});


const startButton = document.getElementById('startButton');
    const transcription = document.getElementById('transcription');
    const status = document.getElementById('status');
    let recognizing = false;
    let recognition;

    function startSpeechRecognition() {
        recognition = new window.webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = function() {
            recognizing = true;
            status.textContent = 'Listening...';
        };

        recognition.onerror = function(event) {
            console.error('Speech recognition error:', event.error);
            status.textContent = 'Error occurred in recognition: ' + event.error;
        };

        recognition.onend = function() {
            recognizing = false;
            status.textContent = 'Click "Start Recording" to begin again.';
        };

        recognition.onresult = function(event) {
            let interimTranscript = '';
            let finalTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }
            transcription.innerHTML = finalTranscript;
        };

        recognition.start();
    }

    startButton.addEventListener('click', function() {
        if (recognizing) {
            recognition.stop();
            return;
        }
        transcription.textContent = '';
        startSpeechRecognition();
    });

let bt=document.querySelector(".chan button")

let da=document.querySelector(".chan input");
bt.addEventListener("click", ()=>
{
    document.getElementsByTagName("body")[0].style.backgroundColor=da.value;
})
let r=document.querySelector(".chan .re")
r.addEventListener("click", ()=>{
    document.getElementsByTagName("body")[0].style.backgroundColor="white";
    da.value="white";
    // console.log(str);
})




