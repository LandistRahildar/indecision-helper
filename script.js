{
    document.getElementById("answerButton").onclick = function () {
        const firstUserInput = document.getElementById("firstUserInput").value;
        const secondUserInput = document.getElementById("secondUserInput").value;
        const thirdUserInput = document.getElementById("thirdUserInput").value;
        const userInputs = [firstUserInput, secondUserInput, thirdUserInput];
        const randomInput = Math.floor(Math.random() * userInputs.length);
        document.getElementById("answer").innerHTML = `Najpierw masz ${userInputs[randomInput]}.`;
    }
}
