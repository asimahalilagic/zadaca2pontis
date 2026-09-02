"use client";
import { use, useState } from 'react';

export default function ClickCount(){
const [count,setCount]=useState(0);

return(
  <main>
<h1>Broj klikova:</h1>
<button className="bg-white text-black" onClick={()=>setCount(count+1)}>

Click!
</button>
<h2>Broj klikova: {count}</h2>
</main>
);
}