import { z } from "zod"

export const formSchema = z.object({
    fullName: z.string().min(2, {
        message: "Full name must be at least 2 characters.",
    }).max(50, {
        message: "Full name must not exceed 50 characters."
    }),

    email: z.string().email({
        message: "Please enter a valid email address.",
    }),

    phoneNumber: z.string().min(10).max(12),

    company: z.string().min(2, {
        message: "Company name must be at least 2 characters.",
    }).max(100, {
        message: "Company name must not exceed 100 characters."
    }).optional(),

    budget: z.enum(["$1000-$5000", "$5000-$10000", "$10000-$20000", "$20000+"], {
        errorMap: () => ({ message: "Please select a valid budget range." }),
    }),

    leadSource: z.enum(["Search Engine", "Social Media", "Referral", "Other"], {
        errorMap: () => ({ message: "Please select a valid lead source." }),
    }),

    message: z.string().min(10, {
        message: "Message must be at least 10 characters long.",
    }).max(500, {
        message: "Message must not exceed 500 characters."
    }),
});