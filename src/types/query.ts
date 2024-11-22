import { UseQueryOptions } from "@tanstack/react-query";

// Reusable utility type for custom hooks
export type CustomQueryOptions<TData, TTransformedData = TData> = Omit<
  UseQueryOptions<TData, unknown, TTransformedData>,
  "queryKey" | "queryFn"
>;
