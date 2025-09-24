// In your component file (e.g., components/UserButton.jsx)
import { UserButton } from "@clerk/nextjs";

export function CustomUserButton() {
  return (
    <UserButton>
      {/* Add a custom "Terms" page to the profile */}
      <UserButton.UserProfilePage
        label="Terms"
        labelIcon={<FileTextIcon />}
        url="terms"
      >
        <div className="p-4">
          <h2>Terms of Service</h2>
          <p>Your custom content here.</p>
        </div>
      </UserButton.UserProfilePage>

      {/* Add a link to an external page */}
      <UserButton.UserProfileLink
        label="Back to Home"
        labelIcon={<HomeIcon />}
        url="/"
      />
    </UserButton>
  );
}
