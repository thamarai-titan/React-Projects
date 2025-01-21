import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { wishlistAtom } from "../store/WishListAtom"

const WishList = () => {
const [items,setItems] = useRecoilState(wishlistAtom)
    useEffect(()=>{
        const FetchingProducts = async () => {
            try{
                const response = axios.get(`https://fakestoreapi.com/products/${csc}`)
                
                
            }
            catch{
                console.error(`This ${error} occured`)
            }
        }
        FetchingProducts()
    },[])


    return <>
    
    <div>

    <div>
        <h2>Your Wish List</h2>
        <p>public</p>
        <span></span>
        <span></span>
        <div>
            <img src="" alt="" />
            <p></p>
            <p></p>
            <button>Add to Cart</button>
        </div>
    </div>
    </div>
    
    
    </>
}
export default WishList