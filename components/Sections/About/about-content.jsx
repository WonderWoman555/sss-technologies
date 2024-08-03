import React from 'react';
import { AboutFeatureList } from './about-feature-list';

const AboutContent = ({ readMore = true }) => {
    return (
        <div className="w-full mx-auto space-y-6">

            <div className="space-y-6 opacity-75">
                <p className="text-gray-700">
                    SSS Technologies is a start-up that happened to initiate the IT revolution and
                    help clients from all backgrounds to understand how digital transformation can
                    optimize their need. Our organization is a group of astonishing individuals
                    endeavoring to assemble great products and services.
                </p>

                <p className="text-gray-700">
                    We give consultancy, support and progression benefits that empowers clients to
                    manage their data, applications, portals, websites, advising, and business
                    frameworks even more enough, successfully and securely.
                </p>

                {readMore && (
                    <>
                        <p className="text-gray-700">
                            A clarity in perception of your IT needs play a vital role in understanding the
                            purpose of the service you are looking for and How you can get the best of
                            what you are looking for.
                        </p>

                        <p className="text-gray-700">
                            Let&apos;s diversify your ideas and objectives into a Technical road map to achieve
                            the digital platform you are striving for with SSS technologies. This well defined
                            plan gives us a flexible approach to implement our strategy and achieve our
                            objective.
                        </p>
                    </>
                )}

            </div>
            <AboutFeatureList />
        </div>
    );
};

export { AboutContent };