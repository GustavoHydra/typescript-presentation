import React, { useState } from 'react';
import './App.css';

interface Props {
  name: string,
  age: number,
  profession: string,
  gender: "male" | "female" | "other",
  accountType?: string
}

const UserInfo: React.FC<Props> = (props) => {
  const [user] = useState<Props>({...props, accountType: "Standard"})
  const [isRegistered, setIsRegistered] = useState<{registered: boolean}>({registered: false})
  return (
    <div>
      <span>Name: {user.name}</span>
      <span>Age: {user.age}</span>
      <span>Gender: {user.gender}</span>
      <span>Profession: {user.profession}</span>
      <span>Account: {user.accountType}</span>
      <span>Registered: {isRegistered}</span>
      <button onClick={() => setIsRegistered({registered: true})}></button>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      User account info:
      <UserInfo 
        name="Gustavo"
        age={28}
        profession="Spaghetti coder"
        gender="male"
      />
    </div>
  );
}

export default App;
