const ProfileSection = () => {
  return (
    <>
      <div className="sidebar-img text-center position-relative py-2">
        <img src="/portimg.webp" alt="Profile" />
        <span className="thumb position-absolute top-0">👋</span>
      </div>

      <div className="sidebar-content text-center">
        <h2 className="fs-4 fw-bold">Dhirendra Bam</h2>
        <p>Backend Developer</p>
      </div>
    </>
  );
};

export default ProfileSection;
