"use client"

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Icon } from "../ui";

import { submitJobApplication } from "@/actions";
import { JobApplicationSchema } from "@/schema";

export function JobApplicationForm({ jobs, className }) {
    const [isPending, startTransition] = useTransition();
    const [fileName, setFileName] = useState("");

    const form = useForm({
        resolver: zodResolver(JobApplicationSchema),
        defaultValues: {
            fullName: "",
            email: "",
            contactNumber: "",
            experience: "",
            address: "",
            jobId: "",
            employmentStatus: "",
            resumeFile: null,
        },
    });

    const { isSubmitting } = form.formState;

    const onSubmit = async (values) => {
        console.log(values);
        try {
            const formData = new FormData();
            Object.keys(values).forEach(key => {
                if (key === 'resumeFile' && values[key] instanceof File) {
                    formData.append(key, values[key]);
                } else {
                    formData.append(key, values[key].toString());
                }
            });

            startTransition(async () => {
                const result = await submitJobApplication(formData);
                if (result.error) {
                    toast.error(result.message);
                } else {
                    toast.success(result.message, { duration: 4000, icon: '👋' });
                    form.reset();
                    setFileName("");
                }
            });
        } catch (error) {
            console.error(error);
            toast.error('An error occurred while submitting the application.');
        }
    };

    return (
        <div className={`${className}`} id="form">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit, (err) => console.log(err))} className="space-y-5">
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-4 items-end">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="john@example.com" type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="contactNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Contact Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="+1 234 567 8900" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="123 Main St, City, Country" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="jobId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Available positions</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Available positions" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {jobs?.map((job) => (
                                                <SelectItem key={job.id} value={job.id}>{job.title}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="experience"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Total work experience</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            min="0"
                                            step="1"
                                            placeholder="Experience in years"
                                            {...field}
                                            onChange={(e) => field.onChange(parseInt(e.target.value) || '')}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="employmentStatus"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Employment Status</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select employment status" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="EMPLOYED">Employed</SelectItem>
                                            <SelectItem value="UNEMPLOYED">Unemployed</SelectItem>
                                            <SelectItem value="STUDENT">Student</SelectItem>
                                            <SelectItem value="OTHER">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="resumeFile"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Attach Resume</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                field.onChange(file);
                                                setFileName(file ? file.name : "");
                                            }}
                                        />
                                    </FormControl>
                                    {fileName && <p className="text-sm text-gray-500">{fileName}</p>}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="h-10 w-full sm:w-80">
                            <Button
                                className="w-full sm:w-7/12 rounded-xl bg-primary 
                                disabled:bg-primary-light hover:bg-primary/80 h-full"
                                type="submit"
                                disabled={isPending || isSubmitting}
                                aria-label="Submit Application"
                            >
                                {isPending ? <Icon.spinner className="animate-spin h-4 w-4" /> : "Submit Application"}
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    );
}