import Header from "./(header)/page";
import Navbar from "./navbar/page";
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
