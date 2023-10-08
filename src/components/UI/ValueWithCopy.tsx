import { cloneElement, HTMLAttributes, ReactNode, useState } from "react";
import { a, easings, useTransition } from "@react-spring/web";
import { classNames } from "@/utils/classnames";
import { IconClipboard } from "./icons/normal";

function MountCopyNotice({ show, setShow, children }: { show: boolean; setShow?: (v: boolean) => void; } & React.HTMLAttributes<HTMLDivElement>) {
    const transitions = useTransition(Number(show), {
        from: { x: 0, opacity: 0, },
        enter: { x: 0, opacity: 1, },
        leave: {
            x: 20, opacity: 0,
            config: { duration: 400, easing: easings.easeOutQuad },
            onRest: ({ finished }) => show && finished && setShow?.(false)
        },
    });
    return transitions(
        (styles, item) => {
            if (!item) {
                return null;
            }
            return (
                <a.div style={styles}>
                    {children}
                </a.div>
            );
        }
    );
}

const textShadow = {
    textShadow: '#98989887 1px 1px, #4141412e -1px -1px 0px'
};

function CopyConfirmMessage() {
    return (
        <div className="px-2 py-px text-sm bg-green-500 text-green-900 border-green-700 border rounded" style={textShadow}>
            Copied
        </div>
    );
}

export function ValueViewIcon({ valueToCopy, isHovered }: { valueToCopy?: string; isHovered?: boolean; }) {
    return (
        <div
            className={classNames(
                "px-1 py-1",
                "inline-flex items-center cursor-pointer",
                isHovered && "px-1 py-1 bg-slate-100 text-primary-900 outline-slate-500 outline-1 outline rounded shadow active:scale-x-[.97]",
            )}
        >
            <div>
                {valueToCopy}
            </div>

            <div className={classNames("ml-1", isHovered ? "visible" : "invisible")}>
                <IconClipboard className="w-4 h-4 text-primary-500" />
            </div>
        </div>
    );
}

type ValueWithCopyProps = {
    valueToCopy: string;
    children?: JSX.Element;
    copyNotice?: ReactNode;
};

export function ValueWithCopy({ valueToCopy, children, copyNotice }: ValueWithCopyProps & HTMLAttributes<HTMLDivElement>) {
    const [isHovered, setIsHovered] = useState(false);
    const [showNotice, setShowNotice] = useState(false);
    return (
        <div
            className="flex items-center space-x-2 select-none"
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
            onClick={async () => { await navigator.clipboard.writeText(valueToCopy); setShowNotice(true); }}
        >
            {children
                ? cloneElement(children, { valueToCopy, isHovered })
                : <ValueViewIcon valueToCopy={valueToCopy} isHovered={isHovered} />
            }

            <MountCopyNotice show={showNotice} setShow={setShowNotice} >
                {copyNotice ? copyNotice : <CopyConfirmMessage />}
            </MountCopyNotice>
        </div>
    );
}
