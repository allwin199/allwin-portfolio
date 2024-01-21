import {PortableTextBlock} from "sanity";

export type Contributions = {
    _id : string;
    _createAt: Date;
    organization: string;
    slug: string;
    issue: string;
    issue_id:string;
    url: string;
    content1: string;
    content2: string;
    content3: string;
}