"use client"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight,PersonStanding, Pencil, LucideGithub, GithubIcon, Github } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-600 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Column 1: About */}
          <div>
            <Link href="/" rel="noopener noreferrer">
              <img
                src="https://english.onlinekhabar.com/wp-content/themes/onlinekhabar-english-2020/img/site-main-logo.png"
                alt="OnlineKhabar"
                className="w-48 bg-white p-2 rounded-md mb-4"
              />
            </Link>
            <p className="text-blue-100 mb-4">
              
              This website is a demo project created by Satkar Wagle. It is not affiliated with any news organization. The content is generated using the News API.

            </p>
          
          </div>

          {/* Column 2: News Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-blue-400 pb-2">News Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/news/politics" className="text-blue-100 hover:text-white transition-all flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Politics
                </Link>
              </li>
              <li>
                <Link
                  href="/news/economics"
                  className="text-blue-100 hover:text-white transition-all flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Economy
                </Link>
              </li>
              <li>
                <Link
                  href="/news/lifestyle"
                  className="text-blue-100 hover:text-white transition-all flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Lifestyle
                </Link>
              </li>
              <li>
                <Link href="/news/travel" className="text-blue-100 hover:text-white transition-all flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Travel
                </Link>
              </li>
              <li>
                <Link href="/news/sports" className="text-blue-100 hover:text-white transition-all flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Sports
                </Link>
              </li>
              <li>
                <Link
                  href="/news/technology"
                  className="text-blue-100 hover:text-white transition-all flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/news/entertainment"
                  className="text-blue-100 hover:text-white transition-all flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" /> Entertainment
                </Link>
              </li>
            </ul>
          </div>

         

          {/* Column 4: Contact & Newsletter */}
          <div>
            
            <h3 className="text-xl font-bold mb-4 border-b border-blue-400 pb-2">Contact The Developer</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                  <Pencil size={20} className="mr-2 mt-1 flex-shrink-0" />
                  <span className="text-blue-100">Satkar Wagle</span>
                </li>

              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-blue-100">Kritipur-4, Kathmandu</span>
              </li>

              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+9771234567890" className="text-blue-100 hover:text-white transition-all">
                  +977 9802482674
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@onlinekhabar.com" className="text-blue-100 hover:text-white transition-all">
                  satkarw@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-3">
             
              
              <a
                href="https://www.instagram.com/satkarw/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com/satkarw"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/satkar-wagle-79418a286/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition-all"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Developer Info */}
        <div className="border-t border-blue-400 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-blue-100">© {currentYear} OnlineKhabar. All Rights Reserved.</p>
            </div>
            <div className="text-blue-100">
              <p className="flex items-center gap-2">
                {"Satkar Wagle"}
                <a
                  href="https://github.com/satkarw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"

                >
                  <GithubIcon/>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

