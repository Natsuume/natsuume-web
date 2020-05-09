import { InformationState } from "../../features/top/information/interface";
import { ProfileState } from '../../features/top/profile/interface';

export const initialInformationState: InformationState = {
  information: [
    {
    content: `
      これはサンプルです
      このInformationが表示される場合、Informationの取得に失敗しています.
    `,
    date: new Date(9999,11,31),
    thumbnailUrl: null
    }
  ]
}

export const initialProfileState: ProfileState = {
  name: "natsuume(sample)",
  description: `
    これはサンプルです.
    これが表示される場合、Profileの読み込みに失敗しています
  `,
  imageUrl: "",
  socialAccounts: []
}