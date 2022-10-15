
//hooks
import useVerble from '../hooks/useVerble'
const Finale = ({ turn, isCorrect, solution}) => {
  return (
    <div className='final-score'>
        {isCorrect === false && 
        <div>
            <h2>Game Over, better luck next time</h2>
            <hr />
            <p>The solution was: {solution}</p>
        </div>
        }

        {isCorrect === true && 
        <div>
            <h2>Correct!</h2>
            <hr />
            <p>The solution was: {solution}</p>
            <p>you got it in {turn} {turn<2 ? 'try' : 'tries'} 🙂</p>
        </div>
        }
    </div>
  )
}

export default Finale