import { useEffect, useState } from "react";

export const getFullName = (user)=>{
  const fullName = user.profile.first_name + " " + user.profile.last_name;
  return fullName;
};

export const AuthActionType = {
  REGISTER: "REGISTER",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT"
};

export const ListType = {
  Friends: "Friends",
  Posts:"Posts",
  Saved:"Saved"
}

export const RequestsType = {
  Friendship: "Friendship",
  Game: "Game",
  LiveStreaming: "LiveStreaming"
}

export const RelationshipSteps = {
  REQUESTֹ_SENT: "REQUESTֹ_SENT",
  WAITING_FOR_RESPONSE: "WAITING_FOR_RESPONSE",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED",
  BLOCKED: "BLOCKED"
}

export const getError = (err)=> {
  if(typeof err === "string") return err;
  if(typeof err.response?.data === "string") return err.response.data; // axios: 401, 403, 500
  if(Array.isArray(err.response?.data)) return err.response.data[0]; // axios: 400 - array of errors
  if(typeof err.message === "string") return err.message;
  return "Some error, please try again.";
}

export const useResize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    isResponsive: false
  })

  const updateSize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < 768,
      isResponsive: window.innerWidth < 992
    })
  }

  useEffect(() => {
    window.addEventListener("resize", updateSize)
    updateSize()

    return () => {
      window.removeEventListener("resize", updateSize)
    }
  }, [])

  return screenSize;
};