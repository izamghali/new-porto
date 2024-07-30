import React, { ReactElement, ReactNode } from "react";

export enum ProjectType {
    "Team Project",
    "Hobby Project",
    "On Progress",
    "Work-related Project",
    "Assignment Project"
}

export interface ProjectMember {
    name: string,
    portfolio: string
}

export interface ProjectTool {
    name: string,
    href: string,
    logo: ReactNode
}

export interface ProjectLink {
    name: string,
    link: string
}

export interface ProjectInfo {
    title: string,
    desc: string, 
    imgUrl: string,
    href: string, 
    links?: ProjectLink[],
    tools: ProjectTool[], 
    tags?: ReactElement, 
    content?: ReactElement,
    type?: ProjectType,
    year?: number,
    members?: ProjectMember[]
}