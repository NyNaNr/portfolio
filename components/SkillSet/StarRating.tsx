import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons"
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons"

type StarProps = {
  rate: number
}

const StarRating: React.FC<StarProps> = ({ rate }) => {
  const stars = Array(5).fill(0)

  return (
    <div className="flex justify-center ">
      {stars.map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={i < rate ? fasStar : farStar}
          //   ↓　h-6 w-6　とかで星の大きさ変更可能
          className={` ${
            i < rate
              ? "text-black dark:text-white"
              : "text-black dark:text-gray-500"
          }`}
        />
      ))}
    </div>
  )
}

export default StarRating
