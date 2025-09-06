import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#eeeeee]" >
      <div className="container mx-auto px-4 md:px-6 lg:px-36">
        {/* Footer Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 lg:gap-8 mb-12">
          {[
            {
              title: "About Us",
              links: ["Contact Us", "Resources"],
            },
            {
              title: "Products",
              links: ["CrateKLUB", "MarineKLUB", "PingKLUB","TheraKLUB","FinstaKLUB","FriestaKLUB","EduKLUB","OmniKLUB","EstateKLUB"],
            },
            {
              title: "Services",
              links: [
                "AI Services",
                "ODOO Services",
                "Custom SAAS App Development",
                "Mobile App Development",
                "Tech Consulting & Assessments",
              ]
            },
            {
              title: "Industries",
              links: [
                "Retail & eCommerce",
                "Healthcare & Life Sciences",
                "BSFI & Fintech",
                "Education",
                "Real Estate",
                "Telecom & Manufacturing"
              ],
            },
            {
              title: "Column Five",
              links: [
                "Link Twenty One",
                "Link Twenty Two",
                "Link Twenty Three",
                "Link Twenty Four",
                "Link Twenty Five",
              ],
            },
            
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold mb-4 text-sm text-black">{col.title}</h4>
              <ul className="space-y-2 text-xs text-black">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-gray-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-black border-t gap-4">
          <div className="font-bold text-xl">
             <Image
                        src="/logo.svg"
                        alt="Logo"
                      width={100}
                      height={40}
                      />
          </div>
          <div className="text-sm text-black">© 2024 KClub. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
