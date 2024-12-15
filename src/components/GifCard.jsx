export const GifCard = ({ url, title, username }) => {

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title} - { username }</p>
        </div>
    );
}