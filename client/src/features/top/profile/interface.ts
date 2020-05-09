import { createModule } from "typeless"
import { ProfileSymbol } from './symbol';

export const [handle, ProfileActions, getProfileState] = createModule(ProfileSymbol)
  .withActions({
    $mounted: null,
    fetchProfileFulfilled: (profile) => ({payload: {profile}})
  })
  .withState<ProfileState>();

export interface ProfileState {
  name: string,
  description: string,
  imageUrl: string,
  socialAccounts: SocialAccount[]
}

export interface SocialAccount {
  accountUrl: string,
  iconUrl: string
}