"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity/config/client-config";

const Admin = () => {
    return <NextStudio config={config} />;
};

export default Admin;
