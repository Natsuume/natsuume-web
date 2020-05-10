import React from "react"
import { handle, ProfileActions, ProfileState } from "./interface"
import { httpClient } from '../../../utils/axios';
import { initialProfileState } from '../../../types/top/initialStates';
import { Profile } from "./component/Profile";

handle
  .epic()
  .on(ProfileActions.$mounted, async () => {
    const profile: ProfileState | null = await httpClient.get("/api/profile")
      .then(response => response.data)
      .catch(error => {
        const response = error.response;
        console.log(response.data);
        console.log(response.status);
        console.log(response.headers);
        return null;
      })

    if(profile) {
      return ProfileActions.fetchProfileFulfilled(profile);
    }else{
      return null;
    }
  });

handle.reducer(initialProfileState)
  .replace(ProfileActions.fetchProfileFulfilled, (_, {profile}) => profile);

export const ProfileModule: React.FC = () => {
  handle();

  return <Profile></Profile>
}