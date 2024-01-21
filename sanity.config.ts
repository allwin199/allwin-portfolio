import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "tczk9842",
    dataset: "producttion",
    title: "My Portfolio",
    apiVersion: "2024-01-21",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas}
})

export default config;