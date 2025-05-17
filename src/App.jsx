
import data from '../public/data'
import './App.css'
import Card from './assets/Card.jsx'

function App() {
 
  return (
    <>
     <header>

     </header>
      <div className='ota'>
       
         {data.map((e,i)=>{
        return    <Card key={i} odam={e}></Card>
         })}
        
      </div>
      
    </>
  )
}

export default App
