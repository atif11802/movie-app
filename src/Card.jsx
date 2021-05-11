import './index.css';

const Card = ({title,img}) => {
    return ( 
        <>

        
        <div className="card">
            <h1>{title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${img}`} alt="" />
            
        </div>

     
        

        </>
     );
}
 
export default Card;