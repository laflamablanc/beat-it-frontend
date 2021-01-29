import React from 'react'


class QuestionCard extends React.Component{

  state = {
    score: 0
  }

  render(){
    
   
    return(
      this.props.question? 
        <div>
  
  
        <h2>{this.props.question.ask}</h2>
        <p>SCORE: {this.state.score}</p>
        <div class = "button-grid">
          <button class= "button-choice" data-choice = " " type="button">{this.props.question.answer1}</button>
          <button class= "button-choice" data-choice = " " type="button">{this.props.question.answer2}</button>
          <button class= "button-choice" data-choice = " " type="button">{this.props.question.answer3}</button>
          <button class= "button-choice" data-choice = " " type="button">{this.props.question.answer4}</button>
        </div>
        <div class = "">
          <button class= "play-buttons" data-play= '${data.filename}'> ▶️ </button>
          <button class= "play-buttons" data-pause= '${data.filename}'> ⏸ </button>
        </div>
        {/* <div id='correct' style="visibility: hidden">${this.props.question.correct}</div> */}
      </div> 
      :
      <div>
        Loading
      </div>
      
      
        
    )
  }
}

export default QuestionCard

