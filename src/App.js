import React from 'react';
import './App.css';
import Tabs from './components/tabs/Tabs';
import TabPane from './components/tabs/TabPane';
import Card from './components/cards/Card';

const App = () => {
  return (
    <div className="App">
      <Tabs>
        <TabPane title="Cards">
          <div>
            <Card />
          </div>
        </TabPane>
        <TabPane title="Standard">
          <div>Standard</div>
        </TabPane>
        <TabPane title="Premium">
          <div>Premium</div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default App;
