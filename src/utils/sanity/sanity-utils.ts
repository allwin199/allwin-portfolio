import { groq } from "next-sanity";
import {client } from "./client";
import {Project} from "../../../types/Project";

export const getProjects = () : Promise<Project[]> => {

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.assert->url,
            url,
            content
        }`
    );


}