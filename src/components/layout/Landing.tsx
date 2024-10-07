import Navbar from "../layout/Navbar";
import { Toaster } from "@/components/ui/toaster";

type contentProps = {
  children: JSX.Element;
};

const LandingLayout = ({ children }: contentProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      {/* ========== MAIN CONTENT ========== */}
      {/* Content */}
      {children}
      {/* End Content */}
      {/* ========== END MAIN CONTENT ========== */}
      {/* <Toaster /> */}
    </div>
  );
};

export default LandingLayout;
