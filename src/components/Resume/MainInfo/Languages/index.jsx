import React from 'react';

// Styles
import { UnorderedList, ListItem } from 'components/Resume/styled';

// Constants
const LANGUAGES = [
  'English',
  'Chinese',
  'Japanese',
  'Spanish',
];

const Languages = () => (
  <UnorderedList>
    {LANGUAGES.map((item) => <ListItem key={item}>{item}</ListItem>)}
  </UnorderedList>
);

export default Languages;
