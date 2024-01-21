"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/utils/sanity/client";

const Admin = () => {
    return <NextStudio config={config} />;
};

export default Admin;
