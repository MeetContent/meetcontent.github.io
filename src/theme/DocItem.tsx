import React, { createContext } from 'react';
import OriginalDocItem from '@theme-original/DocItem';
import MetadataDisplay from '@site/src/components/MetadataDisplay/MetadataDisplay';

type EventMetadataProps = {
  division: 'KRK' | 'WRO' | 'IBE';
  meetup_number: number;
  speakers: string[];
  location: string;
  date: string;
  registration_link: string;
};

const DocItemContext: React.Context<EventMetadataProps | null> =
  createContext(null);

export function useEventMetadata() {
  return React.useContext(DocItemContext);
}

export default function DocItem(props) {
  const {
    date,
    division,
    location,
    meetup_number,
    registration_link,
    speakers,
  } = props.content.frontMatter;

  return (
    <DocItemContext.Provider
      value={{
        date,
        division,
        location,
        meetup_number,
        registration_link,
        speakers,
      }}
    >
      <MetadataDisplay />
      <OriginalDocItem {...props} />
    </DocItemContext.Provider>
  );
}
