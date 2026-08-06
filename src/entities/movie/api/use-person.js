import { useQuery } from "@tanstack/react-query";
import { getPersonById } from "../../../shared/api/person-api";

export function usePerson (id) {
    return useQuery({
     queryKey: ["person", id],
     queryFn: () => getPersonById(id),
     enabled: !!id,
    })
} 