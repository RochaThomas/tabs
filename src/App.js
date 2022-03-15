import React, {useState} from 'react';
import './App.css';
import Tabs from './components/Tabs';

function App() {

  const tabsArray = [
    {
      label: "Tab 1",
      content: "Tab 1 Content is showing"
    },
    {
      label: "Tab 2",
      content: "Content for Tab 2 is showing"
    },
    {
      label: "Tab 3",
      content: "This is Tab 3's content"
    }
  ];

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="App">
      <Tabs tabs={tabsArray} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
    </div>
  );
}

export default App;
