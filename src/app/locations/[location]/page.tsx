import { locations, getLocationBySlug } from "@/lib/locations";
import Link from "next/link";
import { CheckCircle2, Droplet, Hammer, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return locations.map((location) => ({
    location: location.slug,
  }));
}

export default async function LocationPage({ params }: { params: Promise<{ location: string }> }) {
  const resolvedParams = await params;
  const locationSlug = resolvedParams.location;
  const location = getLocationBySlug(locationSlug);

  const locationName = location ? location.name : "South Wales";

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section styled like the reference */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-matte-black relative flex-grow">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-electric-cyan/5 blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto border border-white/10 rounded-2xl p-8 md:p-12 bg-black/40 backdrop-blur-sm relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
              Premium Wall & Floor Tiling in <span className="text-electric-cyan">{locationName}</span>
            </h1>
            <p className="text-lg text-gray-300 font-medium tracking-wide">
              Top-Rated Tiling & Home Improvement Experts in {locationName}, South Wales
            </p>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
            <p>
              {locationName} is known for its beautiful residential properties, and we take pride in helping 
              homeowners maintain and upgrade them with top-tier tiling and home improvement services. 
              Our team is dedicated to enhancing your indoor and outdoor spaces by designing and implementing 
              custom tiling plans, installing modern domestic plumbing, and offering expert wall and ceiling 
              panelling. Whether you're looking for a simple bathroom update, a new kitchen floor, or small 
              bricklaying jobs, our experts will work closely with you to ensure that your home remains 
              functional, sustainable, and visually appealing.
            </p>

            <div>
              <h2 className="text-2xl font-serif text-white mb-6">Our Services in {locationName}:</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="text-electric-cyan mt-1 mr-3 flex-shrink-0" size={20} />
                  <span><strong>Professional Tiling:</strong> ALL aspects of wall and floor tiling tailored to your property.</span>
                </li>
                <li className="flex items-start">
                  <Droplet className="text-electric-cyan mt-1 mr-3 flex-shrink-0" size={20} />
                  <span><strong>Domestic Plumbing:</strong> Reliable plumbing services for kitchens, bathrooms, and beyond.</span>
                </li>
                <li className="flex items-start">
                  <Hammer className="text-electric-cyan mt-1 mr-3 flex-shrink-0" size={20} />
                  <span><strong>Wall & Ceiling Panelling:</strong> Modern panelling to enhance your home's aesthetic.</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="text-electric-cyan mt-1 mr-3 flex-shrink-0" size={20} />
                  <span><strong>Small Bricklaying Jobs:</strong> Professional hardscaping and minor building alterations.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10">
              <h2 className="text-2xl font-serif text-white mb-4">Why Choose KDT Tiling in {locationName}?</h2>
              <p>
                With South Wales' varying temperatures and building conditions, maintaining a home can be challenging. 
                That's why we use industry-leading techniques and materials to create spaces that remain vibrant, 
                durable, and healthy year-round. All of our work is fully guaranteed and insured, ensuring maximum 
                efficiency and peace of mind with minimal disruption to your daily life.
              </p>
            </div>
            
            <div className="pt-8 text-center">
              <Link 
                href="/#contact" 
                className="inline-block bg-electric-cyan text-black px-8 py-4 rounded font-bold text-lg hover:bg-cyan-300 transition-colors duration-300"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
