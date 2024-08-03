import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '../ui/button';
import { SubHeading } from '../subheading';
import Link from 'next/link';

const JobDescCard = ({ job }) => (
    <Card key={job.id}>
        <CardHeader className="flex flex-col gap-0">
            <CardTitle className="text-2xl">{job.title} @ {job.company}</CardTitle>
            <div className='text-base'>{job.location} - {job.type}</div>
            {job.salary && <div className='text-base font-semibold'>Salary - {job.salary} {job.salaryCurrency}</div>}
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
            <div>
                <SubHeading>Job Description:</SubHeading>
                <p className='text-base'>{job.description}</p>
            </div>
            <div>
                <SubHeading>Responsibilities:</SubHeading>
                <ul className='text-base'>
                    {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
            <div>
                <SubHeading>Requirements:</SubHeading>
                <ul className='text-base'>
                    {job.requirements.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
            <div>
                <SubHeading>Benefits:</SubHeading>
                <ul className='text-base'>
                    {job.benefits.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
            <div>
                <SubHeading>Skills:</SubHeading>
                <ul className='text-base flex'>
                    {job.skills.map((item, index) => (
                        <li key={index}>
                            {item.trim()}{index < job.skills.length - 1 ? ", " + " " : ""}
                        </li>
                    ))}
                </ul>
            </div>
        </CardContent>
        <CardFooter className="flex sm:flex-nowrap flex-wrap justify-between">
            <div className="flex gap-5 w-full">
                <div>Posted on: {new Date(job.postedDate).toLocaleDateString()}</div>
                <div>Experience: {job.experienceYears} years</div>
                <div>Education: {job.educationLevel}</div>
            </div>
            <Link href={'#form'}><Button className="bg-primary hover:bg-primary/80">Apply</Button></Link>
        </CardFooter>
    </Card>
);

export { JobDescCard };
