

export const Hand = ({handNum, setComputerHand, setResult, hand}) => {
  const getComputerHand = () => {
    const randomNum = Math.floor(Math.random() * 3)
    if(randomNum === 0){
      setComputerHand("グー")
      return 0
    }else if(randomNum === 1){
      setComputerHand("チョキ")
      return 1
    }else if(randomNum === 2){
      setComputerHand("パー")
      return 2
    }
  }

  const jankenLogic = (e) => {
    const myHandNumber = e.target.dataset.hand
    const yourHandNumber = getComputerHand()
    const result = (myHandNumber - yourHandNumber + 3) % 3
    if(result === 0){
      setResult("あいこ")
    }else if(result === 1){
      setResult("Lose😩")
    }else if(result === 2){
      setResult("Win!!🎉")
    }
  }

  return (
    <div>
      <li>
        <button onClick={jankenLogic} data-hand={handNum} className="m-4 px-8 py-2 bg-green-200 shadow">
          {hand}
        </button>
      </li>
    </div>
  )
}
