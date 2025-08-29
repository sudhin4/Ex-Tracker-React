import FrontpageImage from "../DesktopFrontPage/FrontpageImage.png";
import "./DesktopFrontPage.css";
import { MdEmail } from "react-icons/md";

function DesktopFrontPage() {
  return (
    <>
      <div className="fullFrontPagedesktopSection">
        <div className="LogoExTrackerDiv">
          <h1 className="ExTrackerLogoheading">Ex-Tracker</h1>
        </div>
        <div className="Maincontentdivv_frontPage">
          <div className="ParagraphFrontPagedivv">
            <h2 className="MainHeadingFrontPagee">Manage.Track.Groww</h2>
            <p className="frontpageHeadingParagraph">
              Your finances, simplified. Track your expenses, set your goals,
              and watch your savings grow—because every little expense tells a
              bigger story.
            </p>
          </div>
          <div className="dwnloadbtndiv">
            <h5 className="importNoticeFont">
              <b>"Only Mobile Use"</b>
            </h5>
            <button className="DownloadBtnTag">Download</button>
          </div>
          <div className="Imagesectionfrontpage">
            <img src={FrontpageImage} className="FrontPageImageTag" alt="" />
          </div>
          <div className="contactdectionnn">
            <MdEmail className="emailIconfrontPage" />
            <a
              href="mailto:sudhinnaveen38@gmail.com"
              className="emailsection_frontPage"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default DesktopFrontPage;
