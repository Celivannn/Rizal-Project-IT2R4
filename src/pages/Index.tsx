
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from '@/components/Navbar';
import ChapterCard from '@/components/ChapterCard';
import { Book, BookOpen, Flag, History, Search } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section py-20 md:py-32 text-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Life & Works of José Rizal
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Explore the legacy of the Philippines' national hero and his contributions to the Filipino identity, nationalism, and fight for independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Link to="/chapter1">Begin the Journey</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="#chapters">View Chapters</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Course Overview</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Book className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Rizal's Law</h3>
                    <p className="text-gray-600">Understand the significance of Republic Act 1425 and its impact on Philippine education.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <History className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Historical Context</h3>
                    <p className="text-gray-600">Explore the Philippines in the 19th century during Spanish colonization.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Literary Works</h3>
                    <p className="text-gray-600">Study Rizal's famous novels and their influence on Philippine nationalism.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Flag className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Legacy</h3>
                    <p className="text-gray-600">Analyze Rizal's lasting impact on Filipino identity and national consciousness.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section id="chapters" className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Course Chapters</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore the life and works of José Rizal through these comprehensive chapters covering different aspects of his life and impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ChapterCard 
              number={1} 
              title="Understanding Rizal's Law" 
              description="Explore the significance of the Rizal Law and the Philippines in the 19th century."
              link="/chapter1"
            />
            
            <ChapterCard 
              number={2} 
              title="Rizal's Early Life" 
              description="Study the childhood and early education of José Rizal and his formative years."
              link="/chapter2"
            />
            
            <ChapterCard 
              number={3} 
              title="Educational Journey" 
              description="Follow Rizal's educational path in the Philippines and abroad in Spain."
              link="/chapter3"
              available={false}
            />
            
            <ChapterCard 
              number={4} 
              title="Rizal's Works & Writings" 
              description="Analyze Rizal's major literary works including Noli Me Tangere and El Filibusterismo."
              link="/chapter4"
            />
            
            <ChapterCard 
              number={5} 
              title="Return to Philippines" 
              description="Examine Rizal's return to the Philippines and his subsequent exile."
              link="/chapter5"
            />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl italic mb-6">
              "He who does not know how to look back at where he came from will never get to his destination."
            </h2>
            <p className="text-lg">— José Rizal</p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Life of Rizal</h3>
              <p className="text-gray-600">
                A comprehensive educational resource dedicated to studying the life, works, and impact of José Rizal, the national hero of the Philippines.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/chapter1" className="text-gray-600 hover:text-primary">Chapter 1</Link></li>
                <li><Link to="/chapter2" className="text-gray-600 hover:text-primary">Chapter 2</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary">Resources</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">About</h3>
              <p className="text-gray-600">
                This educational website is designed to help students better understand the importance of José Rizal in Philippine history and nationalism.
              </p>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center text-gray-500">
            <p>© 2025 Life of Rizal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
