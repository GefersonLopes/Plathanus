import { z } from "zod";

export const genericSchema = z.object({});

export type VehicleFilterFormValues = z.infer<typeof genericSchema>;
