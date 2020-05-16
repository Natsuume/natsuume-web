import TwitterLogo from "../icons/BrandLogos/Twitter.svg";
import GitHubLogo from "../icons/BrandLogos/GitHub.png";
import HatenaBlogLogo from "../icons/BrandLogos/HatenaBlog.svg";
import QiitaLogo from "../icons/BrandLogos/Qiita.png";
import PixivLogo from "../icons/BrandLogos/pixiv.png";


export const WebAccounts: {[key in WebServices]: WebService} = {
  Twitter: {
    name: "Twitter",
    icon: TwitterLogo,
    link: "https://twitter.com/t_01201"
  },
  GitHub: {
    name: "GitHub",
    icon: GitHubLogo,
    link: "https://github.com/Natsuume"
  },
  HatenaBlog: {
    name: "Hatena Blog",
    icon: HatenaBlogLogo,
    link: "https://natsuume.hatenablog.jp/"
  },
  Qiita: {
    name: "Qiita",
    icon: QiitaLogo,
    link: "https://qiita.com/natsuume"
  },
  Pixiv: {
    name: "pixiv",
    icon: PixivLogo,
    link: "https://www.pixiv.net/users/7112027"
  }
}

export interface WebService {
  name: string,
  icon: string,
  link: string,
}

export type WebServices =
  | "Twitter"
  | "GitHub"
  | "HatenaBlog"
  | "Qiita"
  | "Pixiv"
;