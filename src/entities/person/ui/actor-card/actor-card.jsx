import { getImageUrl } from "@/shared/lib/get-image-url";
import './actor-card.scss';

export function ActorCard({ actor }) {
    return (
        <article className="actor-card">
            <div className="actor-card__image-wrapper">
                <img
                    className="actor-card__image"
                    src={getImageUrl(actor.profile_path)}
                    alt={actor.name}
                />
            </div>
            <div className="actor-card__info">
                <h3 className="actor-card__name">{actor.name}</h3>
                <p className="actor-card__character">{actor.character}</p>
            </div>
        </article>
    )
}