import React, {useState} from 'react';
import './tictactoe.css'

function Tictacto() {

    const [turn, setTurn]  = useState('x')
    const [cells, setCells] = useState(Array(9).fill(''));
    
    const handleClick = (num) => {
        let squares = [...cells];

        if (cells[num] !== '') {
            return;
        }
        if (turn === 'x') {
            squares[num] = 'x';
            setTurn('o');
        } else {
            squares[num] = 'o';
            setTurn('x');
        }
        setCells(squares);
        console.log(squares);
    }
    const Cell =({num})=>{
        return <td onClick={handleClick(num)}>{cells[num]}</td>
    }

    return (
      <div>
            <h1>Tick Tac Toe</h1>  

            <div className='table'>
                <table>
                    <tr>
                       <Cell num={0} />
                       <Cell num={1}/>
                       <Cell num={2}/>
                    </tr> 
                    <tr> 
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr> 
                    <tr> 
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>
                </table>
            </div>
      </div>
    )
}

export default Tictacto