import React from "react";

function Rect1() {
    return (
        <div className="rect1">
            <svg width="361" height="136" viewBox="0 0 361 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_ddd_1_349)">
                    <path d="M20 115H292.546L340.316 19H67.7696L20 115Z" fill="#444AFF" />
                </g>
                <defs>
                    <filter id="filter0_ddd_1_349" x="0" y="0" width="360.316" height="136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_349" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="10" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                        <feBlend mode="normal" in2="effect1_dropShadow_1_349" result="effect2_dropShadow_1_349" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
                        <feBlend mode="normal" in2="effect2_dropShadow_1_349" result="effect3_dropShadow_1_349" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1_349" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>

    )
}

export default Rect1;