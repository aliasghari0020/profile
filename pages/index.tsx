import type { NextPage } from "next";
import Profile from "../component/profile";
import store from "../store/store";
import { Provider } from "react-redux";
import UpdateProfile from "../component/updateProfile";
const updateProfile:NextPage =()=>{

return(
  <Provider store={store}>
  <div className="home">
    <Profile/>
    <UpdateProfile/>
  </div>
  </Provider>

)
}

export default updateProfile;