import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import useDeepCompareEffect from "use-deep-compare-effect";
export default function AnnouncementBoxes() {
    const [announcements, setAnnouncements] = useState([]);
    const [usernameDirectory] = useState({});
    useDeepCompareEffect(() => {
        let content = [{
            title: "Wendy",
            content: "Wendy is an apple green frog with a cream colored belly. Her eyes sit on top of her head, and are black rimmed in white. She has prominent nostrils above her smiling mouth, and a pale pink blush on her cheeks. Welcome Wendy! Wendy's birthday is May 10, meaning her SquishScope sign is a Taurus. You can always find her out on the basketball court (she won the MVP award last year) or in the science lab, since chemistry is her favorite subject. She wants to be a famous scientist when she grows up and likes to paint pictures of her inventions. She's an all around green gal, and is also very eco-friendly, always doing her part to clean up her community. Her favorite food is sushi, especially the avocado rolls and one of her other favorite hobbies includes gardening with her family!",
            timestamp: "2020-01-01T00:00:00.000Z",
            authorUuid: "a939cb12-1d34-4fec-8687-bf976aa40de2"
        }, {
            title: "About BDSM",
            content: `Activities and relationships in BDSM are often characterized by the participants' taking on roles that are complementary and involve inequality of power; thus, the idea of informed consent of both the partners is essential. The terms submissive and dominant are often used to distinguish these roles: the dominant partner ("dom") takes psychological control over the submissive ("sub"). The terms top and bottom are also used; the top is the instigator of an action while the bottom is the receiver of the action. The two sets of terms are subtly different: for example, someone may choose to act as bottom to another person, for example, by being whipped, purely recreationally, without any implication of being psychologically dominated, and submissives may be ordered to massage their dominant partners. Although the bottom carries out the action and the top receives it, they have not necessarily switched roles.`,
            timestamp: "2020-01-01T00:00:00.000Z",
            authorUuid: "fe76f336-8a1b-4856-baa0-5751db6dfb7f"
        }];

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
