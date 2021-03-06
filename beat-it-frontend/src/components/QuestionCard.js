import React from 'react'


class QuestionCard extends React.Component{

  state = {
    score: 0
  }



  updateScore = (e) => {
    if (e.target.id === this.props.question.correct){
      console.log("yello")
      this.setState({
        score: this.state.score + 100
      })
      this.props.nextQ()
    } else {
      this.setState({
        score: this.state.score - 50
      })
      this.props.nextQ()
    }
    
  }

  render(){
    
   
    return(
      this.props.question? 
        <div>
  
  
        <h2>{this.props.question.ask}</h2>
        <p>SCORE: {this.state.score}</p>
        <div class = "button-grid">
          <button 
            class= "button-choice" 
            data-choice = " " 
            type="button"
            id =  {this.props.question.answer1}
            onClick ={this.updateScore}>{this.props.question.answer1}</button>
          <button 
            class= "button-choice" 
            data-choice = " " 
            type="button" 
            id =  {this.props.question.answer2}
            onClick ={this.updateScore}>{this.props.question.answer2}</button>
          <button 
            class= "button-choice" 
            data-choice = " " 
            type="button"
            id =  {this.props.question.answer3} 
            onClick ={this.updateScore}>{this.props.question.answer3}</button>
          <button 
            class= "button-choice" 
            data-choice = " " 
            type="button"
            id =  {this.props.question.answer4} 
            onClick ={this.updateScore}>{this.props.question.answer4}</button>
        </div>
        <div class = "">
          <button class= "play-buttons" data-play= {this.props.question.filename}> ▶️ </button>
          <button class= "play-buttons" data-pause= {this.props.question.filename}> ⏸ </button>
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

