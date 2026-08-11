import { z } from "zod";

export const movieFiltersSchema = z.object({
    year: z
        .string()
        .refine(
            (value) =>
                value === "" ||
                (/^\d{4}$/.test(value) &&
                    Number(value) >= 1900 &&
                    Number(value) <= new Date().getFullYear()),
            {
                message: "Enter a valid year",
            }
        ),
    rating: z
        .string()
        .refine(
            (value) =>
                value === "" ||
                (Number(value) >= 0 && Number(value) <= 10),
            {
                message: "Rating must be between 0 and 10",
            }
        ),

    genre: z.string(),
});