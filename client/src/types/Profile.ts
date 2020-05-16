import { WebAccounts, WebServices } from "./WebAccounts";
import Icon from "../icons/AccountIcon.png";

export const NatsuumeProfile: Profile = {
  name: "natsuume",
  description: `
  少しだけNLPをかじっているWebエンジニア
  主にJavaを使っているが、最近はTypeScriptにも手を出している。普段はプログラミング以外にも気分でゲーム作ったりイラスト描いたりして過ごしたりしている。
  最近、自宅のデスクを増設して液タブを買った。
  `,
  icon: Icon,
  accounts: [
    "Twitter",
    "GitHub",
    "HatenaBlog",
    "Qiita",
    "Pixiv"
  ]
}

interface Profile {
  name: string,
  description: string,
  icon: string,
  accounts: WebServices[],
}