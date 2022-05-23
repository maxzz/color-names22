import React, { useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { viewHueAtoms } from '../../../store/store';
import { formatHSL, formatRGB } from '../../../utils/colors';
import { classNames } from '../../../utils/classnames';
import { IconClipboard } from '../../UI/UIIcons';
import { a, easings, useTransition } from '@react-spring/web';

function HueInfo() {
    const hue = useAtomValue(viewHueAtoms.hueAtom);
    const [tolerance] = useAtom(viewHueAtoms.toleranceAtom);
    return (
        <div className="flex space-x-2">
            <div className="">Hue: {hue}</div>
            <div className="">Tolerance: {tolerance}</div>
        </div>
    );
}

function ColorPreview() {
    const color = useAtomValue(viewHueAtoms.colorAtom);
    const borderColor = () => color ? color.dark ? 'white' : 'black' : 'transparent';
    return (
        <div
            className="w-24 h-24 border flex items-center justify-center"
            style={{
                backgroundColor: `${color ? color.hex : 'transparent'}`,
                color: borderColor(),
                borderColor: borderColor()
            }}
        >
            Test
        </div>
    );
}

function Mount({ show, setShow, children }: { show: boolean; setShow: (v: boolean) => void; } & React.HTMLAttributes<HTMLDivElement>) {
    const transitions = useTransition(Number(show), {
        // const transitions = useTransition(show, {
        from: { x: 0, opacity: 0, },
        enter: { x: 0, opacity: 1, config: { duration: 500, easing: easings.easeOutCubic }, },
        leave: { x: 200, opacity: 0, config: { duration: 12400, easing: easings.easeOutQuad }, /* onRest: () => console.log('done') */ },
        //exitBeforeEnter: true,

        // onRest: (result, ctrl, item) => {
        //     //console.log('done', finished);
        //     console.log('done show= ', show, result, ctrl, item);

        //     show && setShow(false);
        // },

        onRest: {
            opacity: ({finished}, val) => {
                //console.log('done', finished);
                if (show && finished) {
                    console.log('done opacity show= ', val.id, show);

                    show && setShow(false);
                }
            }
        },

        // onRest: () => setShow(false),
        //config: { duration: 200, },
    });
    return transitions((styles, item) => item
        ? <a.div style={styles}>
            {children}
        </a.div>
        : null
    );
}

function CopyNotice() {
    return (
        <div className="">Copied</div>
    );
}

function ValueWithCopy({ name, label }: { name: string; label: string; }) {
    const [focus, setFocus] = useState(false);
    const [showNotice, setShowNotice] = useState(false);
    return (<>
        <div className="py-0.5 select-none">{name}</div>
        <div
            className="flex items-center space-x-2"
            onPointerEnter={() => setFocus(true)}
            onPointerLeave={() => setFocus(false)}
            onClick={async () => {
                await navigator.clipboard.writeText(label);
                setShowNotice(true);
                //toastSucceeded('Link copied to clipboard');
            }}
        >
            <div
                className={classNames(
                    "inline-flex items-center cursor-pointer",
                    focus ? "px-1 py-0.5 bg-slate-100 outline-slate-500 outline-1 outline rounded shadow active:scale-[.97]" : "px-1 py-0.5"
                )}
            >
                <div className="">{label}</div>
                <div className={classNames("ml-1", focus ? "visible" : "invisible")}>
                    <IconClipboard className="w-4 h-4 text-slate-500" />
                </div>
            </div>

            {/* <Mount show={showNotice} setShow={setShowNotice} ><CopyNotice /></Mount> */}
            <Mount show={showNotice} setShow={setShowNotice} >{showNotice && <CopyNotice />}</Mount>
            {/* {showNotice && <CopyNotice />} */}
        </div>
    </>);
}

function ColorInfo() {
    const color = useAtomValue(viewHueAtoms.colorAtom);
    return (<>
        {color &&
            <div className="grid grid-cols-[auto,1fr] gap-x-2 gap-y-0.5">
                <ValueWithCopy name={"Name"} label={color.name} />
                {/* <ValueWithCopy name={"Hex"} label={color.hex} />
                <ValueWithCopy name={"RGB"} label={formatRGB(color.rgb)} />
                <ValueWithCopy name={"HSL"} label={formatHSL(color.hsl)} /> */}
            </div>
        }
    </>);
}

export function ColorInfoPanel() {
    return (
        <div className="px-4 flex items-end justify-between">
            <div className="py-1 flex space-x-4 text-sm">
                <ColorPreview />
                <ColorInfo />
            </div>
            <HueInfo />
        </div>
    );
}

//TODO: add tailwind palettes
