import { classNames } from "@/utils/classnames";
import { a, easings, useTransition } from "@react-spring/web";
import { cloneElement, HTMLAttributes, useState } from "react";
import { IconClipboard } from "./UIIcons";

function MountCopyNotice({ show, setShow, children }: { show: boolean; setShow?: (v: boolean) => void; } & React.HTMLAttributes<HTMLDivElement>) {
    const transitions = useTransition(Number(show), {
        from: { x: 0, opacity: 0, },
        enter: { x: 0, opacity: 1, },
        leave: { x: 20, opacity: 0, config: { duration: 400, easing: easings.easeOutQuad }, onRest: ({ finished }) => show && finished && setShow?.(false) },
    });
    return transitions((styles, item) => item ? <a.div style={styles}> {children} </a.div> : null);
}

const textShadow = {
    textShadow: '#98989887 1px 1px, #4141412e -1px -1px 0px'
};

function CopyNotice() {
    return (
        <div className="px-2 py-px text-sm bg-green-500 text-green-900 border-green-700 border rounded" style={textShadow}>Copied</div>
    );
}

export function ValueView({ copyValue, focus }: { copyValue?: string; focus?: boolean; }) {
    return (
        <div
            className={classNames(
                "inline-flex items-center cursor-pointer",
                focus ? "px-1 py-0.5 bg-slate-100 outline-slate-500 outline-1 outline rounded shadow active:scale-[.97]" : "px-1 py-0.5"
            )}
        >
            <div>
                {copyValue}
            </div>

            <div className={classNames("ml-1", focus ? "visible" : "invisible")}>
                <IconClipboard className="w-4 h-4 text-slate-500" />
            </div>
        </div>
    );
}

export function ValueWithCopy({ copyValue, children }: { copyValue: string; children?: JSX.Element } & HTMLAttributes<HTMLDivElement>) {
    const [focus, setFocus] = useState(false);
    const [showNotice, setShowNotice] = useState(false);
    return (
        <div
            className="flex items-center space-x-2 select-none"
            onPointerEnter={() => setFocus(true)}
            onPointerLeave={() => setFocus(false)}
            onClick={async () => { await navigator.clipboard.writeText(copyValue); setShowNotice(true); }}
        >
            {children ? cloneElement(children, {copyValue, focus}) : <ValueView copyValue={copyValue} focus={focus}/>}

            <MountCopyNotice show={showNotice} setShow={setShowNotice} >
                <CopyNotice />
            </MountCopyNotice>
        </div>
    );
}
