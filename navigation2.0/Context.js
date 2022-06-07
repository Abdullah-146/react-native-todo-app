let Users = [
  {
    id: "1",
    displayName: "Rehman",
    profileImage:
      "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
    bio: "description with 100 words",
    email: "email address",
  },
  {
    id: "2",
    displayName: "Ahmed",
    profileImage:
      "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",

    bio: "description with 100 words",
    email: "email addres",
  },
  {
    id: "3",
    displayName: "Rehan",
    profileImage:
      "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",

    bio: "description with 100 words",
    email: "email addres",
  },
  {
    id: "4",
    displayName: "Suleman",
    profileImage:
      "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",

    bio: "description with 100 words",
    email: "email addres",
  },
  {
    id: "5",
    displayName: "Raheel",
    profileImage:
      "https://allworldpm.com/wp-content/uploads/2016/10/230x230-avatar-dummy-profile-pic.jpg",
    bio: "description with 100 words",
    email: "email addres",
  },
];

import React, { createContext ,useState } from "react";

export const UserDataContext = createContext({
  users: [],
  addNewUser: () => {},
  removeUser: () => {},
});

function Context({ children }) {
  const [user, setuser] = useState(Users);

  const value = {
    Users: user,
    addNewUser: (obj) => { setuser((currents)=>{return [...currents ,  obj]} )},
    removeUser: (id) => { setuser(user.filter( element=>element.id != id) )},

  };
  return (
    <UserDataContext.Provider value={value}> {children} </UserDataContext.Provider>
  );
}

export default Context;
