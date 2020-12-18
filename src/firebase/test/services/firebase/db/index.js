/**
 * Create context provider
 */
import React, { useState, useContext, useEffect } from "react"

import Loading from "src/components/Loading"
import AuthContext from "src/context/AuthContext"
import DBContext from "src/context/DBContext"
// import { db } from "../apps"
import { handleLogin, handleSignup, getUser } from "./db"

const DBProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext)
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    if (currentUser() !== null) {
      getUser()
        .get()
        .then(doc => {
          setUser(doc.data())
        })
    } else {
      setUser({})
    }
  }, [])

  if (user === undefined) {
    return <Loading />
  }
  return (
    <DBContext.Provider value={{ user, handleLogin, handleSignup }}>
      {children}
    </DBContext.Provider>
  )
}

export { DBProvider }