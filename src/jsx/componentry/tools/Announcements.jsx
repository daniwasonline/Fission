import Markdown from "react-markdown";

export default function Announcements() {
  const postData = [{
    title: "Welcome to the new site!",
    body: "Hi there! This is a test of Markdown features. Below is a line break:\n\n*This is italics*, **this is bold**, ___this is both___. Now, [here is a link to nowhere](#).",
    author: {
        username: "Danny",
        uuid: "",
        avatarURL: "https://gravatar.com/avatar/b13747e57ab1c3050d8f1b60468f9a61?s=800&d=identicon&r=g",
        website: "https://danny.works"
    },
    timestamp: new Date().toISOString()
  }];

  return (
    <div className="Announcements">
        {postData.map(post => {
            return (
                <div className="AnnouncementContainer">
                    <h1 className="Title" style={{ textAlign: "left"  }}>{post.title}</h1>
                    <div className="flex flex-row items-center px-12 pb-4">
                        <h2 className="Author" style={{ textAlign: "left"  }}>
                            By <a rel="noreferrer noopener" target="_blank" href={post.author.website} className="text-gray-500 dark:text-sky-200">{post.author.username}</a>
                        </h2>
                        <img alt={`${post.author.username}'s avatar`} src={post.author.avatarURL} className="Avatar" width="36px" height="36px" />
                    </div>
                    <Markdown className="Text AnnouncementText" style={{ textAlign: "left" }} children={post.body}></Markdown>
                </div>
            );
        })}
    </div>
  );
};