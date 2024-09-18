import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Intership() {
    const tasks = [
        {
            text: "Create Hospital Management Information System for clients collaborate with companies using Visual Studio C# html(cshtml)",
            keywords: ["Visual Studio", "C#", "HTML","CSHTML", ".NET"],
        },
        
    ];

    return (
        <>
            <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
                <div className="flex flex-col  spacey-y-2">
                    <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
                       Intersolution Cipta Softindo
                    </span>
                    <span className="font-mono text-xs text-gray-500">Oct 2019 - Dec 2023</span>
                    <span
                        className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
                        style={{ fontSize: "0.6rem" }}
                        // set on click to open the website
                        // onClick={() => window.open("", "_blank")}
                    >
                        intersolution cipta softindo
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