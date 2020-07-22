export const InformationItems: InformationItem[] = [
  {
    content: "Webページを公開しました",
    uploaded: "2020-07-08",
  }
]

export interface InformationItem {
  content: string,
  uploaded: string,
  thumbnailUrl?: string
}