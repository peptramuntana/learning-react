import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    const format = (userName) => `@${userName}`;

    return (
        <section className="o-common">
            <TwitterFollowCard formatUserName={format} userName="peptramuntana" name="Pep Tramuntana" />
            <TwitterFollowCard formatUserName={format} initialIsFollowing={true} userName="midudev" name="Miguel Ángel Durán" />
        </section>
    )
}