import Announcements from "../componentry/tools/Announcements";
export default function Home() {
  return (
    <div>
      <div className="HomeBanner" style={{ backgroundImage: "url(\"/assets/img/bgblur.png\")" }}>
        <h1 className="AnnouncementHeader">Home</h1>
      </div>
      <div className="h-screen flex flex-col gap-y-2 flex-nowrap py-4">
        <div className="h-screen flex flex-col gap-y-2 flex-nowrap py-4 items-center">
          <h1 className="Header">Posts</h1>
          <Announcements />
        </div>
      </div>
    </div>
  );
};