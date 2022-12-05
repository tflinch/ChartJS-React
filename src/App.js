import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import {usersData} from './data'

function App() {

  const [userData, setUserData] = useState({
    labels: usersData.map((data) => data.year),
    datasets:[{
      label: "Users Gained",
      data: usersData.map((data) => data.userGain),
      backgroundColor: ["red","green","blue"],
      borderColor: "black",
      borderWidth: 2
    }]
  })

  return (
    <BarChart chartdata={userData}/>
  );
}

export default App;
