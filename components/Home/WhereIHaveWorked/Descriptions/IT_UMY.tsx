import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function IT_UMY() {
    const tasks = [
        {
            text: "Asisstant Lecturer Network Routing and Protocol, assisting students in configuration in cisco packet tracer network software",
            keywords: ["Cisco Packet Tracer", "Networking", "Routing"]
        },
        {
            text: "Asisstant Lecturer Computer Network, building the basics of computer networks by practicing in cisco packet tracer directly",
            keywords: ["Cisco Packet Tracer", "Networking", "Routing"]

        }
        
    ];

    return (
        <>
            <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
                <div className="flex flex-col spacey-y-2">
                    <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
                       IT Departement UMY
                    </span>
                    <span className="font-mono text-xs text-gray-500">Sep 2018 - Aug 2019</span>
                    <span
                        className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
                        style={{ fontSize: "0.6rem" }}
                        // set on click to open the website
                        // onClick={() => window.open("", "_blank")}
                    >
                        it departement umy
                    </span>
                </div>
                <div className="flex flex-col space-y-4 sm:text-sm text-xs">
                    {tasks.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-row space-x-1">
                                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                                <span
                                    className="text-gray-500 sm:text-sm text-xs"
                                    dangerouslySetInnerHTML={{
                                        __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                                    }}
                                >
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}