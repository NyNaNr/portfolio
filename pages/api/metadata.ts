import type { NextApiRequest, NextApiResponse } from "next"
import { fetchSiteMetadata } from "../../components/Markdown/fetchSiteMetadata"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const url = req.query.url as string
  const metadata = await fetchSiteMetadata(url)
  res.status(200).json(metadata)
}
