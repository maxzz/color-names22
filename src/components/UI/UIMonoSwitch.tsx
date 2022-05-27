import React, { HTMLAttributes, useState } from "react";
import { useAtom } from "jotai";
import { viewHueAtoms } from "../../store/store";
import { a, useSpring } from "@react-spring/web";
import { classNames } from "../../utils/classnames";
import { UISwitch } from "./UiSwitch";

export namespace Tests {
    export function MonoSwitch0({ className }: HTMLAttributes<HTMLDivElement>) {
        const [mono, setMono] = useState(false);
        return (
            <div className="m-2 self-end flex items-center space-x-2 text-xs">
                <div className="">Monochrome</div>
                <UISwitch value={!mono} onChange={(v) => setMono(!v)} />
                <div className="">Color</div>
            </div>
        );
    }
    
    export function MonoSwitch1({ className }: HTMLAttributes<HTMLDivElement>) {
        const [mono, setMono] = useAtom(viewHueAtoms.monoAtom);
        return (
            <div className="mb-2 pt-2 self-end flex flex-col items-center space-x-2 border border-red-500 rounded text-xs">
                <div className="flex">
                    <div className="" title="Monochrome">Mono</div>
                    <div className="border-l border-red-400">Color</div>
                </div>
                <UISwitch value={!mono} onChange={(v) => setMono(!v)} />
            </div>
        );
    }
    
    export function MonoSwitch2({ className }: HTMLAttributes<HTMLDivElement>) {
        const [mono, setMono] = useAtom(viewHueAtoms.monoAtom);
        return (
            <div className="mb-2 self-end relative border border-red-500 rounded text-xs">
                <div className="absolute pt-2 inset-0 flex items-start justify-center">
                    <UISwitch value={!mono} onChange={(v) => setMono(!v)} />
                </div>
                <div className="px-2 h-14 flex">
                    <div className="px-2 flex items-end" title="Monochrome">Mono</div>
                    <div className="px-2 flex items-end text-center border-l border-red-400">Color</div>
                </div>
            </div>
        );
    }
    
    export function MonoSwitch3({ className }: HTMLAttributes<HTMLDivElement>) {
        const [mono, setMono] = useAtom(viewHueAtoms.monoAtom);
        return (
            <div className="mb-2 self-end relative border border-red-500 rounded text-xs">
                <div className="absolute pt-2 inset-0 flex items-start justify-center">
                    <UISwitch value={!mono} onChange={(v) => setMono(!v)} />
                </div>
                <div className="px-2 h-14 flex">
                    <div className="px-2 flex items-end" title="Monochrome">Mono</div>
                    <div className="px-2 flex items-end text-center border-l border-red-400">Color</div>
                </div>
            </div>
        );
    }
    
    export function MonoSwitch11({ className }: HTMLAttributes<HTMLDivElement>) {
        const [mono, setMono] = useAtom(viewHueAtoms.monoAtom);
        const styles = useSpring({
            from: { x: '0%', backgroundColor: 'red', },
            to: { x: mono ? '0%' : '100%', backgroundColor: mono ? 'blue' : 'red', },
            config: { duration: 150 },
        });
        return (
            <div className="mb-2 self-end relative border border-primary-500 rounded text-xs select-none cursor-pointer overflow-hidden">
                {/* <a.div style={styles} className="absolute bottom-0 w-1/2 h-1 bg-primary-500"></a.div> */}
                <div className="flex">
                    <div
                        className={classNames(
                            "px-2 py-2 flex items-end z-10",
                            //mono ? "bg-red-500" : "",
                            //mono ? "text-primary-100" : "",
                            mono ? "bg-primary-100 font-bold" : "bg-primary-300",
                        )}
                        onClick={() => setMono(true)} title="Monochrome">Mono</div>
                    <div
                        className={classNames(
                            "px-2 py-2 flex items-end z-10 text-center border-l border-primary-400",
                            //!mono ? "bg-red-500" : "",
                            //!mono ? "text-primary-100" : "",
                            !mono ? "bg-primary-100 font-bold" : "bg-primary-300",
                        )}
                        onClick={() => setMono(false)}>Color</div>
                </div>
                {/* <a.div style={styles} className="absolute bottom-0 w-1/2 h-full bg-primary-500"></a.div> */}
                <a.div
                    style={(() => {
                        const { backgroundColor, ...rest } = styles;
                        return rest;
                    }
                    )()}
                    // className={classNames("absolute bottom-0 w-1/2 h-full bg-primary-400", mono ? "rounded-l-sm" : "rounded-r-sm")}>
                    // className={classNames("absolute top-1 bottom-1 w-1/2 bg-primary-400", mono ? "rounded-l-sm" : "rounded-r-sm")}>
                    className={classNames("absolute bottom-0 w-1/2 h-1 bg-primary-400 z-20", mono ? "" : "")}>
                    {/* className={classNames("absolute bottom-0 w-1/2 h-full bg-primary-400", mono ? "rounded-full" : "rounded-full")}> */}
                </a.div>
            </div>
        );
    }
    
