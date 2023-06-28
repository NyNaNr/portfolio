import ElapsedTime from "./ElapsedTime"
import StarRating from "./StarRating"

type StarProps = {
  title: string
  rate: number
  startDate: string
}

const TableRow: React.FC<StarProps> = ({ title, rate, startDate }) => {
  return (
    <tr>
      <td className="border  px-4 py-2 text-center">{title}</td>
      <td className="border px-4 py-2 text-center">
        <ElapsedTime startDate={startDate} />
      </td>
      <td className="border px-4 py-2 ">
        <StarRating rate={rate} />
      </td>
    </tr>
  )
}

export default TableRow
