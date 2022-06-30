import nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
    build: {
        files: `${buildFolder}/files/`
    },
    src: {
        files: `${srcFolder}/files/**/*.*`
    },
    watch: {},
    clean: buildFolder,
    srcFolder,
    rootFolder,
    ftp: ""
};