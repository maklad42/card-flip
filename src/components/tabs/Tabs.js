import React, { useState } from 'react';
import styles from './tabs.module.css';
import TabTitle from './TabTitle';

const Tabs = (props) => {
  const { children, preSelectedTabIndex } = props;

  // First tab selected by default
  const [selectedTabIndex, setSelectedTabIndex] = useState(
    preSelectedTabIndex || 0
  );

  return (
    <div className={styles.tabs}>
      <ul>
        {children.map((item, index) => {
          return (
            <TabTitle
              key={item.props.title}
              title={item.props.title}
              index={index}
              isActive={index === selectedTabIndex}
              setSelectedTab={setSelectedTabIndex}
            />
          );
        })}
      </ul>

      {/* show selected tab by index */}
      {children[selectedTabIndex]}
    </div>
  );
};

export default Tabs;
