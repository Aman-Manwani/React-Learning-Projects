import React,{ useState }  from 'react'
import questions from '../api'
import My_accordion from './My_accordion';

const Accordion = () => {
const [data,setdata]=useState(questions);
  return (
    <>
      <section className='main-div'>
        <h1>React Ques & Answers</h1>
        {
          data.map((val)=>{
            return <My_accordion key={val.id} {...val}/>
          })
        }
      </section>
    </>
  )
}

export default Accordion;
