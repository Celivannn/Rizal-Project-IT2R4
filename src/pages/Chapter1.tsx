
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import LessonContent from '@/components/LessonContent';

const Chapter1 = () => {
  const [activeLesson, setActiveLesson] = useState<string>("lesson1");

  return (
    <>
      <Navbar />
      
      {/* Chapter Header */}
      <section className="bg-accent py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <div className="flex items-center mb-4">
                <Link to="/" className="text-primary hover:underline">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-600">Chapter 1</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Chapter 1: Understanding Rizal's Law</h1>
              <p className="text-gray-600">
                Exploring the significance of the Rizal Law (Republic Act 1425) and the historical context of the Philippines in the 19th century.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button asChild variant="outline" className="mr-3">
                <Link to="/">Previous</Link>
              </Button>
              <Button asChild>
                <Link to="/chapter2">Next Chapter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Lesson Topics</h3>
                  <div className="space-y-2">
                    <Button 
                      variant={activeLesson === "lesson1" ? "default" : "outline"} 
                      className="w-full justify-start" 
                      onClick={() => setActiveLesson("lesson1")}
                    >
                      Lesson 1: Rizal Law
                    </Button>
                    <Button 
                      variant={activeLesson === "lesson2" ? "default" : "outline"} 
                      className="w-full justify-start" 
                      onClick={() => setActiveLesson("lesson2")}
                    >
                      Lesson 2: Philippines in the 19th Century
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-2">
              {activeLesson === "lesson1" ? (
                <LessonContent
                  title="Lesson 1: Rizal Law - Trials, Controversies, Significance"
                  content={
                    <div>
                      <h3>Overview of Rizal's Law</h3>
                      <p>
                        Rizal's Law (Republic Act No. 1425) was officially approved and became a law on June 12, 1956. 
                        The law requires all schools in the Philippines to teach about José Rizal's life, works, and writings, 
                        especially his novels Noli Me Tangere and El Filibusterismo. This law was written by Senator Claro M. Recto 
                        and supported by Senator José P. Laurel.
                      </p>
                      
                      <h3>Key Points of the Law</h3>
                      <ul>
                        <li>
                          <strong>Mandatory Education:</strong> All schools in the Philippines, from elementary to higher education, 
                          must teach about José Rizal, his life, and his works. This includes the in-depth study of his two novels, 
                          Noli Me Tangere and El Filibusterismo.
                        </li>
                        <li>
                          <strong>Promote Nationalism:</strong> The law encourages students to feel proud of being Filipino and 
                          to appreciate their culture and history. It helps them understand the importance of loving their country.
                        </li>
                        <li>
                          <strong>Critical Thinking:</strong> By studying Rizal's works, students are encouraged to think critically 
                          about issues such as social justice, freedom, and equality.
                        </li>
                        <li>
                          <strong>Educational Goal:</strong> It also aims to instill the values that Rizal stood for, such as love for country, 
                          respect for human rights, and the pursuit of justice.
                        </li>
                      </ul>
                      
                      <h3>Trials in Passing Rizal's Law</h3>
                      <h4>1. Opposition from the Catholic Church</h4>
                      <ul>
                        <li>
                          Some religious leaders were concerned that Rizal's novels contained criticisms of Spanish friars, 
                          would hurt the reputation of the Catholic Church.
                        </li>
                        <li>
                          Catholic schools feared that requiring students to read the novels would go against their religious beliefs.
                        </li>
                        <li>
                          Some Catholic institutions even threatened to close down if the law was approved.
                        </li>
                      </ul>
                      
                      <h4>2. Debates in the Government</h4>
                      <ul>
                        <li>
                          The Senate and House of Representatives had long discussions about whether Rizal's books should be required reading.
                        </li>
                        <li>
                          Some lawmakers supported the law, saying it would help develop nationalism and teach Filipinos about their history.
                        </li>
                        <li>
                          Others disagreed, arguing that it could create conflicts with religious teachings.
                        </li>
                      </ul>
                      
                      <h4>3. Agreement and Final Approval (1956)</h4>
                      <p>
                        To resolve disagreements and ensure the law's approval, a middle-ground solution was reached:
                      </p>
                      <ul>
                        <li>
                          College students were required to read the complete versions of Noli Me Tangere and El Filibusterismo.
                        </li>
                        <li>
                          Elementary and high school students were allowed to read summarized or translated versions if necessary.
                        </li>
                        <li>
                          Students with religious concerns could skip reading the full novels but were still required to take the Rizal course.
                        </li>
                      </ul>
                      <p>
                        With these adjustments, the law was officially approved on June 12, 1956, making the study of Rizal's life and 
                        works a permanent part of education in the Philippines.
                      </p>
                    </div>
                  }
                  keyPoints={
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Significance of Rizal's Law</h3>
                      <ul className="space-y-3">
                        <li>
                          <strong className="text-primary">Promotes PATRIOTISM & NATIONALISM:</strong>
                          <p>Rizal's novels Noli Me Tangere and El Filibusterismo exposed the injustices of Spanish rule and inspired Filipinos to fight for freedom.</p>
                        </li>
                        <li>
                          <strong className="text-primary">Preserves HISTORY and IDENTITY:</strong>
                          <p>Rizal's writings document the struggles and culture of Filipinos during colonial times.</p>
                        </li>
                        <li>
                          <strong className="text-primary">Encourages CRITICAL THINKING:</strong>
                          <p>Rizal questioned Spanish rule and social injustices through his writings.</p>
                        </li>
                        <li>
                          <strong className="text-primary">Teaches MORAL VALUES:</strong>
                          <p>Rizal stood for integrity, perseverance, discipline, and selflessness.</p>
                        </li>
                        <li>
                          <strong className="text-primary">Supports EDUCATION and NATIONAL DEVELOPMENT:</strong>
                          <p>Rizal believed that education is the key to progress and that an enlightened society leads to a stronger nation.</p>
                        </li>
                      </ul>
                    </div>
                  }
                  additionalInfo={
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Controversies Surrounding Rizal's Law</h3>
                      <p className="mb-4">
                        José Rizal, the national hero of the Philippines, played a crucial role in awakening Filipino nationalism through his writings. 
                        However, both his works and his actions led to significant controversies, particularly concerning Rizal Law (Republic Act No. 1425) and 
                        his trials under Spanish rule.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Opposition from the Catholic Church</h4>
                          <p>One of the major controversies surrounding the Rizal Law was the strong opposition from the Catholic Church.</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Debates and Compromise</h4>
                          <p>The law's main proponents, Senator Claro M. Recto and Senator José P. Laurel, defended the bill.</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Impact of the Rizal Law</h4>
                          <p>Despite its initial opposition, the Rizal Law remains in effect today and is considered vital in shaping Filipino identity and patriotism.</p>
                        </div>
                      </div>
                    </div>
                  }
                />
              ) : (
                <LessonContent
                  title="Lesson 2: The Philippines in the 19th Century"
                  content={
                    <div>
                      <h3>Historical Context</h3>
                      <p>
                        The 19th century was a crucial period in Philippine history, marked by colonial rule, 
                        socio-political transformations, and the rise of nationalism. It was a land of social injustices, 
                        economic exploitation, and colonial oppression. It was also a time of awakening and resistance.
                      </p>
                      
                      <h3>Social Structure</h3>
                      <p>
                        During the 19th century, the Philippines remained under Spanish colonial rule, which had lasted for more 
                        than three centuries. The Spanish government exercised strict control through the Gobernador-General, who 
                        held absolute power. The friars of the Catholic Church played a dominant role in governance, education, and 
                        economic matters, often exerting more influence than secular officials.
                      </p>
                      <p>The society was divided into classes:</p>
                      <ul>
                        <li><strong>Peninsular</strong> - Pure-blooded Spaniard born in Spain.</li>
                        <li><strong>Insular</strong> - Pure-blooded Spaniard born in the Philippines.</li>
                        <li><strong>Mestizo</strong> - Spanish mestizo-one parent is Spanish, the other is a native.</li>
                        <li><strong>Chinese mestizo</strong> - one parent is Chinese, the other is native.</li>
                        <li><strong>Principalia</strong> - Wealthy pure-blooded native professedly kadatoan descendant.</li>
                        <li><strong>Indio</strong> - Pure-blooded native of the Philippines.</li>
                      </ul>
                      
                      <h3>Rizal's Role in Social Change</h3>
                      <p>
                        José Rizal played a pivotal role in driving social change during this transformative period by advocating 
                        for reform through his literary works. His novels, Noli Me Tangere (1887) and El Filibusterismo (1891), 
                        highlighted the social injustices of colonial rule, including corruption and the exploitation by the clergy 
                        and colonial authorities. Rizal's writings stirred public awareness and fueled a movement for change among Filipinos.
                      </p>
                      
                      <h3>Cultural Change</h3>
                      <h4>Social & Family Structure</h4>
                      <ul>
                        <li>Shift from Tribal to Hispanic Social</li>
                        <li>Emergence of the Ilustrado Class</li>
                        <li>Changes In Family Structure</li>
                      </ul>
                      
                      <h4>Language & Education</h4>
                      <ul>
                        <li>Introduction of Spanish Language</li>
                        <li>Establishment of Education System</li>
                        <li>Emergence of Filipino Literature</li>
                      </ul>
                      
                      <h4>Values & Beliefs</h4>
                      <ul>
                        <li>Catholicism & Christianization</li>
                        <li>Emergence of Nationalism</li>
                        <li>Changing Attitudes towards work & Education</li>
                      </ul>
                      
                      <h4>Arts & Entertainment</h4>
                      <ul>
                        <li>Influence of Spanish Music & Dance</li>
                        <li>Emergence of Filipino Theater</li>
                        <li>Development of Filipino Visual Arts</li>
                      </ul>
                    </div>
                  }
                  keyPoints={
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Political Change</h3>
                      <h4 className="font-medium mt-4 mb-2">Rizal's Political Influence</h4>
                      <ul className="space-y-2">
                        <li><strong>Propaganda Movement</strong> – Advocated peaceful reforms through La Solidaridad</li>
                        <li>
                          <strong>Writings as a Political Tool</strong>
                          <ul className="pl-4 mt-1">
                            <li>Noli Me Tangere – Exposed Spanish abuses</li>
                            <li>El Filibusterismo – Showed how oppression leads to revolution</li>
                          </ul>
                        </li>
                        <li><strong>La Liga Filipina (1892)</strong> – Aimed for peaceful reforms but led to Rizal's exile</li>
                      </ul>
                      
                      <h4 className="font-medium mt-4 mb-2">Rizal's Martyrdom and Legacy</h4>
                      <ul className="space-y-2">
                        <li>Arrested and executed on December 30, 1896</li>
                        <li>Inspired the Philippine Revolution (1896)</li>
                        <li>His death united Filipinos in their fight for independence</li>
                      </ul>
                    </div>
                  }
                  additionalInfo={
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Economic Change</h3>
                      <p>
                        Before the Spanish occupation, our Forefathers have already been trading with the Chinese, 
                        the Japanese, the inhabitants of Siam, the Indians, Cambodians and with the natives of Borneo 
                        and Mollucas. When the Spaniards arrived the Spanish government carried on the existing trade 
                        relationships with this countries for a period.
                      </p>
                      
                      <h4 className="font-medium mt-4 mb-2">Galleon Trade (Manila-Acapulco Trade)</h4>
                      <p>
                        The Manila galleons were Spanish treasure ships which transported precious goods like silk, spices, 
                        and porcelain from Manila in the Philippines to Acapulco, Mexico, between 1565 and 1815.
                      </p>
                      <ul className="space-y-2 mt-2">
                        <li>Connected the Philippines with Mexico for 250 years.</li>
                        <li>
                          It was a government monopoly of two trading ships, one navigated from Acapulco in Mexico to Manila 
                          for 120 days with some 500,000 pesos worth of merchandise and the other sailed from Manila to Acapulco 
                          for 90 days with some 250,000 pesos worth of goods.
                        </li>
                        <li>
                          Philippines sent mangoes, tamarinds, rice, carabao, Chinese tea textiles, tuba (coconut wine) to Mexico 
                          while guava, avocado, papaya, pineapple and etc. was sent by Mexico to Philippines.
                        </li>
                        <li>
                          This economic transaction was ended on September 14, 1815 when Mexico gained its independence from Spain 
                          and it was stop because of the efforts of Valentin Delos Santos our representative in Spanish Cortes (1810-1813).
                        </li>
                      </ul>
                      
                      <h4 className="font-medium mt-4 mb-2">Suez Canal</h4>
                      <p>
                        The Suez Canal stretches 120 miles from Port Said on the Mediterranean Sea in Egypt southward to the city of Suez 
                        (located on the northern shores of the Gulf of Suez). The canal separates the bulk of Egypt from the Sinai Peninsula. 
                        It took 10 years to build.
                      </p>
                      <ul className="space-y-2 mt-2">
                        <li>It was an artificial way that connect the Red Sea and Mediterranean Sea in Egypt.</li>
                        <li>
                          On November 17, 1869 afforded the Philippines and Spain a relatively effortless maritime route for Spanish trading.
                        </li>
                        <li>
                          Started off as an agreement between Ferdinand de Lesseps, Cairo's former French diplomat and the Ottoman governor 
                          of Egypt in 1854 for the former to construct a 100-mile canal across the Isthmus of Suez.
                        </li>
                        <li>
                          The construction commenced in April 1859 with forced laborers digging by hand with picks and shovels. European 
                          workers though with dredgers and steam shovels later arrived.
                        </li>
                        <li>It decreased the travel time of Philippines to Spain from 3 months to 32-40 days.</li>
                        <li>
                          It was the first infrastructure that paved the way for the importation of books, magazines and newspaper with 
                          liberal ideas from Europe and America. This was instrumental to the political awakening of Rizal because he was 
                          able to expand his perspective, therefore shaping his nationalist sensibilities.
                        </li>
                      </ul>
                    </div>
                  }
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chapter1;
