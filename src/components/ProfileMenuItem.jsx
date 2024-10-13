function ProfileMenuItem({ icon, onClick, children }) {
  return (
    <div onClick={onClick} className="flex">
      <div>{icon}</div>
      <div>{children}</div>
    </div>
  );
}

export default ProfileMenuItem;
