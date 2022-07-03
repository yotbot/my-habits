import React from "react";

import css from "./DateRangeSelector.module.scss";

const DateRangeSelector = () => (
  <ul className={css.dateRangeSelector}>
    <li>Day</li>
    <li>Week</li>
    <li>Month</li>
    <li>Year</li>
  </ul>
);

export default DateRangeSelector;
