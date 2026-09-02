import Card from './components/card'
import ClickCount from "./components/clickCounter";

export default function HomePage(){
const cards=[
{id:1,name:"Angelo",role:"mentor",description:"Teaching the basics of React"},
{id:2,name:"Asima",role:"student",description:"Doing homework vol.2"},
{id:3, name:"Marcela",role:"student",description:"Studying first Frontend Lecture"}
]
return(
  <main>
<h1>Homework vol.2</h1>
<p>U nastavku slijede odrađeni zadaci.</p>


<h2>Učitane kartice:</h2>
<div className='grid grid-cols-1 md:grid-cols-3'>
{cards.map((card)=>(
  <Card
  key={card.id}
  id={card.id}
  name={card.name}
  role={card.role}
  description={card.description}

  />


))}

</div>
<ClickCount />
  </main>

);

}



