import React from 'react'

const QuestionCard = () => {
    return(
        <div>
            <h2>${data.ask}</h2>
          <p>SCORE: ${score}</p>
          <div class = "button-grid">
            <button class= "button-choice" data-choice = " " type="button">${data.answer1}</button>
            <button class= "button-choice" data-choice = " " type="button">${data.answer2}</button>
            <button class= "button-choice" data-choice = " " type="button">${data.answer3}</button>
            <button class= "button-choice" data-choice = " " type="button">${data.answer4}</button>
          </div>
          <div class = "">
            <button class= "play-buttons" data-play= '${data.filename}'> ▶️ </button>
            <button class= "play-buttons" data-pause= '${data.filename}'> ⏸ </button>
          </div>
          <div id='correct' style="visibility: hidden">${data.correct}</div>
        </div>
    )
}

export default QuestionCard