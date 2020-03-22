import React from 'react';
import { QuestionText, OptionList } from 'components/Question';

export const Survey = ({ title, options, ...rest }) => {
  return (
    <React.Fragment {...rest}>
      <QuestionText>{title}</QuestionText>
      <OptionList options={options} />
    </React.Fragment>
  );
};

export default Survey;
