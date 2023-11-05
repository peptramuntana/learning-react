import { useState } from 'react';

export function TwitterFollowCard({ formatUserName, userName = 'unknown', name, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Following' : 'Follow';
    const buttonClassName = isFollowing ? 'c-followCard__button is-following' : 'c-followCard__button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className="c-followCard">
            <header className='c-followCard__header'>
                <picture>
                    <img className='c-followCard__avatar' src={`https://unavatar.io/${userName}`} alt={`${name} Avatar`} />
                </picture>
                <div className='c-followCard__info'>
                    <strong>{name}</strong>
                    <span className='c-followCard__infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                <span className="c-followCard__text">{text}</span>
                <span className="c-followCard__stopFollow">Stop Following</span>
                </button>
            </aside>
        </article>
    )
}