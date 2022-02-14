import Product from "../components/Product";
import Rating from "../components/Rating";
import data from '../data';
export default function ProductScreen(props){
    const product = data.products.find((x)=>x._id === props.match.params.id)
    return(
    <div>
        <div className="row">
        <div className="col-2">
            <img className="large" src={product.image} alt={product.name}></img>
        </div>

        <div className="col-1">
        <ul>
            <li><h1>{product.name}</h1></li>
            <li><Rating rating={product.rating} numReview={product.numReview}></Rating></li>
            <li>Price: ${product.price}</li>
            <li>Description: <p>{product.description}</p></li>
        </ul>
        </div>

        <div className="col-1">
        <div className="card card-body">
            <ul>
                <li>
                    <div className="row">
                        <div>Price</div>
                        <div className="price">${product.price}</div>
                    </div>
                </li>
            </ul>
        </div>
        </div>


        </div>
    </div>
    )
}