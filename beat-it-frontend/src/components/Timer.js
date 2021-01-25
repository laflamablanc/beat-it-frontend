import React from 'react'

class Timer extends React.Component{
    
    state = {
        time: this.props.time,
        isOn: false,
        start: 0,
        roundDuration: 60
    }
        
    startGameTimer = () => {
    
        let gameInterval = setInterval(function() {
            this.setState(prevState => {
                return {time: prevState.time - 1}
             })  
          this.renderTime();
        }, 1000);
    }
    
    // setGameTime = () => {
    //     if (test) { console.log("--- setGameTime ---"); }
    //     if (test) { console.log("gameDuration " + gameDuration); }
    //     clearInterval(gameInterval);
    // }
    
    // renderTime = () => {
    
    //     this.setState({
    //         gameDuration - gameSecElapsed;
    //     })
    
    //     if ((this.state.time === 0 ) {
    //       console.log(genre)
    //         if (round === 1 && genre === "rap") {
    //             clearInterval(gameInterval)
    //             gameDuration = resetDuration
    //             gameSecElapsed = 0
    //             questionId = 19
    //             round++
    //             console.log(questionId)
    //             song.pause()
    //             displayRound()
    //             changeTimerGreen()
    //         }
    //         else if (round === 1 && genre === "rock"){
    //             clearInterval(gameInterval)
    //             gameDuration = resetDuration
    //             gameSecElapsed = 0
    //             questionId = 52
    //             console.log(questionId)
    //             round++
    //             song.pause()
    //             displayRound()
    //             changeTimerGreen()
    //         } else {
    //             console.log(round)
    //             endOfGame();
    //             sendScore()
    //         }
    //     } else if ((gameDuration - gameSecElapsed) === 9) {
    //       changeTimerRed()
    //     }
    //   } 
      
    //   endOfGame = () => {
    
    //     console.log('Game Over')
    //     clearInterval(gameInterval);
    //     // const questionContainer = document.getElementById('question-container')
    //     // questionContainer.innerHTML = `Your Score: ${score}`
    //     song.pause()
    
    //   }

    
    render(){
        return(
            <div>
                <h2> Timer: {this.props.time}</h2>
            </div>
        )
    }

    componentDidMount(){
        this.startGameTimer()
    }
}

export default Timer