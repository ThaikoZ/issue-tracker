import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(1, "Title is requierd.").max(255),
  description: z.string().min(1, "Description is requierd.").max(255),
});

export const patchIssueSchema = z.object({
  title: z.string().min(1, "Title is requierd.").max(255).optional(),
  description: z
    .string()
    .min(1, "Description is requierd.")
    .max(255)
    .optional(),
  assignedUserId: z
    .string()
    .min(1, "AssignedUserId is required.")
    .max(255)
    .optional()
    .nullable(),
});
