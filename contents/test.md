---
title: "Next.jsでmarkdownブログ（ポートフォリオも兼ねる）を構築"
created_at: "2023-07-05"
updated_at: "2023-07-06"
description: "Next.jsでmarkdownファイルを利用したブログの構築手順を解説しています。"
tags: ["tech", "web", "nextjs"]
---

<https://qiita.com/tbpgr/items/989c6badefff69377da7>

<https://musclecoding.com/nextjs-app-router-markdown-blog/>

<https://www.google.co.jp/>

<https://qiita.com/KariKariMentaiFrance/items/70679902bd3a92ae2a6d>

<https://www.noheya.jp/5>

# 見出し 1

## 見出し 2

### 見出し 3

#### 見出し 4

##### 見出し 5

###### 見出し 6

- リスト 1
  - ネスト リスト 1_1
    - ネスト リスト 1_1_1
    - ネスト リスト 1_1_2
  - ネスト リスト 1_2
- リスト 2
- リスト 3

1. 番号付きリスト 1
   1. 番号付きリスト 1_1
   1. 番号付きリスト 1_2
1. 番号付きリスト 2
1. 番号付きリスト 3

> お世話になります。xxx です。
>
> ご連絡いただいた、バグの件ですが、仕様です。

> お世話になります。xxx です。
>
> ご連絡いただいた、バグの件ですが、仕様です。
>
> > お世話になります。 yyy です。
> >
> > あの新機能バグってるっすね

インストールコマンドは `gem install hoge` です

normal _italic_ normal
normal _italic_ normal

normal **bold** normal
normal **bold** normal

normal **_bold_** normal
normal **_bold_** normal

---

---

---

---

[Google 先生](https://www.google.co.jp/)

[こっちから google][google]
その他の文章
[こっちからも google][google]

[google]: https://www.google.co.jp/

~~取り消し線~~

```ruby:test.rb
　 class Hoge
　 def hoge
　 print 'hoge'
　 end
　 end
```

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

| header1    |     header2 |   header3    |
| :--------- | ----------: | :----------: |
| align left | align right | align center |
| a          |           b |      c       |

| ああああああああ | header2     | header3      |
| :--------------- | :---------- | :----------- |
| align left ｓ    | align right | align center |
| a ｓ             | b           | c            |

| 東京         |         長野 |  奈良  |
| :----------- | -----------: | :----: |
| スカイツリー |       スキー |  大仏  |
| 高い         | やってみたい | でかい |

## menu

- [to header1](#header1)
- [to header2](#header2)

<!-- some long code -->

[return to menu](#menu)

### header1

### header2
