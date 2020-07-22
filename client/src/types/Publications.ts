export const booksIsbn: string[] = [
  "9784839960582"
]

export const PaperList: PaperInfo[] = [
  {
    title: "人狼ゲームにおける対話システムのための中間表現および自然言語から中間表現への変換",
    author: "箕輪 峻, 狩野 芳伸",
    media: "人工知能学会論文誌 35/1 1-13",
    year: "2020"
  }
]

export interface PaperInfo {
  title: string,
  author: string,
  media: string,
  year: string,
}