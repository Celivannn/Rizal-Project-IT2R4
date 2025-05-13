
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Book, GraduationCap, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import LessonContent from "@/components/LessonContent";

const Chapter2 = () => {
  const [activeLesson, setActiveLesson] = useState<string>("lesson1");

  return (
    <>
      <Navbar />
      
      {/* Chapter Header with Historical Styling */}
      <section className="bg-accent py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <div className="flex items-center mb-4">
                <Link to="/" className="text-primary hover:underline">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-600">Chapter 2</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Chapter 2: Rizal's Life: Family, Childhood, and Early Education</h1>
              <p className="text-gray-600">
                Exploring the early years of José Rizal, his family background, childhood experiences, and educational journey that shaped his character and vision.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button asChild variant="outline" className="mr-3">
                <Link to="/chapter1">Previous</Link>
              </Button>
              <Button asChild>
                <Link to="/chapter3">Next Chapter</Link>
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
                  <div className="mb-6">
                    <AspectRatio ratio={1 / 1} className="bg-muted rounded-md overflow-hidden mb-4">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Jose_rizal_01.jpg" 
                        alt="José Rizal Portrait" 
                        className="object-cover w-full h-full sepia hover:sepia-0 transition-all duration-500"
                      />
                    </AspectRatio>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">José Protacio Rizal Mercado y Alonso Realonda</h3>
                      <p className="text-sm text-gray-500">June 19, 1861 - December 30, 1896</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-4">Lesson Topics</h3>
                  <div className="space-y-2">
                    <Button 
                      variant={activeLesson === "lesson1" ? "default" : "outline"} 
                      className="w-full justify-start" 
                      onClick={() => setActiveLesson("lesson1")}
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Lesson 1: The Rizal Family
                    </Button>
                    <Button 
                      variant={activeLesson === "lesson2" ? "default" : "outline"} 
                      className="w-full justify-start" 
                      onClick={() => setActiveLesson("lesson2")}
                    >
                      <GraduationCap className="mr-2 h-4 w-4" />
                      Lesson 2: Education and Life Overseas
                    </Button>
                  </div>

                  <Separator className="my-6" />
                  
                  {/* Historical Timeline */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Dates</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="bg-primary rounded-full w-3 h-3 mt-1.5 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">June 19, 1861</p>
                          <p className="text-sm text-gray-600">Born in Calamba, Laguna</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary rounded-full w-3 h-3 mt-1.5 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">1872-1877</p>
                          <p className="text-sm text-gray-600">Education at Ateneo Municipal</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary rounded-full w-3 h-3 mt-1.5 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">1877-1882</p>
                          <p className="text-sm text-gray-600">Studies at University of Santo Tomas</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary rounded-full w-3 h-3 mt-1.5 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">1882-1885</p>
                          <p className="text-sm text-gray-600">Education in Spain</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary rounded-full w-3 h-3 mt-1.5 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium">1885-1887</p>
                          <p className="text-sm text-gray-600">Studies in Paris and Germany</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-2">
              {activeLesson === "lesson1" ? (
                <LessonContent
                  title="Lesson 1: The Alonso Realonda-Mercado Rizal Family"
                  content={
                    <div className="space-y-6">
                      <div className="bg-accent/50 border border-accent p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">José Protacio Rizal Mercado y Alonso Realonda</h3>
                        <p>
                          Born on June 19, 1861, in Calamba, Laguna, José Protacio Rizal Mercado y Alonso Realonda 
                          came from a wealthy family. Teodora Alonso Realonda and Francisco Mercado Rizal, his 
                          parents, were both well-educated and respected in their community.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Meaning of Rizal's Name</h3>
                        <ul className="space-y-2 list-disc pl-5">
                          <li><strong>Jose:</strong> St. Joseph – Patron Saint of workers</li>
                          <li><strong>Protacio:</strong> St. Gervacio Protacio</li>
                          <li><strong>Rizal:</strong> (Ricial – greenfield) given by Spanish alcalde</li>
                          <li><strong>Mercado:</strong> Given to Jose's great-grandfather by their great-great grandfather Domingo Lamco (1731), meaning market (Paternal side)</li>
                          <li><strong>Y:</strong> and</li>
                          <li><strong>Alonso:</strong> Middle name of his mother</li>
                          <li><strong>Realonda:</strong> Last name of his mother (Spanish)</li>
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-muted/30 p-5 rounded-lg border">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Book className="h-4 w-4 mr-2 text-primary" />
                            Family Background
                          </h4>
                          <p>
                            His parents leased a Dominican hacienda and its adjoining rice plantation. Following Governor 
                            General Narciso Clavería y Zaldúa's 1849 proclamation requiring Filipinos to adopt Spanish 
                            surnames for census purposes despite having Spanish names already.
                          </p>
                        </div>
                        <div className="bg-muted/30 p-5 rounded-lg border">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Book className="h-4 w-4 mr-2 text-primary" />
                            Social Status
                          </h4>
                          <p>
                            The Rizal Family belonged to the "principalia," an aristocratic town of distinguished families. 
                            The family was able to live well by the dint of honest and hard work and frugal living.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Family Life in Calamba</h3>
                        <p className="mb-4">
                          The Dominican friars virtually owned the town of Calamba and its haciendas at the time, 
                          hence, non-Spanish families were only renting the lands they tilled and were subject to 
                          pay taxes, mostly excessive in money or kind.
                        </p>
                        <p className="mb-4">
                          The hacienda system left people very vulnerable to cruelty and discrimination from the 
                          Dominican friars. Despite those cruelties, Calamba still offered opportunities. Rizal himself 
                          wrote a poem reminiscing about his happy moment in the town of Calamba, entitled "Un Recuerdo 
                          A Mi Pueblo" (In Memory of My Town).
                        </p>
                        <p>
                          They get their living from the farms, which were rented from the Dominican Order; they harvested 
                          rice, corn, and sugarcane. They raised pigs, chickens, and turkeys in their backyard. Doña Teodora, 
                          Rizal's mother, managed a general goods store and operated a small flour-mill and a home-made ham press.
                          They owned a carriage, which was a status symbol of the ilustrados in Spanish Philippines and a private 
                          library (the largest in Calamba) which consisted of more than 1,000 volumes.
                        </p>
                      </div>

                      <div className="bg-accent/30 p-6 rounded-lg border border-accent">
                        <h3 className="text-xl font-semibold mb-3">Family Values</h3>
                        <p>
                          The Rizal family had a simple, contented, and happy life. Don Francisco and Doña Teodora loved their 
                          children, but they never spoiled them. They were strict parents and trained their children to love God, 
                          to behave well, to be obedient, and to respect people, especially the old folks. They discipline their 
                          children whenever they got into mischief. They believed in the maxim, "Spare the rod and spoil the child."
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Rizal's Parents</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="rounded-lg border shadow-sm overflow-hidden">
                            <div className="p-5">
                              <h4 className="font-semibold mb-2">Francisco Rizal Mercado</h4>
                              <p className="text-sm">
                                He was one of the children of Juan Monica Mercado and Cirila Alejandro.
                                Francisco Rizal lost his father when he was just eight years old. In Biñan, 
                                he went to a Latin school that his sons would later attend. Additionally, 
                                he studied Latin and philosophy at the Colegio de San Jose in Manila.
                              </p>
                            </div>
                          </div>
                          <div className="rounded-lg border shadow-sm overflow-hidden">
                            <div className="p-5">
                              <h4 className="font-semibold mb-2">Teodora Alonso Realonda y Quintos</h4>
                              <p className="text-sm">
                                Teodora Alonso was the second child of Lorenzo Alberto Alonso, a municipal 
                                captain in Biñan, La Laguna, and Brijida de Quintos. She was well-educated 
                                and came from a wealthy family, having attended Colegio de Santa Rosa in Manila.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Rizal's Siblings</h3>
                        <p className="mb-4">
                          Jose Rizal had a brother and nine sisters. He was the seventh of eleven children:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {["Saturnina", "Paciano", "Narcisa", "Olympia", "Lucia", "Maria", 
                            "José (himself)", "Concepcion", "Josefa", "Trinidad", "Soledad"].map((sibling, index) => (
                            <div key={index} className={`p-3 rounded-lg ${sibling === "José (himself)" ? "bg-primary text-white" : "bg-muted/50"}`}>
                              {index + 1}. {sibling}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Mestizo Origin</h3>
                        <p className="mb-4">
                          The Rizals were a mestizo family, like many others in the Philippines. Through his father's 
                          ancestor Domingo Lam-co, a Hokkien Chinese merchant who went to the Philippines in the late 
                          17th century, José's patrilineal lineage could be traced back to Fujian, China.
                        </p>
                        <p>
                          In 1697, Lam-co married the daughter (Ines de la Rosa) of his Chinese friend Augustin Chin-co, 
                          converted to Catholicism, and changed his name to Domingo Mercado in order to avoid the harsh 
                          anti-Chinese prejudice that existed in the Philippines. He also had Spanish ancestry. The 
                          grandmother of his mother, Teodora, Regina Ochoa, was of mixed Spanish, Chinese, and Tagalog 
                          ancestry. Lorenzo Alberto Alonzo, a half-Spanish engineer, was his maternal grandfather.
                        </p>
                      </div>
                    </div>
                  }
                  keyPoints={
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Important Family Members</h3>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-accent/20 rounded-lg">
                          <h4 className="font-medium flex items-center">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarFallback>SR</AvatarFallback>
                            </Avatar>
                            Saturnina Rizal (1850-1913)
                          </h4>
                          <p className="mt-2 text-sm">
                            The eldest child of the family, she and her mother provided the little Jose with good basic education.
                            She published Pascual Poblete's Tagalog translation of the Noli Me Tangere in 1909.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-accent/20 rounded-lg">
                          <h4 className="font-medium flex items-center">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarFallback>PR</AvatarFallback>
                            </Avatar>
                            Paciano Rizal
                          </h4>
                          <p className="mt-2 text-sm">
                            Paciano played an important role in influencing Rizal's nationalist views and was actively 
                            engaged in the rebellion against Spanish rule. He financed Rizal's studies in Europe and 
                            later joined the revolution, eventually becoming a brigadier general.
                          </p>
                        </div>
                        
                        <div className="p-4 bg-accent/20 rounded-lg">
                          <h4 className="font-medium flex items-center">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarFallback>NR</AvatarFallback>
                            </Avatar>
                            Narcisa Rizal (1852-1939)
                          </h4>
                          <p className="mt-2 text-sm">
                            Perhaps the most hospitable among the siblings, Narcisa provided financial support for Rizal's 
                            education in Europe. She was also the one who found the location where authorities had secretly 
                            buried Rizal after his execution.
                          </p>
                        </div>
                      </div>
                    </div>
                  }
                  additionalInfo={
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Early Childhood Timeline</h3>
                      
                      <div className="relative border-l-2 border-primary pl-6 space-y-6">
                        <div>
                          <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                          <p className="font-semibold">June 22, 1861</p>
                          <p className="text-gray-600">
                            He was baptized JOSE RIZAL MERCADO at the Catholic of Calamba by the parish priest Rev. 
                            Rufino Collantes with Rev. Pedro Casañas as the sponsor.
                          </p>
                        </div>
                        
                        <div>
                          <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                          <p className="font-semibold">September 28, 1862</p>
                          <p className="text-gray-600">
                            The parochial church of Calamba and the canonical books, including the book in which 
                            Rizal's baptismal records were entered, were burned.
                          </p>
                        </div>
                        
                        <div>
                          <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                          <p className="font-semibold">1864</p>
                          <p className="text-gray-600">
                            By three years old, Rizal learned the alphabet from his mother.
                          </p>
                        </div>
                        
                        <div>
                          <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                          <p className="font-semibold">1865</p>
                          <p className="text-gray-600">
                            When he was four years old, his sister Conception, the eighth child in the Rizal family, 
                            died at the age of three. It was on this occasion that Rizal remembered having shed real 
                            tears for the first time.
                          </p>
                        </div>
                        
                        <div>
                          <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                          <p className="font-semibold">1865 – 1867</p>
                          <p className="text-gray-600">
                            During this time his mother taught him how to read and write. His father hired Leon Monroy who, 
                            for five months until his (Monroy) death, taught Rizal the rudiments of Latin.
                          </p>
                        </div>
                        
                        <div>
                          <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                          <p className="font-semibold">June 6, 1868</p>
                          <p className="text-gray-600">
                            He went to Antipolo with his father. From there they proceeded to Manila and visited his 
                            sister Saturnina who was at the time studying in the La Concordia College in Sta. Ana.
                          </p>
                        </div>
                        
                        <div>
                          <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                          <p className="font-semibold">1869</p>
                          <p className="text-gray-600">
                            At the age of eight, Rizal wrote his first poem entitled "Sa Aking Mga Kabata" (To My Fellow Youth).
                          </p>
                        </div>
                      </div>
                    </div>
                  }
                />
              ) : (
                <LessonContent
                  title="Lesson 2: Rizal's Life: Higher Education and Life Overseas"
                  content={
                    <div className="space-y-6">
                      <div className="bg-accent/50 border border-accent p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Early Education</h3>
                        <p>
                          José had a sharp mind from a young age. When he was three years old, his mother taught 
                          him the alphabet, and by the time he was five, he could read and write. Rizal first 
                          studied under Justiniano Aquino Cruz in Biñan, before he was sent to Manila.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Education at Ateneo Municipal</h3>
                        <p className="mb-4">
                          Rizal took first the entrance examination at the Colegio de San Juan de Letran on June 10, 1872. 
                          During that time, the Dominicans had the authority to examine and regulate Ateneo, therefore the 
                          exams for new freshmen in the several colleges for boys were held at Colegio de San Juan de Letran. 
                          Rizal took the test and was accepted to the Ateneo Municipal.
                        </p>
                        <div className="bg-muted/30 p-5 rounded-lg border">
                          <h4 className="font-semibold mb-2">Initial Difficulties</h4>
                          <p>
                            Father Magin Ferrand (Fernando), who was the college registrar at the time, denied Rizal 
                            admission despite the fact that he passed the entrance exam for two reasons:
                          </p>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>He was a late registrant</li>
                            <li>He was extremely thin, pale, and undersized for an 11-year-old</li>
                          </ul>
                          <p className="mt-3">
                            However, Manuel Xeres Burgos (nephew of Father Burgos) helped him be accepted into the school. 
                            When Jose enrolled at Ateneo, he was not permitted to use Mercado as his last name.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Jesuits System of Education</h3>
                        <p className="mb-4">
                          Jesuits system of education encouraged competition among students. The class was divided into 2 groups:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-accent/20 rounded-lg">
                            <h4 className="font-medium">Carthaginian</h4>
                            <p className="text-sm">The non-boarder students of Ateneo</p>
                          </div>
                          <div className="p-4 bg-accent/20 rounded-lg">
                            <h4 className="font-medium">Roman</h4>
                            <p className="text-sm">The boarder students of Ateneo</p>
                          </div>
                        </div>
                        <p className="mt-4">
                          Rizal was placed at the bottom of the class and assigned with the Carthaginians. Students 
                          competed for these positions throughout the empire by asking those in authority to respond 
                          to questions based on the lesson for the day.
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-2">
                          <div className="p-3 rounded bg-primary text-white text-center">Emperor<br/><span className="text-xs">Best Students</span></div>
                          <div className="p-3 rounded bg-primary/80 text-white text-center">Tribune<br/><span className="text-xs">Second Best Students</span></div>
                          <div className="p-3 rounded bg-primary/60 text-white text-center">Decurion<br/><span className="text-xs">Third Best Students</span></div>
                          <div className="p-3 rounded bg-primary/40 text-white text-center">Centurion<br/><span className="text-xs">Fourth Best Students</span></div>
                          <div className="col-span-2 p-3 rounded bg-primary/20 text-center">Standard Bearer<br/><span className="text-xs">Fifth Best Students</span></div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">First year in Ateneo (1872 - 1873)</h4>
                          <ul className="space-y-2">
                            <li>Rizal was called an "externo" or a living out student during his days in Ateneo Municipal.</li>
                            <li>Fr. Jose Bech was his first professor in Ateneo.</li>
                            <li>After a month, Rizal became an emperor of his empire.</li>
                            <li>Rizal took private lessons in Sta. Isabel College during noon recesses to improve his Spanish language.</li>
                          </ul>
                          <div className="mt-3 p-3 bg-accent/20 rounded-md">
                            <h5 className="font-medium">Summer Vacation (1873)</h5>
                            <p className="text-sm">
                              Rizal didn't enjoy his summer because his mother was in prison, so Neneng 
                              (Saturnina) brought him to Tanawan.
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Second year in Ateneo (1873 - 1874)</h4>
                          <p className="mb-2">
                            Rizal repented having neglected his studies the previous year. To regain his lost class 
                            leadership, Rizal studied harder.
                          </p>
                          <p>
                            At the end of the school year, Rizal received excellent grades in all subjects and a gold medal.
                          </p>
                          <div className="mt-3 p-3 bg-accent/20 rounded-md">
                            <h5 className="font-medium">Third year in Ateneo (1874 - 1875)</h5>
                            <p className="text-sm">
                              June 16, 1875 - He became an interno in Ateneo.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-accent/30 p-5 rounded-lg border border-accent">
                        <h4 className="font-semibold mb-2">Fr. Francisco de Paula Sanchez</h4>
                        <p>
                          One of his professors who inspired him to study harder and write poetry. 
                          Rizal considered him his best professor in Ateneo.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Fourth year in Ateneo (1875- 1876)</h3>
                        <p className="mb-4">
                          March 23, 1877 - Rizal, 16 years old, received from his Alma Mater, Ateneo Municipal, 
                          the degree of Bachelor of Arts, with highest honors.
                        </p>
                        <p>
                          He graduated as one of the nine students in his class declared sobresaliente or outstanding.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">The University of Santo Tomas (1877-1882)</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Rizal Enters The University</h4>
                            <p>
                              April 1877 - Rizal was 16 years old when he enrolled at the UST and took the course on Philosophy and Letters. 
                              He was still unsure of what course to take. He pursued his studies in UST because the Bachelor of Arts course 
                              during Spanish times was equivalent only to high school and junior college today.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Rizal Took Up the Medical Course</h4>
                            <p>
                              Rizal took up medicine, enrolling simultaneously in preparatory medical course and the regular first year medical course.
                            </p>
                            <h5 className="font-medium mt-3">Reasons Why He Studied Medicine:</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>To cure his mother's failing eyesight</li>
                              <li>Fr. Ramon wrote back advising Jose to take up medicine</li>
                              <li>It was a highly in-demand course</li>
                            </ul>
                          </div>
                          
                          <div className="p-4 bg-muted/20 rounded-lg">
                            <p>
                              Rizal spent his time studying. He returned to Ateneo to take up a land surveying course which was 
                              then a vocational course. He completed the surveyor's course and was awarded the title of "perito agrimensor" 
                              (expert surveyor) with the grade of excellent.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Literary Works in UST</h3>
                        <p className="mb-4">
                          Liceo Artistico Literario de Manila was an association of art enthusiasts in Manila that 
                          regularly held literary contests open to Filipino Spaniards and mestizos.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 border rounded-lg bg-muted/10">
                            <h4 className="font-medium">A La Juventud Filipina (To The Filipino Youth)</h4>
                            <p className="text-sm mt-2">
                              Rizal submitted this poem and won first prize. The poem has the often-quoted adage 
                              "Kabataan ang pag-asa ng bayan." ("Bella esperanza de la Patria mia!")
                            </p>
                          </div>
                          <div className="p-4 border rounded-lg bg-muted/10">
                            <h4 className="font-medium">El Consejo De Los Dioses (The Council of Gods)</h4>
                            <p className="text-sm mt-2">
                              Winning masterpiece submitted to Liceo for the second time; Prize: gold ring bearing 
                              the engraved bust of Cervantes.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Life Abroad: Spain (1882-1885)</h3>
                        <p className="mb-4">
                          Determined to pursue his studies, Rizal decided to leave for Europe. Without his parents' consent, 
                          but with the support of his brother Paciano and his uncle Antonio Rivera, Rizal decided to continue 
                          his studies in Spain. Rizal left Manila and traveled alone to Madrid on May 3, 1882.
                        </p>
                        <div className="p-5 border border-primary/30 bg-primary/5 rounded-lg">
                          <h4 className="font-semibold mb-2">Secret Mission in Spain</h4>
                          <p>
                            To observe keenly the life and culture, languages and customs, industries and commerce, and 
                            governments and laws of the European nations. In order to prepare himself in the mighty task 
                            of liberating his oppressed people from Spanish tyranny.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Rizal's Academic Achievements in Spain</h3>
                        <ul className="space-y-2">
                          <li>
                            <strong>June 21, 1884</strong> – Earned Licentiate in Medicine but did not receive a Doctor's 
                            diploma as he did not submit a thesis or pay the fees.
                          </li>
                          <li>
                            <strong>June 19, 1885</strong> – Earned Licentiate in Philosophy and Letters, graduating with 
                            the highest honors (Sobresaliente).
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Paris & Germany (1885-1886)</h3>
                        <p className="mb-4">
                          At 24 years old, Rizal traveled to Paris to further his knowledge in Ophthalmology. In November 1885, 
                          he worked for four months as an assistant to Dr. Louis de Weckert, a renowned French ophthalmologist.
                        </p>
                        <p>
                          In February 1886, Rizal left Paris for Germany, arriving in Heidelberg, a historic city known for its 
                          university and scenic beauty. He lived near the University of Heidelberg and worked as an assistant to 
                          Dr. Otto Becker at the University Eye Hospital.
                        </p>
                      </div>

                      <div className="bg-accent/50 border border-accent p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Noli Me Tangere Published in Berlin</h3>
                        <p className="mb-4">
                          March 21, 1887 - the Noli Me Tangere came off the press. The title Noli Me Tangere is a Latin 
                          phrase which means "Touch Me Not". These words are taken from the Gospel of St. John (Chapter 20 
                          Verses 13 to 17).
                        </p>
                        <p>
                          Rizal dedicated his Noli Me Tangere to the Philippines, "To My Fatherland". It contains 63 chapters 
                          and an epilogue. Maximo Viola, the "savior of Noli," gave him the needed funds to publish the novel.
                        </p>
                      </div>
                    </div>
                  }
                  keyPoints={
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Educational Milestones</h3>
                      
                      <div className="space-y-3">
                        <div className="p-3 bg-accent/20 rounded-lg">
                          <h4 className="font-medium flex items-center">
                            <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                            Ateneo Municipal (1872-1877)
                          </h4>
                          <ul className="mt-2 text-sm space-y-1 list-disc pl-5">
                            <li>Graduated with highest honors (Bachelor of Arts)</li>
                            <li>Excelled in both academics and arts</li>
                            <li>Won medals and recognition in various subjects</li>
                          </ul>
                        </div>
                        
                        <div className="p-3 bg-accent/20 rounded-lg">
                          <h4 className="font-medium flex items-center">
                            <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                            University of Santo Tomas (1877-1882)
                          </h4>
                          <ul className="mt-2 text-sm space-y-1 list-disc pl-5">
                            <li>Studied Philosophy and Letters first</li>
                            <li>Later pursued Medicine</li>
                            <li>Also became a licensed land surveyor</li>
                          </ul>
                        </div>
                        
                        <div className="p-3 bg-accent/20 rounded-lg">
                          <h4 className="font-medium flex items-center">
                            <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                            Universidad Central de Madrid (1882-1885)
                          </h4>
                          <ul className="mt-2 text-sm space-y-1 list-disc pl-5">
                            <li>Earned Licentiate in Medicine (1884)</li>
                            <li>Earned Licentiate in Philosophy and Letters with highest honors (1885)</li>
                            <li>Also studied art at the Academy of Fine Arts</li>
                          </ul>
                        </div>
                        
                        <div className="p-3 bg-accent/20 rounded-lg">
                          <h4 className="font-medium flex items-center">
                            <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                            Specialized Medical Training (1885-1887)
                          </h4>
                          <ul className="mt-2 text-sm space-y-1 list-disc pl-5">
                            <li>Studied ophthalmology in Paris under Dr. Louis de Weckert</li>
                            <li>Trained in Heidelberg with Dr. Otto Becker</li>
                            <li>Attended lectures and clinical practice in Berlin</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  }
                  additionalInfo={
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Rizal's European Journey</h3>
                      
                      <div className="relative border-l-2 border-primary pl-6 space-y-6">
                        <div>
                          <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                          <p className="font-semibold">May 3, 1882</p>
                          <p className="text-gray-600">
                            Rizal departed on board the Spanish Steamer Salvadora bound for Singapore.
                          </p>
                        </div>
                        
                        <div>
                          <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                          <p className="font-semibold">November 3, 1882</p>
                          <p className="text-gray-600">
                            Rizal enrolled in Universidad Central de Madrid in two courses - Medicine and Philosophy and Letters.
                          </p>
                        </div>
                        
                        <div>
                          <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                          <p className="font-semibold">June 25, 1884</p>
                          <p className="text-gray-600">
                            A banquet was held in Madrid to celebrate Juan Luna and Felix Resurreccion Hidalgo's victories in the 
                            National Exposition of Fine Arts. Rizal's speech honored both artists as the "glories of Spain and the 
                            Philippines."
                          </p>
                        </div>
                        
                        <div>
                          <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                          <p className="font-semibold">November 1885</p>
                          <p className="text-gray-600">
                            Rizal traveled to Paris and worked for four months as an assistant to Dr. Louis de Weckert.
                          </p>
                        </div>
                        
                        <div>
                          <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                          <p className="font-semibold">February 1886</p>
                          <p className="text-gray-600">
                            Left Paris for Germany, arriving in Heidelberg, a historic city known for its university and scenic beauty.
                          </p>
                        </div>
                        
                        <div>
                          <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                          <p className="font-semibold">November 1886</p>
                          <p className="text-gray-600">
                            Rizal arrived in Berlin. He was enchanted by this city because of its scientific atmosphere and the 
                            absence of racial prejudice.
                          </p>
                        </div>
                        
                        <div>
                          <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                          <p className="font-semibold">March 21, 1887</p>
                          <p className="text-gray-600">
                            The Noli Me Tangere came off the press in Berlin.
                          </p>
                        </div>
                        
                        <div>
                          <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-primary"></div>
                          <p className="font-semibold">August 6, 1887</p>
                          <p className="text-gray-600">
                            Rizal returned to the Philippines after five years abroad.
                          </p>
                        </div>
                      </div>
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

export default Chapter2;
