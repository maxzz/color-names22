import { HTMLAttributes, SVGProps } from "react";

export function IconGithubLogo(props: SVGProps<SVGSVGElement> & HTMLAttributes<SVGSVGElement>) {
    const { title, ...rest } = props;
    return (
        <svg viewBox="0 0 1024 1024" {...rest}>
            {title && <title>{title}</title>}
            <path d="M512 76a447 447 0 00-148 870c23 6 20-11 20-22v-78c-136 16-141-74-151-89-18-31-61-39-48-54 30-16 62 4 98 58 27 39 78 32 104 26 6-24 18-45 35-61-141-25-199-111-199-213 0-49 16-95 48-132-20-60 2-112 5-120 58-5 119 42 123 46a435 435 0 01226 0c12-9 68-49 122-44 3 8 25 58 5 118 33 37 49 83 49 132 0 103-59 189-200 213a128 128 0 0138 91v113c1 9 0 18 15 18A448 448 0 00512 76z" />
        </svg>
    );
}

export function IconClipboard(props: SVGProps<SVGSVGElement> & HTMLAttributes<SVGSVGElement>) {
    const { title, ...rest } = props;
    return (
        <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
    );
}
