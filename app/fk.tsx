import Image from "next/image"
import { Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left column - Large article */}
        <div className="lg:col-span-7 relative">
          <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=500&width=800"
              alt="Hospital surgery room with medical equipment and staff"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded">Health & fitness</span>
            </div>
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-white text-2xl md:text-4xl font-bold mb-4 leading-tight">
                Bir Hospital conducts 'Deep Brain Stimulation' surgery for Parkinson's with US experts
              </h2>
            </div>
          </div>
        </div>

        {/* Right column - Two articles stacked */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Top article */}
          <div className="relative">
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Framed picture related to Kathmandu shooting news"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded">Society</span>
              </div>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-white text-xl md:text-2xl font-bold mb-4 leading-tight">
                  Kathmandu shooting sparks outrage as Sabin's family demands justice
                </h2>
                <div className="flex items-center text-white/90">
                  <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden mr-2">
                    <Image
                      src="/placeholder.svg?height=50&width=50"
                      alt="Sahadev Chaudhary"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <span className="mr-4">Sahadev Chaudhary</span>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>6 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom article */}
          <div className="flex flex-col md:flex-row gap-4 bg-white rounded-lg overflow-hidden shadow-sm">
          c
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Plant growing from coins representing financial growth"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3 p-4">
              <div className="mb-2">
                <span className="bg-blue-600 text-white px-2 py-0.5 text-xs font-medium rounded">Opinion</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                The untapped potential: Options and futures markets for Nepal's financial evolution
              </h3>
              <div className="flex items-center text-gray-600 text-sm">
                <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden mr-2">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Sandip Poudel"
                    width={24}
                    height={24}
                    className="object-cover"
                  />
                </div>
                <span className="mr-3">Sandip Poudel</span>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>7 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

