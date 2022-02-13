import { useState } from "react"
import TinderCard from "react-tinder-card";
import './TinderCards.css';



export default function TinderCards(){

    const [people, setPeople] = useState([
        {
            name: "Nina Dobrev",
            url: "https://cdn.marica.bg/images/marica.bg/759/1610452955.jpeg"
        },
        {
            name: "Madison Beer",
            url: "https://i.insider.com/5f21bd5d2618b9656e20ac64?width=700"
        }
    ]);

    return (
        <div>
            <div className="Tinder-Cards">
                {people.map(user =>(
                    <TinderCard className="swipe" key={user.name} preventSwipe={['up', 'down']}>
                        <div style={{backgroundImage: `url(${user.url})`}} className="card">
                            <h3>{user.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
            
        </div>
    )
}