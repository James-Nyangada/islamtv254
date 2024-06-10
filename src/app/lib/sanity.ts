import { createClient } from "next-sanity";
import  ImageUrlBuilder  from "@sanity/image-url";

export const client = createClient({
    apiVersion: '2023-05-03',
    projectId: 'dv3w0yfm',
    dataset: 'production',
    useCdn: true,
});

const builder = ImageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}

