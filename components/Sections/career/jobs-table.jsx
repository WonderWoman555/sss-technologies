'use client';
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { JobDescCard } from "@/components/Cards/job-description-card";

const JobsTable = ({ jobs }) => {
    console.log(jobs);

    if (!jobs || jobs.length === 0 || !jobs.length) {
        return (
            <div className="uppercase text-2xl w-full text-center font-semibold">Sorry no job available right now</div>
        );
    }

    return (
        <div className="w-full">
            <Accordion type="single" collapsible>
                {jobs.map((job, index) => (
                    <AccordionItem key={job.id} value={`item-${index}`}>
                        <AccordionTrigger className="flex w-full">
                            <Table className="w-full ">
                                <TableBody className="py-10 w-full ">
                                    <TableRow key={job.id} className="h-16 w-full border-b flex items-center justify-between">
                                        <TableCell className="lg:text-lg text-sm lg:min-w-80 flex justify-start font-semibold">{job.title}</TableCell>
                                        <TableCell className="w-32 sm:inline-block hidden">{job.location}</TableCell>
                                        <TableCell className="w-32 sm:inline-block hidden whitespace-nowrap">{job.experienceYears} years of experience</TableCell>
                                        <TableCell className="w-32 sm:inline-block hidden">{job.salary}</TableCell>
                                        <TableCell className="w-32">
                                            <Button variant={'link'} className={'border'}>Know more</Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </AccordionTrigger>
                        <AccordionContent>
                            <JobDescCard job={job} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

export { JobsTable }