import {PortableTextBlock} from "sanity";

export type Project = {
    _id : string;
    _createAt: Date;
    project_name: string;
    project_desc:string;
    slug: string;
    image: string;
    url: string;
    github_url:string;
    contract_url:string;
    content1: string;
    content2: string;
    content3: string;
    content: PortableTextBlock[];
}