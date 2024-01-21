import { groq } from "next-sanity";
import {client } from "./client";
import {Project} from "../../../types/Project";
import {Contributions} from "../../../types/Contributions";

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

export const getContributions = () : Promise<Contributions[]> => {
    
    return client.fetch(
        groq`*[_type == "contributions"]{
            _id,
            _createdAt,
            organization,
            "slug": slug.current,
            issue,
            issue_id,
            url,
            content1,
            content2,
            content3
        }`
    )
}