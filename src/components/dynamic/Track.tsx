import React from "react"

export default function Track({ url, idName, className }: { url: string, idName :string, className?: string }) {
    return (
        // <iframe  width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe id={idName} className={`rounded-lg max-w-[35rem] ${ className }`} src={url} width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    )
};
