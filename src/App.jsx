
const Card = ({title}) =>{
  return(
   <div className="card">
     <h2>{title}</h2>
   </div>
  )
}
const App = () =>{
  return (
    <div className="card-container">
    <Card title= "star wars" />
    <Card title= "stranger things" />
    <Card title= "Avengers" />
    </div>
  )
}

export default App
