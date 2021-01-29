import React from 'react'


class QuestionCard extends React.Component{

  question1 = this.props.questionArray[0]

  render(){
    
    console.log("Props", this.question1)
    return(
        <div>
          
  
          {/* <h2>${props.questionArray[1].ask}</h2>
          <p>SCORE: ${score}</p>
          <div class = "button-grid">
            <button class= "button-choice" data-choice = " " type="button">${props.questionArray[1].answer1}</button>
            <button class= "button-choice" data-choice = " " type="button">${props.questionArray[1].answer2}</button>
            <button class= "button-choice" data-choice = " " type="button">${props.questionArray[1].answer3}</button>
            <button class= "button-choice" data-choice = " " type="button">${props.questionArray[1].answer4}</button>
          </div>
          <div class = "">
            <button class= "play-buttons" data-play= '${data.filename}'> ▶️ </button>
            <button class= "play-buttons" data-pause= '${data.filename}'> ⏸ </button>
          </div>
          <div id='correct' style="visibility: hidden">${props.questionArray[1].correct}</div> */}
        </div> 
    )
  }
}

export default QuestionCard

