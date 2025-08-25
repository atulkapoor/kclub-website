export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-36">
        {/* Footer Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 lg:gap-8 mb-12">
          {[
            {
              title: "Column One",
              links: ["Link One", "Link Two", "Link Three", "Link Four", "Link Five"],
            },
            {
              title: "Column Two",
              links: ["Link Six", "Link Seven", "Link Eight", "Link Nine", "Link Ten"],
            },
            {
              title: "Column Three",
              links: [
                "Link Eleven",
                "Link Twelve",
                "Link Thirteen",
                "Link Fourteen",
                "Link Fifteen",
              ],
            },
            {
              title: "Column Four",
              links: [
                "Link Sixteen",
                "Link Seventeen",
                "Link Eighteen",
                "Link Nineteen",
                "Link Twenty",
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
            {
              title: "Column Six",
              links: [
                "Link Twenty Six",
                "Link Twenty Seven",
                "Link Twenty Eight",
                "Link Twenty Nine",
                "Link Thirty",
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-2 text-xs text-gray-600">
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
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t gap-4">
          <div className="font-bold text-xl">Logo</div>
          <div className="text-sm text-gray-600">© 2024 KClub. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
