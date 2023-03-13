import { useState } from 'react';
import './Home.css';



const Home = ({ exchange }) => {
   const [selectValueQuestion, setSelectValueQuestion] = useState('USD')
   const [selectValueAnswer, setSelectValueAnswer] = useState('EUR')
   const [valueQuestion, setValueQuestion] = useState(['USD', 'EUR', 'UAH'])
   const [valueAnswer, setValueAnswer] = useState(['EUR', 'USD', 'UAH'])
   const [value, setValue] = useState('')
   const [valueSelect1, setValueSelect1] = useState('USD')
   const [valueSelect2, setValueSelect2] = useState('UAH')



   const optionQuestion = valueQuestion.map((option, i) =>
      <option
         onChange={e => setSelectValueQuestion(e.target.value)}
         key={i}
      > {option} </option>
   )
   const optionAnswer = valueAnswer.map((option, i) =>
      <option
         onChange={e => setSelectValueAnswer(e.target.value)}
         key={i}
      >{option}</option>
   )

   const calsInp = (sum, currency1, currency2) => {
      const result = sum * (+currency1 / +currency2)
      return isNaN(result) ? 0 : result;
   }


   return (
      <div className='home'>
         <div className='container'>
            <div className='home__calc'>
               <div className='home__calc_question'>
                  <select
                     className='home__calc_selet'
                     onChange={e => setValueSelect1(e.target.value)}
                     value={valueSelect1}
                  >
                     {optionQuestion}
                  </select>
                  <input
                     className='home__calc_inp'
                     onChange={e => setValue(e.target.value)}
                     value={value}
                     type="number"
                  />
               </div>
               <div className='home__calc_answer'>
                  <select
                     className='home__calc_selet'
                     onChange={e => setValueSelect2(e.target.value)}
                     value={valueSelect2}
                  >
                     {optionAnswer}
                  </select>
                  <span className='home__calc_sum'>{calsInp(+value, exchange[valueSelect1.toLowerCase()], exchange[valueSelect2.toLowerCase()]).toFixed(2)}</span>
               </div>
            </div>
         </div>
      </div>
   )

}
export default Home;