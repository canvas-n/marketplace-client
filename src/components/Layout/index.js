import Header from "./Header";
import Footer from "./Footer";
import { poppins_300, pre_400 } from "../../../fonts";
import TopButton from "../../components/Common/TopButton";
const Index = ({ children }) => {
  return (
    <>
      <Header />
          <div className={`w-full ${poppins_300.className} pt-[50px] lg:pt-[100px] min-h-[700px]`}>
            <main className={`w-full`}>
                {children}
                <TopButton />
            </main>
          </div>
      <Footer />
    </>
  );
};

export default Index;
