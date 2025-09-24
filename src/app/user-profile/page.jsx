import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => {
  return (
    <div className="flex justify-center my-8">
      <UserProfile path="/user-profile" routing="path" />
    </div>
  );
};

export default UserProfilePage;
