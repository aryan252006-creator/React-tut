import axios from 'axios'

const App = () => {
  const getData = ()=>{
     const response = axios.get('https://jsonplaceholder.typicode.com/todos/1')
     console.log(responseqq);
     
    
    

}
 
return (
    <div>
      <button onClick={getData}>Click kar </button>
    </div>
  )
}

export default App
