import Header from "./header";
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
