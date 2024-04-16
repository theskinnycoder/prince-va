import { client } from "@/lib/sanity/client";
import SanityService from "./sanity-service";

export const sanityService = new SanityService(client);
