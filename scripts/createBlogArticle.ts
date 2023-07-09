const fs = require("fs").promises
const path = require("path")

// の型を作る。　npm run create -- my-first-post　で実行

!(async () => {
  const slug = process.argv[2]

  const newFileName = `${slug}.md`

  const postsDirectory = path.join(process.cwd(), "contents")

  if (!slug) throw new Error("slug must be specified.")

  const fileNames = await fs.readdir(postsDirectory)

  if (fileNames.includes(newFileName)) {
    throw new Error("the slug is already used.")
  }
  //YYYY-MM-DD形
  let date: Date = new Date()
  let year: string = date.getFullYear().toString()
  let month: string = (date.getMonth() + 1).toString()
  let day: string = date.getDate().toString()
  month = month.length < 2 ? "0" + month : month
  day = day.length < 2 ? "0" + day : day
  let formattedDate: string = `${year}-${month}-${day}`

  const content = `---
title: "Input Title"
created_at: "${formattedDate}"
updated_at: ""
description:""
tags: []
---

# Contents Here.
`

  const filePath = path.join(postsDirectory, newFileName)
  await fs.writeFile(filePath, content)

  console.info("new article was successfully created!")
})()
