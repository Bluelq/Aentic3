import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function StaticFramework() {
  return (
    <section className="py-24 bg-transparent text-black dark:text-white relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-black dark:text-white mb-6">
            Our Framework
          </h2>
          <p className="text-black dark:text-white max-w-2xl mx-auto text-lg md:text-xl">
            A simple Fixed-Cost Approach to transforming ideas into intelligent solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="relative framework-box-1">
            <div className="absolute inset-0 border-[0.5px] border-gray-200 dark:border-gray-800 rounded-lg backdrop-blur-[2px] bg-white/10 dark:bg-black/10"></div>
            <div className="relative p-8 h-full flex flex-col">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Phase 1</span>
              <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">Analyze</h3>
              <p className="text-black dark:text-white mb-6 flex-grow text-base md:text-lg leading-relaxed">
                We identify specific pain points and opportunities where AI can deliver meaningful value to your
                business.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm md:text-base">
                  <div className="mr-2 h-[3px] w-[3px] rounded-full bg-black dark:bg-white"></div>
                  <span className="text-black dark:text-white">Needs assessment</span>
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <div className="mr-2 h-[3px] w-[3px] rounded-full bg-black dark:bg-white"></div>
                  <span className="text-black dark:text-white">Pain point identification</span>
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <div className="mr-2 h-[3px] w-[3px] rounded-full bg-black dark:bg-white"></div>
                  <span className="text-black dark:text-white">Technical feasibility</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative framework-box-2">
            <div className="absolute inset-0 border-[0.5px] border-gray-200 dark:border-gray-800 rounded-lg backdrop-blur-[2px] bg-white/10 dark:bg-black/10"></div>
            <div className="relative p-8 h-full flex flex-col">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Phase 2</span>
              <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">Design</h3>
              <p className="text-black dark:text-white mb-6 flex-grow text-base md:text-lg leading-relaxed">
                Our human-centered approach creates intuitive AI applications that align with natural thought processes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm md:text-base">
                  <div className="mr-2 h-[3px] w-[3px] rounded-full bg-black dark:bg-white"></div>
                  <span className="text-black dark:text-white">Psychology-informed UX</span>
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <div className="mr-2 h-[3px] w-[3px] rounded-full bg-black dark:bg-white"></div>
                  <span className="text-black dark:text-white">Intuitive interface design</span>
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <div className="mr-2 h-[3px] w-[3px] rounded-full bg-black dark:bg-white"></div>
                  <span className="text-black dark:text-white">Bias mitigation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative framework-box-3">
            <div className="absolute inset-0 border-[0.5px] border-gray-200 dark:border-gray-800 rounded-lg backdrop-blur-[2px] bg-white/10 dark:bg-black/10"></div>
            <div className="relative p-8 h-full flex flex-col">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Phase 3</span>
              <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">Implement</h3>
              <p className="text-black dark:text-white mb-6 flex-grow text-base md:text-lg leading-relaxed">
                We bring applications to life with a focus on solving problems rather than introducing complexity. Fixed
                cost pricing.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm md:text-base">
                  <div className="mr-2 h-[3px] w-[3px] rounded-full bg-black dark:bg-white"></div>
                  <span className="text-black dark:text-white">Modular development</span>
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <div className="mr-2 h-[3px] w-[3px] rounded-full bg-black dark:bg-white"></div>
                  <span className="text-black dark:text-white font-medium">Fixed cost pricing</span>
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <div className="mr-2 h-[3px] w-[3px] rounded-full bg-black dark:bg-white"></div>
                  <span className="text-black dark:text-white">Continuous testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact" className="cta-button py-3 px-8 inline-flex items-center text-base md:text-lg">
            Get your AI Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
