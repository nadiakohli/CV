import React from 'react';

// Icons
import { ReactComponent as IconGlobe } from 'assets/icons/globe.svg';
import { ReactComponent as IconEnvelope } from 'assets/icons/envelopeSquare.svg';
import { ReactComponent as IconMap } from 'assets/icons/mapMarkedAlt.svg';
import { ReactComponent as IconPhone } from 'assets/icons/phoneSquareAlt.svg';

// Styles
import { UnorderedList } from 'components/Resume/styled';
import { TextWrap, IconWrap, ListItem } from 'components/Resume/MainInfo/Contacts/styled';

const Contacts = () => (
  <UnorderedList primary>
    <ListItem>
      <IconWrap primary>
        <IconPhone />
      </IconWrap>
      <TextWrap>+123-456-7890</TextWrap>
    </ListItem>
    <ListItem>
      <IconWrap primary>
        <IconEnvelope/>
      </IconWrap>
      <TextWrap>hello@reallygreatsite.com</TextWrap>
    </ListItem>
    <ListItem>
      <IconWrap primary>
        <IconGlobe/>
      </IconWrap>
      <TextWrap>www.reallygreatsite.com</TextWrap>
    </ListItem>
    <ListItem>
      <IconWrap primary>
        <IconMap/>
      </IconWrap>
      <TextWrap>123 Anywhere st., Any City, ST 12345</TextWrap>
    </ListItem>
  </UnorderedList>
);

export default Contacts;
