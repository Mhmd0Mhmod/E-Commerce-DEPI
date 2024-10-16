function ProfileMenuItem({ icon, onClick, children }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-4 hover:bg-gray-100 cursor-pointer p-2 rounded-lg"
    >
      <div className="text-xl font-bold">{icon}</div>
      <div className="font-light">{children}</div>
    </div>
  );
}

export default ProfileMenuItem;
