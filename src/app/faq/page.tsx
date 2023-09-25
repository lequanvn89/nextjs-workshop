import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { Accordion, AccordionItem } from '@stn-ui/accordion';
import { Banner } from '@stn-ui/banner';
import { Button } from '@stn-ui/button';
import { DiamondIcon } from '@stn-ui/icons';

import { FAQ_ITEMS } from '@/lib/constants';

const Faq: NextPage = () => (
  <>
    <Accordion>
      {FAQ_ITEMS.map(({ id, title, description }) => (
        <AccordionItem id={id} key={id} title={title}>
          {description}
        </AccordionItem>
      ))}
    </Accordion>
    <Banner title="Contact us" description="We are here to help you" icon={<DiamondIcon />}>
      <Button as={Link} type="link" to="mailto:support@test.com">
        Contact us
      </Button>
    </Banner>
  </>
);

export default Faq;
