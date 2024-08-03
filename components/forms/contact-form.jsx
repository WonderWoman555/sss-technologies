"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { formSchema } from "@/schema"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { CustomButton } from "../ui/custom"
import { toast } from "sonner"
import { useTransition } from "react"
import { submitContactForm } from "@/actions"

export function ContactForm() {
    const [isPending, startTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            company: "",
            budget: "$1000-$5000",
            leadSource: "Search Engine",
            message: "",
            phoneNumber: ""
        },
    });

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
                const result = await submitContactForm(values);
                console.log(result)
                if (result.error) {
                    toast.error(result.message);
                } else {
                    toast.success(result.message, { duration: 4000, icon: '👋' });
                    form.reset();
                }
            });
        } catch (error) {
            console.error(error);
            toast.error('An error occurred while submitting the application.');
        }
    };

    return (
        <div className="lg:w-11/12 w-11/12 lg:py-20 mx-auto">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:gap-5">
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
                                        <Input placeholder="john@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Contact Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="+91 **********" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company (Optional)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Acme Inc." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Budget</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a budget range" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="$1000-$5000">$1000-$5000</SelectItem>
                                            <SelectItem value="$5000-$10000">$5000-$10000</SelectItem>
                                            <SelectItem value="$10000-$20000">$10000-$20000</SelectItem>
                                            <SelectItem value="$20000+">$20000+</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="leadSource"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>How did you hear about us?</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a source" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Search Engine">Search Engine</SelectItem>
                                        <SelectItem value="Social Media">Social Media</SelectItem>
                                        <SelectItem value="Referral">Referral</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Type your message here..."
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* <Button type="submit">Submit</Button> */}
                    <CustomButton className="w-1/3" disabled={isPending}>Submit</CustomButton>
                </form>
            </Form>
        </div>
    )
}