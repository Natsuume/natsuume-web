import { WebAccounts, WebServices } from "../WebAccounts";
import Icon from "../../icons/AccountIcon.png";

export const NatsuumeProfile: Profile = {
  name: "natsuume",
  description: `
    こんにちは
    よろしくおねがいします。
    あ
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