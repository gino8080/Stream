import React from "react";
import { Spinner } from "native-base"
import Storage from "../data/Storage";

const AuthManager = (props) => {

  React.useEffect(() => {

    checkLogged()
  }, [])

  const checkLogged = async () => {
    const isLogged = await Storage.get("isLogged");

    let targetPage = "auth"
    if (isLogged) {
      targetPage = "home";
    }

    props.navigation.navigate(targetPage)

  }

  return (
    <Spinner />
  )

}

export default AuthManager;
