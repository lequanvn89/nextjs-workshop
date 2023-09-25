import React from 'react';
import { Metadata, NextPage } from 'next';
import Image from 'next/image';
import { Feature, FeaturesList } from '@stn-ui/features';

import { FEATURES_ITEMS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Handful Features',
};

export const dynamic = 'force-static';

const Features: NextPage = () => (
  <FeaturesList>
    {FEATURES_ITEMS.map(({ id, title, description, icon, image }) => (
      <Feature
        id={id}
        key={id}
        title={title}
        description={description}
        icon={icon}
        image={<Image src={image} alt={title} fill />}
      />
    ))}
  </FeaturesList>
);

export default Features;
