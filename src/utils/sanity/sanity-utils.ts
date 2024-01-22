import { groq } from "next-sanity";
import {client } from "./client";
import {Project} from "../../../types/Project";
import {Contributions} from "../../../types/Contributions";

export const getProjects = () : Promise<Project[]> => {

    return client.fetch(
        groq`*[_type == "works"]{
            _id,
            _createdAt,
            project_name,
            "slug": slug.current,
            project_desc,
            github_url,
            contract_url,
            "image": image.assert->url,
            url,
            content1,
            content2,
            content3,
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
        } | order(slug asc)`
    )
}