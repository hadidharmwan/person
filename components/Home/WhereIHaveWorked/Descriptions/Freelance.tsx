import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Freelance() {
    const tasks = [
        {
            text: "Design and Develop website Data Management Systems such as blogs for women using Laravel MVC",
            keywords: ["Laravel", "MVC", "PHP","MySQL", "Xampp"],
        },
        
        {
            text: "Design and Develop website System Management data coffeshop Kolibri usint the PHP Laravel Framework",
            keywords: ["Laravel","MVC", "PHP", "MySQL", "Xampp"],
        },
        {
            text: "Develop System Management TPQ (Al-Qur'an Learning Center) for clients using MVC",
            keywords: ["Laravel", "MVC", "Laragon"]
        },
        {
            text: "Development of Website based college event attendance with online signature using Laravel Framework",
            keywords: ["Laravel", "MVC", "MySQL"]
        },
        {
            text: "Development of a palm oil management reporting system for waste produced and released",
            keywords: ["Laravel", "MVC", "MySQL"],
        }
    ];

    return (
        <>
            <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
                <div className="flex flex-col spacey-y-2">
                    <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
                       Freelance
                    </span>
                    <span className="font-mono text-xs text-gray-500">Mar 2022 - NOW</span>
                    <span
                        className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
                        style={{ fontSize: "0.6rem" }}
                        // set on click to open the website
                        // onClick={() => window.open("", "_blank")}
                    >
                        freelance
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
                                ></span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}