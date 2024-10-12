import { z } from "zod";

// Validate file extensions and size explicitly
export const OrgansationSetupSchema = z.object({
  organisation: z.string().min(2, {
    message: "Organisation must be at least 2 characters.",
  }),
  organisationDescription: z
    .string()
    .min(2, {
      message: "Description must be at least 2 characters.",
    })
    .optional(),
  organisationLogo: z
    .object({
      file: z.instanceof(File).nullable(),
      name: z
        .string()
        .min(1, {
          message: "File name must be at least 1 character.",
        })
        .optional(),
      size: z
        .number()
        .max(3000000, {
          message: "File size must be less than 3MB.",
        })
        .optional(),
    })
    .refine((data) => data.file === null || data.file.size <= 3000000, {
      message: "File size must be less than 3MB.",
    }),
});

export type OrgansationSetupSchemaType = z.infer<typeof OrgansationSetupSchema>;
