import { WebAccounts, WebServices } from "./WebAccounts";
import Icon from "../icons/AccountIcon.png";

export const NatsuumeProfile: Profile = {
  name: "natsuume",
  descriptions: [
    "hogehoge",
    "",
    "今日も一日がんばるぞい"
  ],
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
  descriptions: string[],
  icon: string,
  accounts: WebServices[],
}