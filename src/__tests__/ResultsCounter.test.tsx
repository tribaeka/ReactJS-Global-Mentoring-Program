import React from "react";
import { shallow } from "enzyme";
import ResultsCounter from "../components/search-results/results-counter/ResultsCounter";

test('ResultCounter renders with properly value', () => {
    const inputValue = 42;
    const counter = shallow(<ResultsCounter moviesFound={inputValue}/>);
    expect(counter.find('.results-counter').text()).toEqual(inputValue.toString());
});
