import { FaStar } from "react-icons/fa"


export default function startRating(noOfStars = 5){

    return <div className="star-rating">

        const [rating, setRating] = useState(0);
        const [hover, setHover] = useState(0);

        {
            [...Array(noOfStars)].map((_,index)=> {

                return <FaStar
                key={index}
                onClick={}
                onMouseMove={}
                onMouseLeave={}
                sixe={40}
                />
            }
        }

    />
}