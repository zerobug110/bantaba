import './card.scss';
export const Card = ({children}:any) => {
    return(
        <div className="card">
            {children}
        </div>
    )
}