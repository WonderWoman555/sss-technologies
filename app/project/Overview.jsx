import { Description } from '@/components/Description';
import { Heading } from '@/components/Heading';
import React from 'react';
import Summary from './Summary';
import { Icon } from '@/components/ui';

const Overview = () => {

  const overviewData = [
    {
      id: 1,
      icon: <Icon.portfolioPage1/>,
      title: "date",
      description: "10 April 2024",
    },
    {
      id: 2,
      icon: <Icon.portfolioPage2/>,
      title: "client",
      description: "Lorem Ipsum",
    },
    {
      id: 3,
      icon: <Icon.portfolioPage3/>,
      title: "website",
      description: "www.domainname.com",
    },
    {
      id: 4,
      icon: <Icon.portfolioPage4/>,
      title: "location",
      description: "New York, USA",
    },
  ];

  return (
    <div>
      <div className="container mx-auto py-9 md:px-12 px-5">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-3/12 bg-mute rounded-3xl text-center">
            {overviewData.map((item) => (
              <div className="p-9" key={item.id}>
                <div className="flex flex-col items-center">
                  <Heading heading={"h4 text"} className="font-medium">{item.icon}</Heading>
                  <Description heading={"h4"}>{item.title}</Description>
                  <Heading heading={"h4"} style={"font-medium"}>{item.description}</Heading>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className="w-full lg:w-9/12 pl-3 lg:pl-9">
            <Summary/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
