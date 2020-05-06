import TwitterLogo from "../icons/BrandLogos/Twitter.svg";

export const InformationData: SimpleInformationState[] = [
  {
    date: new Date(2020, 4, 6),
    informationTexts: [
      "今日も一日がんばるぞい"
    ]
  },
  {
    date: new Date(2020, 4, 6),
    informationTexts: [
      "今日も一日がんばるぞい"
    ]
  },
  {
    date: new Date(2020, 4, 6),
    informationTexts: [
      "今日も一日がんばるぞい"
    ]
  },
  {
    date: new Date(2020, 4, 6),
    informationTexts: [
      "今日も一日がんばるぞい"
    ]
  },
  {
    date: new Date(2020, 4, 6),
    informationTexts: [
      "今日も一日がんばるぞい"
    ]
  },
  {
    date: new Date(2020, 4, 6),
    informationTexts: [
      "今日も一日がんばるぞい",
      "hoge",
      "zoi",
      "ディープラーニングってやつでなんとかして"
    ]
  },
  {
    date: new Date(2020, 4, 7),
    informationTexts: [
      "今日も一日がんばるぞい",
      "zoi",
      "hoge"
    ],
    image: TwitterLogo
  },
]

export interface SimpleInformationState {
  date: Date,
  informationTexts: string[]
  image?: string
}

