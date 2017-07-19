import React from "react";
import styled from "styled-components";
import TimeBlock from './TimeBlock';

// ProgramDayBlock - displays the rows below the header
//  arguments:
//    dayBlock - one element from the /data/detailedProgram.js, eg.
//      {
//        day: "Monday",
//        topic: "Finding an Idea",
//        timeBlocks: [
//          {
//            title: "Finding a need",
//            type: 'lecture',
//            time: '9:30-10:15'
//          },
//          {...}
//        ]
//      }
//    isMobile - Boolean
//    mainColor - String, color from the Theme, eg. 'primary'
//    secondColor - String, color from the Theme, eg. 'primary'

const ProgramDayBlock = ({ dayBlock, mainColor, secondColor }) => (
  <div>
    {dayBlock.timeBlocks.map((timeBlock, index) => (
      <TimeBlock
        key={index}
        timeBlock={timeBlock}
        mainColor={mainColor}
        secondColor={secondColor}
      />
    ))}
  </div>
);

export default ProgramDayBlock;
