import React, { HTMLAttributes } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { viewHueAtoms } from '@/store/store';
import { a, easings, useTransition } from '@react-spring/web';
import { classNames } from '@/utils/classnames';
import { formatHSL, formatRGB } from '@/utils/colors';
import { MonoSwitch } from '@/components/UI/UIMonoSwitch';
import { CopyNotice, ValueView, ValueWithCopy } from '@/components/UI/ValueWithCopy';
import { HueSlider } from './HueSlider/HueSlider';

function SingleValue({ copyValue }: { copyValue: string; }) {
    return (<>
        <ValueWithCopy copyValue={copyValue} copyNotice={<CopyNotice />}>
            <ValueView />
        </ValueWithCopy>
    </>);
}

function ColorPreview() {
    const color = useAtomValue(viewHueAtoms.colorAtom);
    const borderColor = () => color ? color.dark ? 'white' : 'black' : 'transparent';
    return (
        <div
            className="flex-1 p-1 w-24 h-24 border-primary-400 border rounded flex items-end"
            style={{
                backgroundColor: `${color ? color.hex : 'transparent'}`,
                color: borderColor(),
                borderColor: borderColor()
            }}
        >
            {color &&
                <div className="flex flex-col text-xs">
                    <SingleValue copyValue={color.name} />
                    <SingleValue copyValue={color.hex} />
                    <SingleValue copyValue={formatRGB(color.rgb)} />
                    <SingleValue copyValue={formatHSL(color.hsl)} />
                </div>
            }
        </div>
    );
}

export function HueToleranceInfo({ className }: HTMLAttributes<HTMLDivElement>) {
    const [hue, setHue] = useAtom(viewHueAtoms.hueAtom); //TODO: const [localHue, setLocalHue] = useState(0);
    const tolerance = useAtomValue(viewHueAtoms.toleranceAtom);
    return (
        <div className={classNames("text-xs flex", className)}>
            <div className="mr-2">Tolerance: {tolerance}</div>

            {/* <div className="">Hue: {hue}</div> */}

            <div className="mr-1">Hue:</div>
            <input
                className="w-6 text-center outline-none bg-primary-100 focus:bg-primary-100 focus:ring-2 rounded"
                value={hue}
                onChange={(e) => {
                    const v = +e.target.value;
                    !isNaN(v) && setHue(v % 360);
                }}
            />
        </div>
    );
}

function MountHue({ show, setShow, children }: { show: boolean; setShow?: (v: boolean) => void; } & React.HTMLAttributes<HTMLDivElement>) {
    const transitions = useTransition(Number(show), {
        from: { y: -20, opacity: 0, },
        enter: { y: 0, opacity: 1, },
        leave: { y: -20, opacity: 0, config: { duration: 200, easing: easings.easeOutQuad }, onRest: ({ finished }) => show && finished && setShow?.(false) },
    });
    return transitions((styles, item) => item ? <a.div style={styles}> {children} </a.div> : null);
}

export function ColorInfoPanel() {
    const mono = useAtomValue(viewHueAtoms.monoAtom);
    return (
        <div className="bg-primary-200">
            <div className="mx-auto p-4 pt-1 max-w-[42rem] grid grid-cols-[minmax(0,1fr),auto] gap-x-4">

                <div className={`col-span-2 h-16 flex flex-col justify-center`}>
                    <MountHue show={!mono}>
                        <div className="flex justify-end">
                            <HueToleranceInfo />
                        </div>
                        <HueSlider />
                    </MountHue>
                </div>

                <div className="flex items-center space-x-4 text-sm">
                    <ColorPreview />
                    {/* <ColorValueInfo /> */}
                </div>

                <MonoSwitch className="place-self-start" />
            </div>
        </div>
    );
}

//TODO: add tailwind palettes - done
//TODO: add input element for exact hue value - done
//TODO: add control to enlarge/shrink hue slider - no need
//TODO: add control to dim on/off hue slider
//TODO: add dark/light mode
