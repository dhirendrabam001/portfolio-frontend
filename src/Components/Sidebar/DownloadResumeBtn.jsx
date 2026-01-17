import { PiFilePdf } from "react-icons/pi";
const DownloadResumeBtn = () => {
  return (
    <div className="download-btn py-3">
      <a
        href="/dhirendrabam001.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
      >
        <PiFilePdf /> Download PDF Version
      </a>
    </div>
  );
};

export default DownloadResumeBtn;
