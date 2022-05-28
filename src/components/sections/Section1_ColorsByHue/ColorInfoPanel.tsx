import React, { HTMLAttributes, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { viewHueAtoms } from '../../../store/store';
import { formatHSL, formatRGB } from '../../../utils/colors';
import { classNames } from '../../../utils/classnames';
import { IconClipboard } from '../../UI/UIIcons';
import { a, easings, useTransition } from '@react-spring/web';
import { HueSlider } from './HueSlider/HueSlider';
import { MonoSwitch } from '../../UI/UIMonoSwitch';

function ColorPreview() {
    const color = useAtomValue(viewHueAtoms.colorAtom);
    const borderColor = () => color ? color.dark ? 'white' : 'black' : 'transparent';
    return (
        <div
            className="p-1 w-24 h-24 border-primary-400 border flex items-center justify-center"
            style={{
                backgroundColor: `${color ? color.hex : 'transparent'}`,
                color: borderColor(),
                //borderColor: borderColor()
            }}
        >
            Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
    );
}

function Mount({ show, setShow, children }: { show: boolean; setShow?: (v: boolean) => void; } & React.HTMLAttributes<HTMLDivElement>) {
    const transitions = useTransition(Number(show), {
        from: { x: 0, opacity: 0, },
        enter: { x: 0, opacity: 1, },
        leave: { x: 20, opacity: 0, config: { duration: 400, easing: easings.easeOutQuad }, onRest: ({ finished }) => show && finished && setShow && setShow(false) },
    });
    return transitions((styles, item) => item ? <a.div style={styles}> {children} </a.div> : null);
}

function CopyNotice() {
    return (
        <div className="px-2 py-px bg-green-500 text-green-50 rounded font-bold">Copied</div>
    );
}

function ValueWithCopy({ name, label }: { name: string; label: string; }) {
    const [focus, setFocus] = useState(false);
    const [showNotice, setShowNotice] = useState(false);
    return (<>
        {/* Column name */}
        <div className="py-0.5 select-none">{name}</div>

        {/* Column value */}
        <div
            className="flex items-center space-x-2 select-none"
            onPointerEnter={() => setFocus(true)}
            onPointerLeave={() => setFocus(false)}
            onClick={async () => { await navigator.clipboard.writeText(label); setShowNotice(true); }}
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

            <Mount show={showNotice} setShow={setShowNotice} ><CopyNotice /></Mount>
        </div>
    </>);
}

function ColorValueInfo() {
    const color = useAtomValue(viewHueAtoms.colorAtom);
    return (<>
        {color &&
            <div className="grid grid-cols-[auto,1fr] gap-x-2 gap-y-0.5">
                <ValueWithCopy name={"Name"} label={color.name} />
                <ValueWithCopy name={"Hex"} label={color.hex} />
                <ValueWithCopy name={"RGB"} label={formatRGB(color.rgb)} />
                <ValueWithCopy name={"HSL"} label={formatHSL(color.hsl)} />
            </div>
        }
    </>);
}

export function HueToleranceInfo({ className }: HTMLAttributes<HTMLDivElement>) {
    const hue = useAtomValue(viewHueAtoms.hueAtom);
    const [tolerance] = useAtom(viewHueAtoms.toleranceAtom);
    return (
        <div className={classNames("text-xs flex space-x-2", className)}>
            <div className="">Hue: {hue}</div>
            <div className="">Tolerance: {tolerance}</div>
        </div>
    );
}

export function ColorInfoPanel() {
    const mono = useAtomValue(viewHueAtoms.monoAtom);
    return (
        <div className="">
            <div className="mx-auto p-4 pt-1 max-w-[42rem] bg-slate-200 rounded grid grid-cols-[minmax(0,1fr),auto]">

                <div className={`col-span-2 h-16 flex flex-col justify-center`}>
                    {/* {!mono &&
                        <div className="">
                            <div className="flex justify-end">
                                <HueToleranceInfo />
                            </div>
                            <HueSlider />
                        </div>
                    } */}
                    <Mount show={mono}>
                        <div className="">
                            <div className="flex justify-end">
                                <HueToleranceInfo />
                            </div>
                            <HueSlider />
                        </div>
                    </Mount>
                </div>

                <div className="flex items-center space-x-4 text-sm">
                    <ColorPreview />
                    <ColorValueInfo />
                </div>

                <MonoSwitch className="place-self-start" />
            </div>
        </div>
    );
}

//TODO: add tailwind palettes - done
//TODO: add input element for exact hue value
//TODO: add control to enlarge/shrink hue slider
//TODO: add control to dim on/off hue slider
//TODO: add dark/light mode
