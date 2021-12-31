/*
    Copyright (C) 2021 MineRIP, Daniel Hyders, Bunni <https://mine.rip>
    This file is part of Fission, the frontend component of Nexus.

    Fission is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Fission is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License

    Name: AnnouncementBoxes:Index.jsx
    Author: Daniel Hyders <git@danny.works>
*/
import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import useDeepCompareEffect from "use-deep-compare-effect";
export default function AnnouncementBoxes() {
    const useDefault = true;
    const [announcements, setAnnouncements] = useState([]);
    const [usernameDirectory] = useState({});
    useDeepCompareEffect(() => {
        let content;
        let defaultContent = [{
            title: "Welcome to Fission!",
            content: "Fission is the front-end component of Nexus, originally built as part of the MineRIP website. Nexus is an announcement system and website framework built in React.js and Fastify, similar to the likes of WordPress and other such software.\n\nFission is available under the [GNU General Public License v3](https://www.gnu.org/licenses/quick-guide-gplv3.html), and Fusion (the backend component of Nexus) will be available under the same licence in the future.",
            timestamp: "2020-01-01T00:00:00.000Z",
            authorUuid: "45f461cb-d605-49c4-acc9-fed1d32b1602"
        }, {
            title: "How can I help contribute to the Nexus project?",
            content: `While Fusion won't be open-sourced until later in 2022, you can still contribute to Fission by opening issues, contributing code, and supporting MineRIP, the organization behind Nexus.\n\n**Thank you for choosing Nexus!**`,
            timestamp: "2020-01-01T00:00:00.000Z",
            authorUuid: "45f461cb-d605-49c4-acc9-fed1d32b1602"
        }];

        if (useDefault) content = defaultContent;

        setAnnouncements(content);

        content.forEach(async announcement => {
            if (!(announcement.author in usernameDirectory)) {
                const request = await fetch(`https://playerdb.co/api/player/minecraft/${announcement.authorUuid}`).catch(f => { return { data: { player: { id: "27b15dca-2d5d-4a47-b36d-5e87bb46c2a3", username: "Unknown" } } }; }).then(r => r.json());
                let usr;
                if (request.code === "minecraft.api_failure") {
                    usr = "Unknown";
                    announcement.authorUuid = "27b15dca-2d5d-4a47-b36d-5e87bb46c2a3";
                };
                if (request.code === "player.found") usr = request.data.player.username;
                usernameDirectory[announcement.author] = usr;
                announcement.author = usr;
                if (content.indexOf(announcement) === content.length - 1) {
                    setAnnouncements(content);
                };
            };
        });
        /*fetch("/api/announcements")
            .then(response => response.json())
            .then(data => {
                setAnnouncements(data);
            });*/
    }, [announcements]);

    return (
        <div className="AnnouncementBoxes">
            {announcements.map(announcement => {
                return ( <div className="AnnouncementBoxes-Container" key={announcements.indexOf(announcement)}>
                    <h1 className="AnnouncementBoxes-Title">{announcement.title}</h1>
                    <h2 className="AnnouncementBoxes-Author">
                        By {announcement.author}
                        <img style={{ marginLeft: "0.5vw" }} src={`https://visage.surgeplay.com/Head/512/${announcement.authorUuid}`} alt={announcement.author} width="50vw" />
                    </h2>
                    <ReactMarkdown className="AnnouncementBoxes-Content" children={announcement.content}></ReactMarkdown>
                </div> );
            })}
        </div>
    );
};
