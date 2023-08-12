import React from 'react';
import OriginalDocPaginator from '@theme-original/DocPaginator';
import RegisterButton from '../components/MetadataDisplay/RegisterButton';
import SpeakersForEvent from '../components/Speakers/SpeakersForEvent';

export default function DocPaginator(props) {
  return (
    <>
      <RegisterButton />
      <SpeakersForEvent />
      <OriginalDocPaginator {...props} />
    </>
  );
}
