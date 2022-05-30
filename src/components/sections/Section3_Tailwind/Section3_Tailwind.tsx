import React, { ChangeEvent, Fragment } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { classNames } from '../../../utils/classnames';

let values = [
    ["#ffe4e6", "#fce7f3", "#fae8ff", "#f3e8ff", "#ede9fe", "#e0e7ff", "#dbeafe", "#e0f2fe", "#cffafe", "#ccfbf1", "#d1fae5", "#dcfce7", "#ecfccb", "#fef9c3", "#fef3c7", "#ffedd5", "#fee2e2", "#f5f5f4", "#f3f4f6"],
    ["#fecdd3", "#fbcfe8", "#f5d0fe", "#e9d5ff", "#ddd6fe", "#c7d2fe", "#bfdbfe", "#bae6fd", "#a5f3fc", "#99f6e4", "#a7f3d0", "#bbf7d0", "#d9f99d", "#fef08a", "#fde68a", "#fed7aa", "#fecaca", "#e7e5e4", "#e5e7eb"],
    ["#fda4af", "#f9a8d4", "#f0abfc", "#d8b4fe", "#c4b5fd", "#a5b4fc", "#93c5fd", "#7dd3fc", "#67e8f9", "#5eead4", "#6ee7b7", "#86efac", "#bef264", "#fde047", "#fcd34d", "#fdba74", "#fca5a5", "#d6d3d1", "#d1d5db"],
    ["#fb7185", "#f472b6", "#e879f9", "#c084fc", "#a78bfa", "#818cf8", "#60a5fa", "#38bdf8", "#22d3ee", "#2dd4bf", "#34d399", "#4ade80", "#a3e635", "#facc15", "#fbbf24", "#fb923c", "#f87171", "#a8a29e", "#9ca3af"],
    ["#f43f5e", "#ec4899", "#d946ef", "#a855f7", "#8b5cf6", "#6366f1", "#3b82f6", "#0ea5e9", "#06b6d4", "#14b8a6", "#10b981", "#22c55e", "#84cc16", "#eab308", "#f59e0b", "#f97316", "#ef4444", "#78716c", "#6b7280"],
    ["#e11d48", "#db2777", "#c026d3", "#9333ea", "#7c3aed", "#4f46e5", "#2563eb", "#0284c7", "#0891b2", "#0d9488", "#059669", "#16a34a", "#65a30d", "#ca8a04", "#d97706", "#ea580c", "#dc2626", "#57534e", "#4b5563"],
    ["#be123c", "#be185d", "#a21caf", "#7e22ce", "#6d28d9", "#4338ca", "#1d4ed8", "#0369a1", "#0e7490", "#0f766e", "#047857", "#15803d", "#4d7c0f", "#a16207", "#b45309", "#c2410c", "#b91c1c", "#44403c", "#374151"],
    ["#9f1239", "#9d174d", "#86198f", "#6b21a8", "#5b21b6", "#3730a3", "#1e40af", "#075985", "#155e75", "#115e59", "#065f46", "#166534", "#3f6212", "#854d0e", "#92400e", "#9a3412", "#991b1b", "#292524", "#1f2937"],
    ["#881337", "#831843", "#701a75", "#581c87", "#4c1d95", "#312e81", "#1e3a8a", "#0c4a6e", "#164e63", "#134e4a", "#064e3b", "#14532d", "#365314", "#713f12", "#78350f", "#7c2d12", "#7f1d1d", "#1c1917", "#111827"],
];

function List() {
    return (
        <div className="max-w-min grid grid-cols-[repeat(19,auto)] gap-[0.125rem]">
            {values.map((colors, idxRow) => (
                <Fragment key={idxRow}>
                    {colors.map((color, idxCol) => (
                        <Fragment key={`${idxRow}.${idxCol}`}>
                            <button className="w-4 h-4 rounded" style={{ backgroundColor: color }} />
                        </Fragment>
                    ))}
                </Fragment>
            ))}
        </div>

    );
}

export function Section3_Tailwind({className}: React.HTMLAttributes<HTMLUListElement>) {
    return (
        <div className="h-full flex flex-col all-tw-colors">
            
            <div className={classNames("flex-[4_4] bg-primary-200 grid place-content-center", className)}>
                <div className="p-1 bg-primary-100 border-primary-300 border rounded shadow-md"><List /></div>
            </div>

            <div className="flex-1">
                <a className="text-url underline" href="https://tailwindcss.com/docs/customizing-colors" target="_blank">Colors on Tailwind CSS website</a>
            </div>

        </div>
    );
}
