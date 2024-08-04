import Header from "./(header)/page";
import Navbar from "./navbar";
import Profile from "./profile/page";

export default function Page() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}
