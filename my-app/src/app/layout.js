import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
