import React, { ReactElement } from "react";

export interface ProjectInfo {
    title: string,
    desc: string, 
    imgUrl: string,
    href: string, 
    tools: ReactElement, 
    tags?: ReactElement, 
    content?: ReactElement,
}