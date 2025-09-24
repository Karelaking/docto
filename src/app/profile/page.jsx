// pages/custom-profile.jsx or app/custom-profile/page.jsx
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

const CustomProfilePage = () => {
  // Get the user object and functions from the hook
  const { user, isLoaded, isSignedIn } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    customBio: user?.unsafeMetadata?.customBio || "", // Access custom metadata
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission to update user data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update the user's primary attributes
      await user.update({
        firstName: formData.firstName,
        lastName: formData.lastName,
      });
      // Update custom user metadata (unsafeMetadata can be written from the frontend)
      await user.update({
        unsafeMetadata: {
          customBio: formData.customBio,
        },
      });
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  // Show loading state
  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1>Custom User Profile</h1>
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={user.profileImageUrl}
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h2>{user.fullName}</h2>
          <p>{user.primaryEmailAddress?.emailAddress}</p>
        </div>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label>Bio (Custom Metadata)</label>
            <textarea
              name="customBio"
              value={formData.customBio}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="4"
            />
          </div>
          <div className="flex space-x-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div>
          <p>
            <strong>First Name:</strong> {user.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {user.lastName}
          </p>
          <p>
            <strong>Bio:</strong>{" "}
            {user.unsafeMetadata?.customBio || "No bio provided."}
          </p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomProfilePage;
