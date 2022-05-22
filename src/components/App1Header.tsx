import React from 'react';

export function AppHeader() {
    return (
        <div
            className="px-3 py-2 pt-6 text-2xl flex items-center text-purple-300 uppercase font-header"
            //style={{textShadow: '#ff000069 1px 1px 2px, #afafafc4 0px 0px 2px'}}
            //style={{textShadow: '1px 1px red, -1px -1px white'}}
            //style={{textShadow: '1px 1px red, -1px -1px white', color: 'transparent', 'WebkitTextStroke': '0.5px green',}}
            style={{textShadow: '1px 1px red, -1px -1px white', 'WebkitTextStroke': '0.5px #f3e8ff', }}
        >
            <div className="mx-auto scale-y-[1.5]">Color Names</div>
        </div>
    );
}
