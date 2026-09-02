type CardProp={
id:number;
name:string;
role:string;
description:string;
}

export default function Card({id,name,role,description}:CardProp){
return (
<div>
<h2>{name}</h2>
<h2>{role}</h2>
<p>{description}</p>
</div>
);


}