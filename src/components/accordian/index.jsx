import React, { useState } from 'react';
import data from "./data";

export default function Accordian() {
  const [selected, setSeleted] = useState(null);

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}> {/* Assuming dataItem has a unique id */}
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
