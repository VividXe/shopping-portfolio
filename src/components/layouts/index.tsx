import Copyright from "../home/copyright/copyright";
import Footer from "./footer/footer";
import Header from "./header/header";

function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <Copyright />
    </div>
  );
}

export default Layouts;