    export function MonoSwitch12({ className }: HTMLAttributes<HTMLDivElement>) {
        const [mono, setMono] = useAtom(viewHueAtoms.monoAtom);
        const styles = useSpring({
            from: { x: '0%', backgroundColor: 'red', },
            to: { x: mono ? '0%' : '100%', backgroundColor: mono ? 'blue' : 'red', },
            config: { duration: 150 },
        });
        return (
            <div className="mb-2 self-end relative border border-primary-500 rounded text-xs select-none cursor-pointer overflow-hidden">
                <div className="flex">
                    <div
                        className={classNames(
                            "px-2 py-2 flex items-end z-10",
                            mono ? "bg-primary-100 font-bold" : "bg-primary-300",
                        )}
                        onClick={() => setMono(true)} title="Monochrome">Mono</div>
                    <div
                        className={classNames(
                            "px-2 py-2 flex items-end z-10 text-center border-l border-primary-400",
                            !mono ? "bg-primary-100 font-bold" : "bg-primary-300",
                        )}
                        onClick={() => setMono(false)}>Color</div>
                </div>
                <a.div
                    style={(() => {
                        const { backgroundColor, ...rest } = styles;
                        return rest;
                    }
                    )()}
                    className={classNames("absolute bottom-0 w-1/2 h-full bg-primary-400", mono ? "rounded-full" : "rounded-full")}>
                </a.div>
            </div>
        );
    }
    
    export function MonoSwitch13({ className }: HTMLAttributes<HTMLDivElement>) {
        const [mono, setMono] = useAtom(viewHueAtoms.monoAtom);
        const styles = useSpring({ from: { x: '0%', }, to: { x: mono ? '0%' : '100%', }, config: { duration: 150 } });
        return (
            <div className="mb-2 self-end relative bg-primary-300 border-primary-500 border rounded text-xs shadow select-none cursor-pointer overflow-hidden">
                <div className="flex">
                    <div
                        className={classNames(
                            "px-2 py-2 flex-0 flex items-end z-10",
                            mono ? "bg-primary-100 font-bold" : "shadow-[inset_0px_1px_2px_0px_#0007] opacity-50",
                        )}
                        onClick={() => setMono(true)} title="Monochrome">Mono</div>
                    <div
                        className={classNames(
                            "px-2 py-2 flex-0 flex items-end z-10 text-center border-l border-primary-400",
                            !mono ? "bg-primary-100 font-bold" : "shadow-[inset_0px_1px_2px_0px_#0007] opacity-50",
                        )}
                        onClick={() => setMono(false)}>Color</div>
                </div>
                <a.div style={styles} className={classNames("absolute bottom-0 w-1/2 h-full bg-primary-400/40")}></a.div>
            </div>
        );
    }

/*import { MonoSwitch, MonoSwitch0, MonoSwitch1, MonoSwitch11, MonoSwitch12, MonoSwitch13, MonoSwitch2, MonoSwitch3 } from '../../UI/UIMonoSwitch';
    <MonoSwitch0 />
    <MonoSwitch1 />
    <MonoSwitch2 />
    <MonoSwitch3 />
    <MonoSwitch11 />
    <MonoSwitch12 />
    <MonoSwitch13 />
*/

} //namespace Tests

function Cell({ label, active, setValue, className, ...rest }: { label: string; active: boolean; setValue: () => void; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={classNames(
                "px-2 py-2 flex-0 flex items-end z-10",
                active ? "bg-primary-100 font-bold" : "shadow-[inset_1px_2px_5px_0px_#0004,inset_-0px_-2px_2px_0px_#fffa] opacity-50",
                className,
            )}
            onClick={setValue}
            {...rest}
        >
            {label}
        </div>
    );
}

export function MonoSwitch({ className }: HTMLAttributes<HTMLDivElement>) {
    const [mono, setMono] = useAtom(viewHueAtoms.monoAtom);
    const styles = useSpring({ from: { x: '0%', }, to: { x: mono ? '0%' : '100%', }, config: { duration: 150 } });
    return (
        <div
            className={classNames(
                "max-w-fit relative bg-primary-300 ring-1 ring-primary-400 rounded text-xs shadow select-none cursor-pointer overflow-hidden",
                className,
            )}
        >
            <div className="flex">
                <Cell label="Mono" title="Monochrome" active={mono} setValue={() => setMono(true)} />
                <Cell label="Color" title="Hue" className="border-l border-primary-400" active={!mono} setValue={() => setMono(false)} />

                {/* <div
                    className={classNames(
                        "px-2 py-2 flex-0 flex items-end z-10",
                        mono ? "bg-primary-100 font-bold" : "shadow-[inset_1px_2px_5px_0px_#0004,inset_-0px_-2px_2px_0px_#fffa] opacity-50",
                    )}
                    onClick={() => setMono(true)} title="Monochrome"
                >
                    Mono
                </div>

                <div
                    className={classNames(
                        "px-2 py-2 flex-0 flex items-end z-10 text-center border-l border-primary-400",
                        !mono ? "bg-primary-100 font-bold" : "shadow-[inset_1px_2px_5px_0px_#0004,inset_-0px_-2px_2px_0px_#fffa] opacity-50",
                    )}
                    onClick={() => setMono(false)} title="Hue"
                >
                    Color
                </div> */}

            </div>

            <a.div style={styles} className={classNames("absolute bottom-0 w-1/2 h-full bg-primary-400/40")}></a.div>
        </div>
    );
}
