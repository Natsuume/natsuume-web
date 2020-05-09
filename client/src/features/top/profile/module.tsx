import React from "react"
import { handle, ProfileActions, ProfileState } from "./interface"
import { httpClient } from '../../../utils/axios';
import { initialProfileState } from '../../../types/top/initialStates';
import { Profile } from "./component/Profile";

handle
  .epic()
  .on(ProfileActions.$mounted, async () => {
    const profile: ProfileState = await httpClient.get("/api/profile")
      .then(response => response.data)
      .catch(error => {
        console.log(error.response);
        console.log(error.request);
        console.log(error.config);
      })

    if(profile === undefined) {
      return null;
    }else{
      return ProfileActions.fetchProfileFulfilled(profile);
    }
  });

handle.reducer(initialProfileState)
  .replace(ProfileActions.fetchProfileFulfilled, (_, {profile}) => profile);

export const ProfileModule: React.FC = () => {
  handle();

  return <Profile></Profile>
}