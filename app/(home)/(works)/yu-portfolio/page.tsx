import { GetStaticProps, NextPage } from "next"

type Props = {
  envValue: string | undefined
}

const Check: NextPage<Props> = ({ envValue }) => {
  return <p>{envValue}</p>
}
export default Check

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      envValue: process.env.SENDGRID_API_KEY,
    },
  }
}
