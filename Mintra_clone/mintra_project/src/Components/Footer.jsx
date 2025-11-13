import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-between gap-10 text-sm text-gray-700">
        {/* Online Shopping */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-semibold mb-3 text-gray-800">ONLINE SHOPPING</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-600">Men</a></li>
            <li><a href="#" className="hover:text-pink-600">Women</a></li>
            <li><a href="#" className="hover:text-pink-600">Kids</a></li>
            <li><a href="#" className="hover:text-pink-600">Home & Living</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-semibold mb-3 text-gray-800">USEFUL LINKS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-pink-600">FAQ</a></li>
            <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
          </ul>
        </div>

        {/* App Section */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-semibold mb-3 text-gray-800">EXPERIENCE APP</h3>
          <div className="flex gap-2">
            <img src="https://developer.android.com/images/brand/en_app_rgb_wo_45.png" alt="Play Store" className="h-10" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10" />
          </div>
        </div>

        {/* Social Links */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-semibold mb-3 text-gray-800">KEEP IN TOUCH</h3>
          <div className="flex gap-4 text-xl text-gray-600">
            <a href="#" className="hover:text-pink-600"><i className="fab fa-facebook" /></a>
            <a href="#" className="hover:text-pink-600"><i className="fab fa-instagram" /></a>
            <a href="#" className="hover:text-pink-600"><i className="fab fa-twitter" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 py-4 text-center text-xs text-gray-500">
        © 2025 Myntra Clone. All rights reserved.
      </div>
    </footer>
  );
}
