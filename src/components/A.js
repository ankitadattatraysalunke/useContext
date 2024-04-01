import React, { createContext } from 'react'
import B from './B'
const FirstName = createContext()
const LastName = createContext()
function A(props) {
  return (
    <div>
      <FirstName.Provider value="Ram">
        <LastName.Provider value="Shyam">
      <B />
      </LastName.Provider>
      </FirstName.Provider>
    </div>
  )
}

export default A
export {FirstName, LastName}