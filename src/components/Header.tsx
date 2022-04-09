import React from 'react';

export function Header() {
    return (
        <div
            className="px-3 py-2 text-2xl flex items-center text-purple-300 uppercase font-header"
            style={{textShadow: '#ff000069 1px 1px 2px, #afafafc4 0px 0px 2px'}}
            // style={{textShadow: '1px 1px red, -1px -1px white'}}
        >
            <div className="mx-auto scale-y-[1.5]">Color Names</div>
        </div>
    );
}
