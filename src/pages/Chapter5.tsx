
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import LessonContent from '@/components/LessonContent';
import Navbar from '@/components/Navbar';
import { Separator } from "@/components/ui/separator";

const Chapter5 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-1 container max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Rizal's Writings: Illuminating Philippines History and Society</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">Three Significant Articles</p>
        </div>

        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Introduction</h2>
            <Separator className="my-4" />
            <div className="prose max-w-none">
              <p className="mb-4">This chapter explores three key works of Jose Rizal — The Philippines a Century Hence, The Indolence of the Filipinos, and To the Young Women of Malolos. These writings exposed the struggles of Filipinos under colonial rule and encouraged national awakening. It also examines how Rizal's ideas shaped the Filipino concepts of bayani and kabayanihan, and how he became a symbol of Philippine nationalism, inspiring the fight for freedom and dignity.</p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Lesson 1</h2>
            <Separator className="flex-1" />
          </div>
          
          <LessonContent
            title="Three Significant Articles"
            content={
              <div className="space-y-6">
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">The Philippines a Century Hence</h3>
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
                    <img 
                      src="/la-solidaridad.jpg" 
                      alt="La Solidaridad Newspaper"
                      className="rounded-lg shadow-md w-full md:w-1/3 h-auto mb-4 md:mb-0"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=La+Solidaridad";
                      }}
                    />
                    <div>
                      <p className="mb-4">Jose Rizal's essay "Filipinas Dentro de Cien Años" predicted the future of the Philippines under continued Spanish rule. Published in La Solidaridad, it reflected on the country's rich past, its economic decline, and the suffering of Filipinos.</p>
                      <p className="mb-4">Rizal warned Spain of a possible revolution, drawing parallels to the French Revolution. His goal was to awaken Filipino nationalism and urge the people to fight for their rights.</p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Causes of Misery in The Philippines a Century Hence</h3>
                  <p className="mb-4">Rizal identified three main causes of Filipino suffering under Spanish rule:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Destruction of native culture</h4>
                      <p>Spanish colonization erased Filipino heritage, causing a loss of identity, pride, and hope for the future.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Spain's military laws</h4>
                      <p>Militarization led to depopulation, poverty, abandoned farms, and weakened family life.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Passive submission</h4>
                      <p>The friars' misuse of power and religion bred fear, silence, and submission among Filipinos.</p>
                    </div>
                  </div>
                </section>
                
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Rizal's Optimism</h3>
                  <p className="mb-4">In The Philippines a Century Hence, Rizal questioned whether Spain truly had the power to stop the Philippines from progressing. Despite the oppression and decline brought by colonial rule, he remained hopeful for the country's future. He offered several reasons for this optimism:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Failed Suppression</h4>
                      <p>Efforts to destroy the Filipino people through war and famine were unsuccessful. The population endured and even grew, and Spain was unwilling to sacrifice countless soldiers for total control.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Poverty as a Catalyst</h4>
                      <p>Instead of weakening them, poverty pushed Filipinos to seek reform and pursue progress.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Education and Awareness</h4>
                      <p>Spain's attempt to keep Filipinos ignorant failed. National consciousness grew, and intelligent Filipino leaders still emerged.</p>
                    </div>
                  </div>
                  
                  <p className="mt-4">Rizal believed that Spain could not stop Philippine progress and that change was only possible through major reforms in its colonial policies to match the rising nationalism among Filipinos.</p>
                </section>
                
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Rizal's Forecast</h3>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <p className="mb-4">In his essay, Rizal questioned whether the Philippines would remain a Spanish colony in the future. He acknowledged that Spain had maintained control for 300 years because Filipinos had been loyal, sacrificing their freedom due to the promises and friendship offered by Spain.</p>
                    
                    <p className="mb-4">Over time, however, Filipinos began to view the colonizers as exploiters rather than protectors. Rizal predicted that if this situation continued, the Filipino people would eventually rise up, leading to a revolution unless Spain reformed. He outlined two key demands from the Filipinos:</p>
                    
                    <ul className="list-disc pl-6 mb-4">
                      <li>Representation in the Spanish Cortes and the ability to address grievances.</li>
                      <li>The right to human rights and freedoms.</li>
                    </ul>
                    
                    <p>Rizal suggested that fulfilling these demands would allow the Philippines to remain a colony but with more freedom and legal protections. However, if ignored, the Filipinos would seek independence. He clarified that his hope was for greater freedom, not complete separation, and advocated for peaceful negotiations with Spain to achieve this.</p>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-2xl font-semibold mb-4">Other Related Writings</h3>
                  <p className="mb-4">Aside from The Philippines: A Century Hence, Rizal wrote several influential works that ignited Filipino patriotism and contributed to the Philippine revolution. This chapter will focus on two key writings:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Sobre La Indolencia De Los Filipinos (The Indolence of the Filipinos)</h4>
                      <p>An essay challenging the colonial stereotype of Filipino laziness.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Letter to the Young Women of Malolos</h4>
                      <p>Advocating for women's education and their role in nation-building.</p>
                    </div>
                  </div>
                </section>
              </div>
            }
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Points: The Philippines a Century Hence</h3>
                <ul className="space-y-3">
                  <li>Published in La Solidaridad between September 1889 and January 1890 in four parts.</li>
                  <li>Analyzed the past and present conditions of the Philippines and predicted its future.</li>
                  <li>Warned Spain of a possible Filipino revolution if reforms were not implemented.</li>
                  <li>Called for representation in the Spanish Cortes and human rights protections.</li>
                  <li>Emphasized that despite Spain's efforts to suppress Filipino progress, national consciousness continued to grow.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">Historical Context</h3>
                <p className="mb-4">When Rizal wrote "The Philippines a Century Hence," he was living in Europe and actively involved in the Propaganda Movement. The essay was part of his efforts to expose the conditions in the Philippines to a European audience and advocate for reforms.</p>
                <p className="mb-4">His predictions proved remarkably accurate. Within a few years of the essay's publication, the Philippine Revolution erupted (1896), and Spain's colonial rule ended in 1898 following the Spanish-American War.</p>
                <p>The essay remains relevant today as a testament to Rizal's keen political insight and his vision for a Philippines where citizens enjoy their rights and freedoms within a just society.</p>
              </div>
            }
          />
        </div>
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Lesson 1 (Continued)</h2>
            <Separator className="flex-1" />
          </div>
          
          <LessonContent
            title="The Indolence of the Filipinos"
            content={
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
                  <img 
                    src="/indolence-article.jpg" 
                    alt="Indolence of the Filipinos Article"
                    className="rounded-lg shadow-md w-full md:w-1/3 h-auto mb-4 md:mb-0"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Indolence+Article";
                    }}
                  />
                  <div>
                    <p className="mb-4">In this essay published in La Solidaridad (in five parts between July and September 1890), Jose Rizal refuted the Spanish claim that Filipinos were naturally lazy. He argued that Filipino "indolence" was a result of Spanish colonization, not an inherent trait. Rizal emphasized that Filipinos were once hardworking and industrious before colonial rule disrupted their way of life.</p>
                  </div>
                </div>
                
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Key Causes of "Indolence" According to Rizal</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Galleon Trade</h4>
                      <p>Cut off the Philippines from trade with nearby countries, killing local businesses and industries.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Forced Labor</h4>
                      <p>Filipinos were taken from their work to serve in war-related and public projects, abandoning farming and trade.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Lack of Protection</h4>
                      <p>Constant threats from pirates and invaders led to destroyed communities and a nomadic lifestyle.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Poor Education System</h4>
                      <p>Schools lacked practical subjects like agriculture and industry, offering only repetitive religious instruction.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Bad Example from Spaniards</h4>
                      <p>Colonial officials and elites avoided manual labor and were idle, influencing the natives.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Gambling Culture</h4>
                      <p>Cockfighting and betting, encouraged even by friars and officials, distracted the people from productive work.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Corrupt Religious Teachings</h4>
                      <p>Friars taught that poverty led to heaven, discouraging hard work.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Heavy Taxes and Exploitation</h4>
                      <p>Excessive taxation and abuses drained people's earnings, killing motivation to work.</p>
                    </div>
                  </div>
                </section>
              </div>
            }
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Points: The Indolence of the Filipinos</h3>
                <ul className="space-y-3">
                  <li>Published in La Solidaridad in five parts (July-September 1890).</li>
                  <li>Refuted the Spanish stereotype that Filipinos were inherently lazy.</li>
                  <li>Argued that any observed "indolence" was a result of Spanish colonial policies and practices.</li>
                  <li>Provided historical evidence of pre-colonial Filipino industry and commerce.</li>
                  <li>Highlighted how various colonial practices (forced labor, exploitation, poor education) undermined Filipino productivity.</li>
                  <li>Emphasized that climate was not a determining factor for "indolence" as even Europeans in tropical regions could be productive.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">Historical Impact</h3>
                <p className="mb-4">"The Indolence of the Filipinos" challenged a deeply entrenched colonial stereotype that was used to justify Spanish dominance. By showing that any perceived laziness was actually a result of colonial policies, Rizal shifted the blame from the Filipino people to their oppressors.</p>
                <p className="mb-4">This essay was particularly significant because the stereotype of the "lazy native" was common across many colonial contexts, not just in the Philippines. By methodically dismantling this myth, Rizal provided a framework that could be applied in other colonized regions.</p>
                <p>The essay continues to be relevant today in discussions about historical injustices, cultural stereotypes, and post-colonial identity in the Philippines and beyond.</p>
              </div>
            }
          />
        </div>
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Lesson 1 (Continued)</h2>
            <Separator className="flex-1" />
          </div>
          
          <LessonContent
            title="Letter to the Young Women of Malolos"
            content={
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
                  <img 
                    src="/malolos-women.jpg" 
                    alt="Young Women of Malolos"
                    className="rounded-lg shadow-md w-full md:w-1/3 h-auto mb-4 md:mb-0"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Women+of+Malolos";
                    }}
                  />
                  <div>
                    <p className="mb-4">Jose Rizal wrote this letter in response to Marcelo H. del Pilar's request, praising the courage of 20 young women from Malolos, Bulacan, who sought to open a school to learn Spanish despite opposition from a Spanish priest. In this letter, Rizal advocated for women's right to education and emphasized their vital role in shaping a strong, moral, and patriotic society.</p>
                  </div>
                </div>
                
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Key Points Rizal Emphasized</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Support for Equal Education</h4>
                      <p>Rizal believed women deserved the same educational opportunities as men, challenging the traditional view that women belonged only in domestic roles.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Critique of the Clergy</h4>
                      <p>He condemned local priests for not representing true Christian values.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Encouragement of Critical Thinking</h4>
                      <p>People, including women, should think for themselves and not blindly follow authority.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Role of Mothers</h4>
                      <p>Mothers should teach their children love for God, country, and fellowmen, and instill strong values.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Influence on Society</h4>
                      <p>Women, especially mothers, should help build a better nation by raising good citizens and setting moral standards.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Qualities of Ideal Women</h4>
                      <p>Filipino women should be noble, dignified, and strong, yet also loving and gentle.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">Self-Education and Moral Living</h4>
                      <p>Young women should pursue education, live with good values, and choose life partners wisely.</p>
                    </div>
                  </div>
                </section>
              </div>
            }
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Points: Letter to the Young Women of Malolos</h3>
                <ul className="space-y-3">
                  <li>Written on February 22, 1889, while Rizal was in London.</li>
                  <li>Originally written in Tagalog to ensure it could be widely read by Filipino women.</li>
                  <li>Praised the 20 young women of Malolos for their courage in demanding education despite opposition.</li>
                  <li>Advanced ideas about women's equality and education that were progressive for the time.</li>
                  <li>Highlighted the crucial role of women, especially mothers, in nation-building.</li>
                  <li>Challenged women to develop critical thinking and not blindly follow authority figures.</li>
                  <li>Emphasized the need for careful selection of life partners based on moral character.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">Historical Context and Impact</h3>
                <p className="mb-4">The letter was a response to an incident in 1888 when twenty young women from Malolos, Bulacan, petitioned the Governor-General to allow them to open a night school where they could learn Spanish, despite opposition from the local parish priest. Their brave act caught the attention of Marcelo H. del Pilar, who asked Rizal to write them a letter of commendation.</p>
                <p className="mb-4">In the male-dominated society of 19th-century Philippines, Rizal's advocacy for women's education and recognition of their important role in society was revolutionary. The letter helped to inspire a generation of educated Filipino women who later played crucial roles in the nationalist movement.</p>
                <p>Today, the letter remains an important historical document in the development of feminism in the Philippines and continues to inspire discussions about gender equality, education, and women's roles in society.</p>
              </div>
            }
          />
        </div>
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Lesson 2</h2>
            <Separator className="flex-1" />
          </div>
          
          <LessonContent
            title="Jose Rizal and Philippine Nationalism: Bayani and Kabayanihan"
            content={
              <div className="space-y-6">
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">The concept of bayani vs the concept of 'hero'</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-semibold mb-4">Definition of "Hero" (Western Concept)</h4>
                      <p className="mb-2">According to the Merriam-Webster Dictionary, a hero is:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>A mythological or legendary figure with divine or supernatural abilities</li>
                        <li>An illustrious warrior</li>
                        <li>A person admired for noble qualities and achievements</li>
                        <li>Someone who shows great courage</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-semibold mb-4">Definition of "Bayani" (Filipino Concept)</h4>
                      <p className="mb-2">As cited from the UP Diksiyunaryong Filipino (2001) and other sources, a bayani is:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>A person of extraordinary courage and ability</li>
                        <li>Someone who does something noble or dakila</li>
                        <li>In mythology, one with god-like strength or bravery</li>
                        <li>Someone involved in bayanihan — working for the common good</li>
                        <li>A term rooted in bayan, which can mean town, people, nation, time of day, or even weather</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-semibold mb-4">Key Differences (Ocampo, 2016)</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>"Bayani" is richer in meaning than the Western "hero"</li>
                        <li>Bayani is linked to bayan — one's community or nation</li>
                        <li>Kabayanihan is doing something noble not for personal glory, but for the greater good of the people</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-semibold mb-4">Cultural Roots (Nolasco, 1997)</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>"Bayani" has Austronesian origins</li>
                        <li>Refers to warriors who protect their communities</li>
                        <li>Derivatives include: bajani, majani, bagani, bahani</li>
                      </ul>
                      
                      <h4 className="text-xl font-semibold mb-4 mt-4">Indigenous Perspectives (Tiu, 2005)</h4>
                      <p className="mb-2">Some Indigenous Peoples (IPs), like the Mandaya of Davao, had hierarchies of bayani:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Great bagani (chief leader)</li>
                        <li>Manikad (junior warriors)</li>
                        <li>Maguyantok (foot soldiers)</li>
                        <li>Advised by elders called bawukan or matadong</li>
                      </ul>
                      
                      <h4 className="text-xl font-semibold mb-4 mt-4">Folk Epics and Superhuman Bayani</h4>
                      <p className="mb-2">Examples of legendary Filipino bayani in folklore:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Lam-ang (Ilocano)</li>
                        <li>Kudaman (Palawan)</li>
                        <li>Tuwaang (Manobo)</li>
                      </ul>
                    </div>
                  </div>
                </section>
                
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Origins of Bayani and Kabayanihan</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-semibold mb-4">Bayani and Bayan Connection (Veneracion, 1998)</h4>
                      <p className="mb-2">Bayan has layered meanings:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>People in a community (taga-bayan)</li>
                        <li>The community itself (bayan ng...)</li>
                        <li>The nation (bayan kong Pilipinas)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-semibold mb-4">Values Behind Kabayanihan</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Pakikipagkapwa – extending oneself for others</li>
                        <li>Pagdamay – empathy-driven help</li>
                        <li>Kawanggawa – acts of charity rooted in empathy, not for rewards</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-semibold mb-4">Pre-colonial Roots of Bayani (Salazar, 1997)</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Bayani existed in early Filipino barangays (independent communities).</li>
                        <li>A bayani was an ordinary person with extraordinary courage, serving others for the common good.</li>
                        <li>The bayani worked with the community, not above it, to maintain peace and order.</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-semibold mb-4">Kabayanihan and Bayanihan</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Kabayanihan comes from bayanihan, a pre-colonial practice of community cooperation.</li>
                        <li>Example: Collective effort in building houses for neighbors.</li>
                        <li>It reflected a voluntary, communal spirit of helping others without expecting anything in return.</li>
                      </ul>
                    </div>
                  </div>
                </section>
                
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Evolution of Bayani and Kabayanihan</h3>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4">
                        <h4 className="font-semibold mb-2">From pre-colonial community defenders to modern symbols of national service and sacrifice.</h4>
                      </div>
                      
                      <div className="text-center p-4">
                        <h4 className="font-semibold mb-2">The meaning of bayani and kabayanihan evolved with Philippine history.</h4>
                      </div>
                      
                      <div className="text-center p-4">
                        <h4 className="font-semibold mb-2">The essence remains: selfless service, courage, and commitment to the common good, but the context (from local communities to national movements) has broadened.</h4>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-semibold mb-4">Colonial Period</h4>
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2">Evolution of the Concept of Bayani</h5>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Shifted to mean martyrdom and sacrifice for the nation.</li>
                          <li>Bayani became a symbol of resistance against foreign oppression.</li>
                          <li>Dr. Jose Rizal became the most iconic bayani, whose execution inspired the Philippine Revolution against Spanish rule.</li>
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2">Colonial Powers and Timeline</h5>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Spain: 1521–1898 (377 years)</li>
                          <li>United States: 1898–1946 (48 years)</li>
                          <li>Japan: 1942–1945 (3 years)</li>
                          <li>Total colonization: 428 years (over four centuries)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2">Evolution of Kabayanihan</h5>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Despite colonization, bayanihan (communal unity and cooperation) persisted.</li>
                          <li>Practicing kabayanihan became a form of resilience and silent resistance against oppressive foreign rule.</li>
                          <li>This collective heroism was reflected in revolutionary movements of the 19th and early 20th centuries.</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-semibold mb-4">Post-Independence Period</h4>
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2">New Meaning of Bayani</h5>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>After 1946, bayani came to represent the fight for social justice and human rights.</li>
                          <li>The bayani was now someone who stood up for democracy and the welfare of the people.</li>
                          <li>Ninoy Aquino became a key figure, remembered for opposing Ferdinand Marcos' dictatorship and sacrificing his life for the country.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2">Evolving Concept of Kabayanihan</h5>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Despite ongoing poverty and inequality, bayanihan (communal spirit) continued to thrive.</li>
                          <li>Kabayanihan symbolized solidarity and resilience, helping Filipinos navigate post-war challenges.</li>
                          <li>The EDSA People Power Revolution (1986) became the ultimate symbol of kabayanihan, showing peaceful, united resistance to oppression.</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-xl font-semibold mb-4">Present-day Manifestations</h4>
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2">Modern Bayani</h5>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>The concept now includes ordinary Filipinos making sacrifices for family and country.</li>
                          <li>OFWs (Overseas Filipino Workers) and frontliners during the COVID-19 pandemic are prime examples.</li>
                          <li>A bayani can also be personal—someone a person admires, like a parent, sibling, or mentor.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2">Modern Kabayanihan</h5>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Still rooted in Bayanihan, the concept now shines through volunteerism and community efforts.</li>
                          <li>Seen in initiatives like community pantries and volunteer organizations during calamities and the pandemic.</li>
                          <li>Reflects solidarity, empathy, and service, especially in response to national and local crises.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            }
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Points: Bayani and Kabayanihan</h3>
                <ul className="space-y-3">
                  <li>The Filipino concept of "bayani" is more complex than the Western concept of "hero," encompassing community service and collective good.</li>
                  <li>Bayani is etymologically connected to "bayan" (community/nation), emphasizing the communal aspect of heroism.</li>
                  <li>Pre-colonial bayani were community defenders and leaders who worked with their people.</li>
                  <li>During the colonial period, bayani came to represent resistance against foreign oppression.</li>
                  <li>Kabayanihan evolved from community mutual aid (bayanihan) to collective resistance against colonial powers.</li>
                  <li>In modern times, the concept of bayani has expanded to include everyday heroes like OFWs and frontline workers.</li>
                  <li>Jose Rizal exemplifies the Filipino bayani through his intellectual contributions and ultimate sacrifice for the nation.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">The Impact of Rizal on the Concept of Bayani</h3>
                <p className="mb-4">Jose Rizal transformed the concept of bayani in Philippine society. Before Rizal, bayani were primarily viewed as warriors or individuals with supernatural abilities. Through his life and works, Rizal demonstrated that a bayani could also be an intellectual who fights injustice through words and peaceful means.</p>
                <p className="mb-4">Rizal's concept of heroism emphasized education, reason, and moral courage over physical prowess or violence. He showed that the pen can indeed be mightier than the sword, using his writings to expose Spanish colonial abuses and advocate for reforms.</p>
                <p className="mb-4">His ultimate sacrifice—accepting death rather than compromising his principles—cemented his status as the quintessential Filipino bayani. This example has inspired generations of Filipinos to serve their country through various peaceful means, from education to public service.</p>
                <p>Today, the concept of bayani that Rizal helped shape continues to evolve, but its core values remain: service to the nation, moral courage, and commitment to justice and freedom for all Filipinos.</p>
              </div>
            }
          />
        </div>
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Lesson 3</h2>
            <Separator className="flex-1" />
          </div>
          
          <LessonContent
            title="Jose Rizal and Philippine Nationalism: National Symbol"
            content={
              <div className="space-y-6">
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">A Representation of Something Meaningful</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <p className="mb-4">Symbols represent meaningful ideas, traditions, and national identity. The NCCA says Philippine national symbols embody sovereignty and national unity.</p>
                    <p>Republic Act 8491 (Flag and Heraldic Code) defines several official national symbols, including:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>National flag</li>
                      <li>National anthem</li>
                      <li>National language: Filipino (as stated in the Constitution)</li>
                    </ul>
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-4">Official National Symbols (Declared by Law/Proclamation)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <img 
                        src="/narra-tree.jpg" 
                        alt="Narra Tree"
                        className="h-32 w-32 object-cover mx-auto mb-2 rounded"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/150x150/e2e8f0/64748b?text=Narra";
                        }}
                      />
                      <p className="font-semibold">Narra – National Tree</p>
                      <p className="text-sm text-gray-600">(Proclamation No. 652, 1934)</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <img 
                        src="/sampaguita.jpg" 
                        alt="Sampaguita Flower"
                        className="h-32 w-32 object-cover mx-auto mb-2 rounded"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/150x150/e2e8f0/64748b?text=Sampaguita";
                        }}
                      />
                      <p className="font-semibold">Sampaguita – National Flower</p>
                      <p className="text-sm text-gray-600">(Proclamation No. 652, 1934)</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <img 
                        src="/philippine-eagle.jpg" 
                        alt="Philippine Eagle"
                        className="h-32 w-32 object-cover mx-auto mb-2 rounded"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/150x150/e2e8f0/64748b?text=Philippine+Eagle";
                        }}
                      />
                      <p className="font-semibold">Philippine Eagle – National Bird</p>
                      <p className="text-sm text-gray-600">(Proclamation No. 615, 1995)</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <img 
                        src="/philippine-pearl.jpg" 
                        alt="Philippine Pearl"
                        className="h-32 w-32 object-cover mx-auto mb-2 rounded"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/150x150/e2e8f0/64748b?text=Pearl";
                        }}
                      />
                      <p className="font-semibold">Philippine Pearl – National Gem</p>
                      <p className="text-sm text-gray-600">(Proclamation No. 905, 1996)</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <img 
                        src="/arnis.jpg" 
                        alt="Arnis"
                        className="h-32 w-32 object-cover mx-auto mb-2 rounded"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/150x150/e2e8f0/64748b?text=Arnis";
                        }}
                      />
                      <p className="font-semibold">Arnis – National Sport/Martial Art</p>
                      <p className="text-sm text-gray-600">(Republic Act 9850, 2009)</p>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-4">Popular but Unofficial Symbols (not declared by law)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <img 
                        src="/carabao.jpg" 
                        alt="Carabao"
                        className="h-32 w-32 object-cover mx-auto mb-2 rounded"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/150x150/e2e8f0/64748b?text=Carabao";
                        }}
                      />
                      <p className="font-semibold">Carabao</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <img 
                        src="/mango.jpg" 
                        alt="Mango"
                        className="h-32 w-32 object-cover mx-auto mb-2 rounded"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/150x150/e2e8f0/64748b?text=Mango";
                        }}
                      />
                      <p className="font-semibold">Mango</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <img 
                        src="/anahaw.jpg" 
                        alt="Anahaw"
                        className="h-32 w-32 object-cover mx-auto mb-2 rounded"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/150x150/e2e8f0/64748b?text=Anahaw";
                        }}
                      />
                      <p className="font-semibold">Anahaw</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <img 
                        src="/rizal-hero.jpg" 
                        alt="Jose Rizal"
                        className="h-32 w-32 object-cover mx-auto mb-2 rounded"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/150x150/e2e8f0/64748b?text=Jose+Rizal";
                        }}
                      />
                      <p className="font-semibold">Jose Rizal is widely regarded as a national hero, but not officially declared in law.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <img 
                        src="/waling-waling.jpg" 
                        alt="Waling-waling Orchid"
                        className="h-32 w-32 object-cover mx-auto mb-2 rounded"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/150x150/e2e8f0/64748b?text=Waling-waling";
                        }}
                      />
                      <div>
                        <p className="font-semibold">Waling-waling Proposal</p>
                        <p className="text-sm">In 2013, the Senate approved a bill to declare Waling-waling as a national flower alongside Sampaguita. However, President Benigno Aquino III vetoed it, so it remains unofficial.</p>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Filipino National Symbols</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <p className="mb-4">No Filipino historical figure has been officially declared a national hero by law or executive order, according to the National Historical Commission of the Philippines (NHCP) and historian Ambeth Ocampo. While Jose Rizal is often referred to as a national hero, this is only mentioned in the "whereas" clause of the 1956 Rizal Law—not in its main provisions. In 1995, a government committee recommended nine individuals to be declared national heroes, but no formal action followed.</p>
                    
                    <p>After the death of President Corazon Aquino in 2009, efforts were made to recognize her, alongside others like Benigno Aquino Jr., as national heroes. However, no resolutions were passed.</p>
                    
                    <p>In 2014, Representative Rene Relampagos filed House Bill 3926, or the Philippine National Symbols Act of 2014, to officially recognize national symbols such as Jose Rizal as the only national hero, adobo as the national food, and the jeepney as the national vehicle. The bill aims to promote nationalism, unity, and proper recognition of national symbols.</p>
                  </div>
                </section>
                
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">What is the debate surrounding Rizal's status as a national hero?</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <p className="mb-4">There has been debate about Dr. Jose Rizal's status as the Philippines' national hero, with some arguing he does not deserve the title. Critics point out that Rizal never led a revolution or engaged in armed resistance against colonial rule, unlike Andres Bonifacio and other Katipunan leaders. They believe a national hero should be someone who fought and died for the country's freedom, not just a reformist intellectual.</p>
                    
                    <p>Another argument against Dr. Jose Rizal's status as a national hero is that he was a "made-to-order" hero, promoted by the Americans, particularly by Governor Howard Taft. Critics claim that the American government strongly supported Rizal's recognition as the Philippines' national hero because he did not speak out against American colonization. Additionally, some argue that Rizal's writings, such as the "Letter to the Women of Malolos" and "Filipinas dentro de cien años" (The Philippines Within a Century), suggested he had optimistic views on American rule, believing it would bring freedom and progress to the Philippines.</p>
                  </div>
                </section>
                
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Rizal's silence does not mean support</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <p>In his 1990 book, historian and Rizal expert Ambeth R. Ocampo argued that while José Rizal did not criticize the Americans, this does not mean he supported their colonial rule. Rizal did not speak out against American colonization because he had no direct knowledge of it, as he died before their control was fully established in the Philippines. Ocampo suggested that Rizal, a pragmatist, may have seen the Americans as potential allies in the fight against Spanish corruption and abuse, though he did not necessarily endorse their colonization. Furthermore, Ocampo emphasized that Rizal's heroism stemmed not just from his intellect or martyrdom, but from his life of excellence, integrity, and patriotism, envisioning the Philippines as a free and independent nation.</p>
                  </div>
                </section>
                
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">In defense of Rizal as our foremost hero</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <p className="mb-4">Another historian, Esteban de Ocampo, wrote an article, "Who Made Rizal Our Foremost National Hero, and Why" (1996), providing insights into the merits of Rizal as a hero.</p>
                    
                    <p className="mb-4">De Ocampo's points on why Rizal is worthy of being the country's foremost hero are the following:</p>
                    
                    <h4 className="text-lg font-semibold mb-2">Rizal's Intellectual Brilliance</h4>
                    <p className="mb-4">Rizal was a man of great intellectual brilliance. He was a writer, philosopher, and revolutionary who fought for the independence of the Philippines from Spanish colonial rule. Rizal's writings exposed the injustices and abuses of the Spanish colonial government. His writings inspired the Philippine Revolution and helped to awaken the national consciousness of the Filipino people.</p>
                    
                    <h4 className="text-lg font-semibold mb-2">Rizal's Stand Against Colonial Oppression</h4>
                    <p className="mb-4">Rizal was not only admired for possessing intellectual brilliance, but also for taking a stand and resisting the Spanish colonial government. He was a symbol of resistance against colonial oppression, and many Filipinos fought and died for their country because of his influence. Rizal's birth and death are remembered and recognized by the Filipino people. His name can be found in almost all aspects of Filipino life, from streets and buildings to schools and hospitals.</p>
                    
                    <h4 className="text-lg font-semibold mb-2">Rizal's Role in the Propaganda Movement</h4>
                    <p className="mb-4">Rizal's role in the Propaganda Movement is another merit that makes him a hero. The Propaganda Movement was a political and cultural campaign during the late 19th century that sought to reform the Spanish colonial government in the Philippines. Rizal was a towering figure in the Propaganda Movement, and he took an admirable part in that movement. His works, such as his essays and letters, were instrumental in promoting the cause of the Propaganda Movement. Rizal's writings helped to awaken the national consciousness of the Filipino people and inspired them to fight for their rights and freedoms.</p>
                    
                    <h4 className="text-lg font-semibold mb-2">Rizal's Martyrdom</h4>
                    <p className="mb-4">Rizal's martyrdom is perhaps the most significant merit that makes him a hero. Rizal was executed by the Spanish colonial government on December 30, 1896, for his involvement in the Philippine Revolution. His death inspired the Filipino people to continue the struggle for independence and freedom. Rizal's martyrdom became a symbol of the Filipino people's resistance against colonial oppression, and his name became synonymous with the struggle for national liberation.</p>
                    
                    <h4 className="text-lg font-semibold mb-2">Rizal's Influence on Filipino Identity</h4>
                    <p>Rizal's influence on Filipino identity is another merit that makes him a hero. Rizal's works, such as his novels and essays, helped to shape the Filipino identity and consciousness. His writings exposed the injustices and abuses of the Spanish colonial government and inspired the Filipino people to fight for their rights and freedoms. Rizal's influence on Filipino identity is reflected in the various aspects of Filipino culture, such as literature, art, and music.</p>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-2xl font-semibold mb-4">Other Values from Rizal's Life That Make Him a Worthy National Symbol</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">1. Faith in God</h4>
                      <p>While in Madrid, Rizal wrote to his mother assuring her of his faith in God. When his sister Olympia died, Rizal expressed his faith saying "I console myself saying that it was the will of God and what He does must be the best." Even as he and his family were persecuted by the Spanish friars, Rizal's belief in God never faltered.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">2. Love of parents</h4>
                      <p>Rizal's love for his parents was profound and evident. He was obedient and respectful to his parents and always looking out for their welfare. He studied ophthalmology to cure his mother's failing sight. His heartbreak at the suffering of his parents, particularly his mother, under the Spanish friars and officials were palpable in his writings. He adored his father. This is evident of the bust and life-size sculpture he made of Don Francisco. In his novels, Ibarra is also depicted as a son who loved his father very much.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">3. Perseverance</h4>
                      <p>Rizal demonstrated perseverance in his service to his country by exhibiting mental and moral strength to withstand pain, adversity, and danger. This quality of perseverance refers to having steady persistence in pursuing something, even in the face of difficulty or delays in attaining success.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">4. Devotion to truth</h4>
                      <p>Rizal was a firm believer of truth. He believed to reveal only the truth, not hide it. Rizal's standard of presenting only the truth was evident in his literary work and scientific research. His literary work expressed only the truth and his scientific research are proof of his persevering search for truth.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">5. Integrity</h4>
                      <p>Rizal exemplified integrity, characterized by honesty and strong moral principles. He served as a role model for moral uprightness and honesty in various aspects. These virtues were a product of his unwavering love and pursuit of truth.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">6. Noble thought and conduct</h4>
                      <p>Rizal's works and writings encouraged good behavior, a clear conscience, and upright thinking. In one of his writings, he instructed mothers to stimulate their children's minds and equip them with virtuous thoughts and actions.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">7. Willpower</h4>
                      <p>Rizal believed in the power of willpower, which involves self-control and restraint. Despite the Spanish colonizers' attempts to make Rizal's generation feel inferior and reliant on them for governance, Rizal opposed this notion and instead worked towards the idea that his people had the potential for greatness and deserved freedom.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">8. Discipline and self-control</h4>
                      <p>Rizal practiced discipline. He was able to control his base desires through self-restraint and control. He frequently employed reason to determine the most favorable course of action, regardless of his personal desires. In fact, he willingly deprived himself of numerous unsound pleasures.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">9. Charity</h4>
                      <p>Rizal was happy when he could help somebody, even at his own expense. All his work and sacrifices were charitable acts for his fellowmen. His death was his ultimate act of charity towards his family and the Filipino people as he expressed willingness to die for his country.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold mb-2">10. Patriotism</h4>
                      <p>Rizal's patriotism is reflected in his deep devotion and loyalty to his nation. His visions and proposals for the country's progress were aimed at ensuring Filipinos could fully experience nationhood politically, culturally, and economically united under national solidarity. These are just a few of the values Rizal embodied that make him worthy of being a national symbol. There are, however, other important values that have not been mentioned.</p>
                    </div>
                  </div>
                </section>
                
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Criteria for becoming a National Hero</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <p className="mb-4">In 1900, the Philippine Commission passed Act No. 137, merging the districts of Morong and Manila to form the "Province of Rizal," named in honor of Dr. Jose Rizal. This marked the beginning of the formal recognition of heroes in the Philippines. Over time, heroes have been honored in various ways, including through speeches, holidays, street names, monuments, and more. As many names were celebrated as heroes, the need to evaluate the criteria for declaring a national hero arose.</p>
                    
                    <p className="mb-4">During his presidency, Ferdinand Marcos tasked the National Heroes Commission to establish such criteria. Later, under President Fidel V. Ramos, an executive order on March 28, 1993, created the National Heroes Committee (NHC), which was tasked with studying, evaluating, and recommending figures for national hero status. The committee, composed of distinguished members, developed new criteria after a series of discussions.</p>
                    
                    <p className="mb-4">On June 3, 1993, the National Heroes Committee, including members like Drs. Onofre D. Corpuz, Samuel K. Tan, and Ambeth Ocampo, adopted these criteria for national heroes:</p>
                    
                    <ol className="list-decimal pl-6 mb-4">
                      <li>Heroes are those who aspire and fight for the nation's freedom.</li>
                      <li>Heroes contribute to a system of freedom and order.</li>
                      <li>Heroes enhance the quality of life and shape the nation's destiny.</li>
                    </ol>
                    
                    <p className="font-semibold mb-2">Additional Criteria for Heroes</p>
                    <p className="mb-2">Adopted by the Technical Committee of the National Heroes Committee on November 15, 1995, Manila.</p>
                    <ol className="list-decimal pl-6 mb-4">
                      <li>A hero is part of the people's expression.</li>
                      <li>A hero thinks of the future, especially the future generations.</li>
                      <li>The choice of a hero involves not only the recounting of an episode or events in history, but of the entire process that made this person a hero.</li>
                    </ol>
                    
                    <p>However, as discussed earlier, no law, executive order, or proclamation has been officially enacted or issued, proclaiming any Filipino historical figure as a national hero. Nevertheless, laws and directives were issued to honor some names because of their substantial roles in nation-building and contributions to history.</p>
                  </div>
                </section>
              </div>
            }
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Points: Rizal as a National Symbol</h3>
                <ul className="space-y-3">
                  <li>Despite being widely recognized as the Philippine national hero, Jose Rizal has not been officially declared so by any specific law or proclamation.</li>
                  <li>The only legal reference to Rizal as a national hero appears in the "whereas" clause of the 1956 Rizal Law, not in its main provisions.</li>
                  <li>Debates around Rizal's status include criticism that he was a "made-to-order" hero promoted by American colonial authorities.</li>
                  <li>Some critics argue that a national hero should be a revolutionary fighter like Andres Bonifacio, rather than an intellectual reformist like Rizal.</li>
                  <li>Historian Esteban de Ocampo defends Rizal's status through his intellectual brilliance, opposition to colonialism, role in the Propaganda Movement, martyrdom, and influence on Filipino identity.</li>
                  <li>Rizal's numerous virtues—including faith, love of family, perseverance, integrity, and patriotism—further support his status as a worthy national symbol.</li>
                  <li>In 1995, the National Heroes Committee established criteria for national heroes, but no formal proclamations followed.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">Rizal's Enduring Legacy as a National Symbol</h3>
                <p className="mb-4">Despite the lack of official legislation declaring him the national hero, Jose Rizal's symbolism in Philippine culture and identity is undeniable. His face appears on the one-peso coin and the hundred-peso bill. December 30, the date of his execution, is a national holiday (Rizal Day). Countless schools, streets, towns, and institutions bear his name throughout the country.</p>
                <p className="mb-4">What makes Rizal particularly effective as a national symbol is the multifaceted nature of his character and contributions. He represents intellectual excellence as a polymath who mastered multiple fields. He embodies artistic achievement through his novels, poems, and sculptures. He exemplifies scientific inquiry through his research and medical practice. He demonstrates moral courage through his peaceful yet determined opposition to injustice.</p>
                <p className="mb-4">Perhaps most importantly, Rizal represents a vision of Filipino potential and capability at a time when colonial powers questioned these qualities. Through his life and works, he showed what Filipinos could achieve with education, determination, and love of country.</p>
                <p>Whether or not he is officially declared the national hero, Rizal's symbolic importance continues to inspire generations of Filipinos to strive for excellence, to think critically, and to work for the betterment of their nation through peaceful and constructive means.</p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Chapter5;

