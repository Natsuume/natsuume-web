import { InformationState } from "../../features/top/information/interface";
import { ProfileState } from '../../features/top/profile/interface';

export const initialInformationState: InformationState = {
  information: []
}

export const initialProfileState: ProfileState = {
  name: "",
  description: "",
  imageUrl: "",
  socialAccounts: []
}