import { Shield, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Blurred Blue Patches */}
      <div className="absolute inset-0 z-[-1]">
        <div
          className="absolute w-[80%] h-[80%] left-[10%] top-[10%] blur-[100px] opacity-30"
          style={{
            background: "radial-gradient(circle, #043BD6, transparent)",
          }}
        ></div>
        <div
          className="absolute w-[40%] h-[40%] left-[60%] top-[30%] blur-[80px] opacity-20"
          style={{
            background: "radial-gradient(circle, #1FDAFF, transparent)",
          }}
        ></div>
        <div
          className="absolute w-[30%] h-[30%] left-[20%] top-[70%] blur-[60px] opacity-25"
          style={{
            background: "radial-gradient(circle, #043BD6, transparent)",
          }}
        ></div>
      </div>

      <div className="w-[94vw] mx-auto">
        {/* Introductory Section */}
        <div className="flex w-full justify-between items-start mb-8 w-5/12">
          <div className="mb-8 text-center sm:text-left flex items-center justify-center sm:justify-start">
            <Shield className="w-6 h-6 text-blue-500 mr-4" />
            <div>
              <p className="text-xl">Work async stay aligned.</p>
            </div>
          </div>
          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 w-7/12">
            {/* Product Column */}
            <div>
              <h3 className="text-lg mb-4">Product</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            {/* Company Column */}
            <div>
              <h3 className="text-lg mb-4">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            {/* Support Column */}
            <div>
              <h3 className="text-lg mb-4">Support</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    Terms & Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Social Media and Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-8">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a
              href="#"
              className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
            >
              <Github size={24} />
            </a>
          </div>
          <p className="text-white/50 text-sm">
            © 2025 Quortex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
