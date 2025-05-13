
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import LessonContent from '@/components/LessonContent';
import Navbar from '@/components/Navbar';
import { Separator } from "@/components/ui/separator";

const Chapter4 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-1 container max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Rizal's Writings</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">Illuminating Philippine History and Society</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="mb-4 w-full">
                <AspectRatio ratio={3/4}>
                  <img 
                    src="/morga-cover.jpg" 
                    alt="Cover of Morga's Sucesos" 
                    className="rounded-md object-cover h-full w-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/400x500/e2e8f0/64748b?text=Morga%27s+Sucesos";
                    }}
                  />
                </AspectRatio>
              </div>
              <h3 className="font-bold text-lg mb-2">Sucesos de las Islas Filipinas</h3>
              <p className="text-sm text-gray-600">Published in 1890, Rizal's annotation of Antonio Morga's work was a pivotal historical analysis that countered colonial narratives.</p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="mb-4 w-full">
                <AspectRatio ratio={3/4}>
                  <img 
                    src="/noli-cover.jpg" 
                    alt="Cover of Noli Me Tangere" 
                    className="rounded-md object-cover h-full w-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/400x500/e2e8f0/64748b?text=Noli+Me+Tangere";
                    }}
                  />
                </AspectRatio>
              </div>
              <h3 className="font-bold text-lg mb-2">Noli Me Tangere</h3>
              <p className="text-sm text-gray-600">Published in 1887, this novel exposed the abuses of Spanish colonial rule and became a catalyst for Philippine nationalism.</p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="mb-4 w-full">
                <AspectRatio ratio={3/4}>
                  <img 
                    src="/fili-cover.jpg" 
                    alt="Cover of El Filibusterismo" 
                    className="rounded-md object-cover h-full w-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/400x500/e2e8f0/64748b?text=El+Filibusterismo";
                    }}
                  />
                </AspectRatio>
              </div>
              <h3 className="font-bold text-lg mb-2">El Filibusterismo</h3>
              <p className="text-sm text-gray-600">Published in 1891, this darker sequel to Noli Me Tangere explores themes of revolution and social justice.</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Lesson 1</h2>
            <Separator className="flex-1" />
          </div>
          
          <LessonContent
            title="Annotation of Antonio Morga's Sucesos"
            content={
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
                  <img 
                    src="/rizal-reading.jpg" 
                    alt="Rizal Studying Historical Documents"
                    className="rounded-lg shadow-md w-full md:w-1/3 h-auto mb-4 md:mb-0"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Rizal+Studying";
                    }}
                  />
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Antonio de Morga and the Sucesos de las Islas Filipinas</h3>
                    <p className="mb-4">Dr. Antonio de Morga was a Spanish lawyer and official who served as lieutenant governor-general of the Philippines and judge of the Royal Audiencia in Manila. His book, <em>Sucesos de las Islas Filipinas</em>, was first published in Mexico in 1609.</p>
                    <p>It chronicled the events in the Philippine Islands from their discovery by Ferdinand Magellan in 1521 until the early 17th century. What distinguished Morga's work from other Spanish accounts was his relatively objective and fair portrayal of the Filipino people, describing their customs, traditions, governance, and way of life before and during the early years of Spanish rule.</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Rizal's Motivation</h3>
                <p className="italic text-gray-700 text-lg border-l-4 border-primary pl-4 mb-6">
                  "They become ashamed of what was their own; they began to admire and praise whatever was foreign and incomprehensible; their spirit damaged and it surrendered."
                </p>
                
                <p className="mb-4">Rizal annotated Morga's work for several reasons:</p>
                
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>To Correct Historical Injustices:</strong> Rizal believed that Spanish historians and friars deliberately distorted the history of the Philippines to justify Spain's colonization. By annotating Morga's book, Rizal aimed to expose these distortions and reveal the truth about the Filipinos' past.</li>
                  <li><strong>To Awaken National Consciousness:</strong> Rizal believed that Filipinos should be proud of their history. By highlighting their cultural and historical achievements before Spanish colonization, Rizal wanted to instill a sense of pride and inspire them to fight for their rights and freedom.</li>
                  <li><strong>To Provide an Accurate Historical Record:</strong> Rizal's annotations sought to provide a factual and balanced account of Philippine history that future generations could rely upon.</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mb-4">Rizal's Discovery and Work on Morga's Book</h3>
                <p className="mb-4">Rizal found a rare copy of Morga's <em>Sucesos de las Islas Filipinas</em> in the British Museum in London during his stay in 1888. He was struck by the fact that Morga, unlike other Spanish chroniclers, did not depict Filipinos as uncivilized savages. Instead, Morga acknowledged the civilization and cultural achievements of the early Filipinos.</p>
                
                <p className="mb-4">Rizal saw in Morga's work a powerful tool to refute the lies spread by Spanish friars and historians, who justified colonization by depicting the natives as inferior and barbaric. He devoted time to annotating Morga's book to provide additional information, corrections, and commentary. He compared Morga's accounts with other historical sources and his own knowledge. His annotations highlighted the rich heritage of pre-colonial Filipinos and corrected the misconceptions perpetuated by colonial narratives.</p>
                
                <h3 className="text-2xl font-semibold mb-4">Publication of Rizal's Annotated Edition</h3>
                <p className="mb-4">Rizal's annotated edition of <em>Sucesos de las Islas Filipinas</em> was published in 1890 in Paris, with the financial assistance of his friends in the Propaganda Movement, including Dr. Ferdinand Blumentritt, who wrote the prologue to the book. The complete title of the annotated edition is <em>Sucesos de las Islas Filipinas por el Doctor Antonio de Morga, Obra Publicada en Mexico en el Año de 1609, Nuevamente Sacada a Luz y Anotada por Jose Rizal</em>.</p>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold mb-4">Morga's Annotations</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Morga's account tended to downplay native literacy by portraying early Filipinos as lacking formal education and written language, implying they were primitive.</li>
                    <li>Morga depicted the Filipino political organization as loosely structured, suggesting that native communities were disorganized and in dire need of the Spanish "civilizing" influence.</li>
                    <li>Morga often depicted the Philippines as having limited external interactions, suggesting that trade was sporadic and largely dependent on Chinese influence.</li>
                    <li>In Morga's narrative, Filipino skills in various crafts and industries were either understated or seen as rudimentary, implying a reliance on external expertise for technological progress.</li>
                    <li>Morga's portrayal often painted pre-colonial society as chaotic or backward, suggesting that disorder prevailed until Spanish intervention.</li>
                    <li>Morga often justified Spanish intervention by suggesting that the Filipinos needed to be "civilized" and improved through European methods, thus implying that Spanish rule was a beneficial transformation.</li>
                    <li>Morga's account perpetuated the idea that Spaniards introduced civilization, progress, and modernity to a supposedly undeveloped society.</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-primary">
                  <h4 className="text-xl font-semibold mb-4">Highlights of Rizal's Annotations</h4>
                  <p className="mb-4">Rizal emphasized the advanced culture of the pre-colonial Filipinos, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Their literacy and use of their own writing system (Baybayin).</li>
                    <li>Their sophisticated political structures and barangay system of governance.</li>
                    <li>Their extensive trade relations with China, Japan, Siam (Thailand), and Borneo.</li>
                    <li>Their skills in shipbuilding, mining, metallurgy, and agriculture.</li>
                  </ul>
                  <p className="mt-4">He highlighted how Filipino society was peaceful and prosperous before Spanish conquest. Rizal criticized the Spaniards for their exploitation, forced labor, abuses, and destruction of native culture. He refuted the claim that Spaniards brought civilization to the Philippines, showing that Filipinos had a thriving civilization before colonization.</p>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Rizal's Arguments on Morga's Sucesos</h3>
                <p className="mb-4">In Dr. Jose Rizal's New Edition of Morga's Sucesos, three main ideas were highlighted:</p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>He emphasized that the people of the Philippines had their own distinct culture even before the arrival of the Spaniards.</li>
                  <li>Rizal argued that the Spanish colonization caused significant harm to the Filipinos, leading to their decimation, demoralization, exploitation, and ruin.</li>
                  <li>He pointed out that the current state of the Philippines was not necessarily superior to its past.</li>
                </ol>
                
                <p className="mt-6">Rizal accurately observed in his historical essay that the Philippines, as a Spanish colony, suffered depopulation, poverty, and stagnation. The people lost their old traditions, including their written works, songs, poems, and laws, as they adopted foreign doctrines that were unfamiliar to them. They gradually degraded themselves, ashamed of their culture and admiring what was foreign and incomprehensible. Rizal believed the Spanish conquest played a role in declining the Philippines' once-rich tradition and culture.</p>
              </div>
            }
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Points</h3>
                <ul className="space-y-3">
                  <li>Morga's <em>Sucesos de las Islas Filipinas</em> (1609) was one of the few Spanish accounts that portrayed early Filipinos relatively fairly.</li>
                  <li>Rizal discovered Morga's book in the British Museum in 1888 and recognized its historical importance.</li>
                  <li>By annotating Morga's work, Rizal challenged the colonial narrative and provided evidence of the advanced pre-colonial Filipino civilization.</li>
                  <li>The annotated edition was published in Paris in 1890 with financial help from Rizal's friends in the Propaganda Movement.</li>
                  <li>Rizal's annotations emphasized the rich cultural heritage of pre-Spanish Philippines and criticized the negative impacts of colonization.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">Historical Impact</h3>
                <p className="mb-4">Rizal's annotated edition of Morga's <em>Sucesos</em> had significant impacts:</p>
                <ul className="space-y-3">
                  <li>It was one of the first scholarly works by a Filipino that challenged European colonial historiography.</li>
                  <li>It provided Filipinos with a source of national pride by revealing their rich pre-colonial heritage.</li>
                  <li>It became an important reference for Filipino nationalists and future historians.</li>
                  <li>It demonstrated Rizal's scholarly abilities and his commitment to historical truth.</li>
                  <li>The work complemented his novels by providing historical evidence for the injustices he portrayed in fiction.</li>
                </ul>
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
            title="The Noli Me Tangere"
            content={
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
                  <img 
                    src="/noli-illustration.jpg" 
                    alt="Illustration from Noli Me Tangere"
                    className="rounded-lg shadow-md w-full md:w-1/3 h-auto mb-4 md:mb-0"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Noli+Me+Tangere";
                    }}
                  />
                  <div>
                    <p className="mb-4">In late 1884, Dr. Jose Rizal began writing a novel in Madrid and completed about half of it. He continued writing in Paris after finishing his studies and completed half of the second half. The remaining portion was written in Germany.</p>
                    <p>During a difficult time in December 1886, penniless and hopeless, Rizal almost burned the manuscript. Fortunately, a telegram from his friend Dr. Maximo Viola, announcing a visit to Berlin, renewed Rizal's hope. Eventually, Viola, who came from a wealthy family helped with the funds needed to publish the Noli Me Tangere.</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Symbolisms in the Noli's Cover</h3>
                <p className="mb-4">The cover of Noli Me Tangere has several symbolisms that represent the novel's themes and messages. Here are some of the symbolisms found in the book cover design:</p>
                
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Cross:</strong> Represents sufferings</li>
                  <li><strong>Pomelo blossoms and laurel leaves:</strong> Represent faith, honor, and fidelity</li>
                  <li><strong>Burning torch:</strong> Symbolizes the awakening of Filipinos to fight for their rights</li>
                  <li><strong>Silhouette of a Filipina:</strong> Believed to be Maria Clara, Crisostomo Ibarra's lover, and symbolizes the plight of Filipino women during the Spanish colonial period</li>
                  <li><strong>Tombstone:</strong> Represents religious faith</li>
                  <li><strong>Chimera:</strong> A fantastic creature with the head of a Spanish-India mestiza and the legs of a Spanish friar, which represents the grotesque portrait of Rizal's patria adorada and evokes Philippine colonial society in general</li>
                  <li><strong>Feminine figure:</strong> Represents all that is best in Philippine life, symbolizing constancy, courage, and religious faith</li>
                  <li><strong>Elevated and shadowed feminine figure:</strong> Represents the feminine figure being placed in shadow despite being elevated, which symbolizes the oppression of women during the Spanish colonial period</li>
                  <li><strong>Religious orders:</strong> Symbolize the religious orders running everything behind the scenes</li>
                  <li><strong>Death, cruelty, and bondage amid the lush tropical vegetation:</strong> Symbolize the suffering and oppression of the Filipinos during the Spanish colonial period</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mb-4">Synopsis of the Noli</h3>
                <p className="mb-4">The novel had 63 chapters and an epilogue. It started with a reception hosted by Capitan Tiago (Santiago de los Santos) at his house on Calle Anilao on the last day of October. The reception was held to honor Crisostomo Ibarra, a young and wealthy Filipino who had recently returned after studying in Europe for seven years. Ibarra, the only son of Don Rafael Ibarra and a friend of Capitan Tiago was engaged to the beautiful Maria Clara, who was believed to be Capitan Tiago's daughter.</p>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                  <h4 className="text-lg font-semibold mb-3">Notable Characters</h4>
                  <ul className="space-y-2">
                    <li><strong>Padre Damaso:</strong> A Franciscan friar who had served as the parish priest for two decades of San Diego, Ibarra's hometown</li>
                    <li><strong>Padre Sibyla:</strong> A young Dominican parish priest from Binondo</li>
                    <li><strong>Senor Guevara:</strong> A kind and elderly lieutenant of the Guardia Civil</li>
                    <li><strong>Don Tiburcio de Espanada:</strong> A deceitful Spanish physician and controlled by his wife</li>
                    <li><strong>Dona Victorina:</strong> The domineering wife of Don Tiburcio</li>
                  </ul>
                </div>
                
                <p className="mb-4">Crisostomo Ibarra arrived and impressed the guests, except for Padre Damaso. He introduced himself to the ladies and discussed his studies and travels during dinner. Padre Damaso, unhappy with his meal, tried to discredit Ibarra. After dinner, Ibarra left for his hotel but was told by Lieutenant Guevara about his father's tragic death. Don Rafael defended a boy and accidentally caused his own demise. He was imprisoned, died unhappily, and was buried in an accused-of-heresy incident. Ibarra, grateful to Lieutenant Guevara, vowed to uncover the truth about his father's death.</p>
                
                <p className="mb-4">The next day, Ibarra met Maria Clara and assured her that he hadn't forgotten her. After their reunion, he visited his father's grave in San Diego. The grave-digger revealed that the previous parish priest ordered Don Rafael's corpse to be thrown into the lake due to bad weather. Angry, Ibarra left the cemetery and encountered Padre Salvi, who claimed innocence since he wasn't the parish priest during the incident. It was Padre Damaso, his predecessor, who was responsible. Convinced of Padre Salvi's innocence, Ibarra left.</p>
                
                <p className="mb-6">Around town, Ibarra also encountered various interesting individuals:</p>
                
                <ul className="list-disc pl-6 space-y-3 mb-6">
                  <li><strong>Tasio the Sage:</strong> An old and wise man with progressive ideas, but people called him "Tasio the Lunatic" simply because they are unable to grasp his ideas</li>
                  <li><strong>A progressive school teacher:</strong> Who expressed concerns about the lack of a proper school building and the discouraging attitude of the parish priest towards modern teaching methods</li>
                  <li><strong>The gobernadorcillo:</strong> Who was spineless and catered to the Spanish parish priest's wishes</li>
                  <li><strong>Don Felipe Lino:</strong> Who led the liberal faction and held the position of teniente mayor</li>
                  <li><strong>Don Melchor:</strong> Who served as the captain of the town police</li>
                  <li><strong>Don Basilio and Don Valentin:</strong> The respected former gobernadorcillos</li>
                </ul>
                
                <p className="mb-4">One tragic tale in the novel involves Sisa. The novel portrays her descent from wealth to poverty after marrying a gambler. Her life turned miserable when she lost her only joys, her two sons. Basilio and Crispin worked as sacristans in San Diego church to support their mother. Sadly, Crispin was falsely accused of theft by the cruel sacristan mayor. He was then tortured to death. Basilio managed to escape but was deeply affected by his brother's cries. Overwhelmed by the loss of her sons, Sisa desperately searched for them everywhere. Ultimately, Sisa succumbed to madness due to her immense sorrow.</p>
                
                <p className="mb-4">Meanwhile, Capitan Tiago, Maria Clara, and Aunt Isabel, who cared for Maria Clara after her mother's passing, arrived in San Diego. Ibarra organized a picnic by the lake, attended by Maria Clara and her friends Sinang, Victoria, Iday, and Neneng. Aunt Isabel, Capitana Tika (Sinang's mother), Andeng (Maria Clara's foster sister), Albino (who loved Sinang), Ibarra, and his friends also joined. A notable boatman named Elias, a strong and quiet peasant youth was present.</p>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                  <h4 className="text-lg font-semibold mb-3">The Song of Maria Clara</h4>
                  <p className="italic">At the request of her friends, Maria Clara played the harp and sang "The Song of Maria Clara" - a poem rendered as a song that celebrates the beauty of one's homeland. It emphasized family love and belonging. The music also touches on the mixed emotions of death in one's native land, where the absence of loved ones is keenly felt.</p>
                </div>
                
                <p className="mb-4">While having a pleasant picnic time, an incident occurred. A crocodile happened on the group's picnic area. Elias trapped and fought the crocodile bravely, but he was unable to overpower it. Ibarra jumped in, killed the crocodile, and rescued Elias.</p>

                {/* Continuing with more content about the plot */}
                <p className="mb-4">After the incident, the group joined Padre Salvi, Capitan Basilio (former gobernadorcillo and Sinang's father), the alferez (lieutenant of the Guardia Civil), and the town officials for lunch. During the meal, Maria Clara and her friends played the "Wheel of Chance." However, Padre Salvi destroyed the fortune-telling book, saying it was sinful. Later, soldiers from the Guardia Civil arrived looking for Elias. He was accused of assaulting Padre Damaso and the alferez. Fortunately, Elias had already left.</p>
                
                <p className="mb-4">Meanwhile, Ibarra received a telegram approving his donation of a schoolhouse for the children of San Diego. The next day, Ibarra consulted Tasio about the schoolhouse project. Tasio's writings were in hieroglyphics, which he explained were meant for future generations to recognize that not everyone ignored history. Tasio was pessimistic about the schoolhouse project. He insisted that Ibarra's plans to build a school would only be scorned unless he gained the church's and influential leaders' approval. Nevertheless, Ibarra went on with the project.</p>
                
                <p className="mb-4">On the other hand, San Diego was busy preparing for its annual fiesta honoring San Diego de Alcala. Visitors brought music, fireworks, feasting, and traditional dances. Five brass bands, including the famous Pagsanjan Band, owned by Miguel Guevara, and three orchestras provided lively tunes for the festivities.</p>
              
                <p className="mb-4">During the fiesta morning, a high Mass was held in the church, led by Padre Salvi. However, it was Padre Damaso who delivered a sermon. He lengthily lectured on the supposed negative influence of educated individuals who, in his view, spread harmful ideas among the people.</p>
                
                <p className="mb-4">As Padre Salvi continued the mass, Elias discreetly approached Ibarra, who was praying beside Maria Clara. He cautioned Ibarra to be careful during the upcoming ceremony to lay the schoolhouse's cornerstone. Elias revealed that there was a plot to assassinate Ibarra.</p>
                
                <div className="bg-white p-6 rounded-lg border border-primary mb-6">
                  <p className="mb-0">The climactic events unfold as Elias saves Ibarra from an assassination attempt, but Ibarra later confronts Padre Damaso who insults his father. This leads to Ibarra's excommunication and broken engagement with Maria Clara. Through a series of tragic events and revelations, including Maria Clara learning that Padre Damaso is her real father, the novel concludes with Ibarra fleeing after a failed revolt, Elias sacrificing himself to save Ibarra, and Maria Clara entering a convent, forever separated from her true love.</p>
                </div>
              </div>
            }
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Themes of Noli Me Tangere</h3>
                <ul className="space-y-3">
                  <li><strong>Social Injustice:</strong> Through characters like Sisa, Rizal illustrated the suffering of the poor and marginalized.</li>
                  <li><strong>Abuse of Power:</strong> The novel depicts how the Spanish friars and officials abused their authority.</li>
                  <li><strong>Colonial Oppression:</strong> Rizal portrayed the negative impacts of Spanish colonization on Filipino society and culture.</li>
                  <li><strong>Education and Reform:</strong> Ibarra's character represents Rizal's belief in education as a path to national progress.</li>
                  <li><strong>Love and Patriotism:</strong> The love story of Ibarra and Maria Clara is intertwined with their love for their country.</li>
                  <li><strong>Hypocrisy:</strong> Many characters in the novel, especially the friars, demonstrate hypocrisy in their actions versus their preaching.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">Historical Impact of Noli Me Tangere</h3>
                <ul className="space-y-3">
                  <li>The novel awakened Filipino national consciousness and became a catalyst for the Philippine Revolution.</li>
                  <li>It was banned by Spanish authorities due to its anti-colonial and anti-clerical content.</li>
                  <li>Reading the novel was considered a crime during the Spanish colonial period.</li>
                  <li>Today, the study of Noli Me Tangere is mandated by Republic Act 1425 (Rizal Law) in all Philippine educational institutions.</li>
                  <li>The novel has been translated into numerous languages and is considered one of the most important works of Asian literature.</li>
                </ul>
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
            title="El Filibusterismo & Rizal's Arrest and Trial"
            content={
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-6">
                  <img 
                    src="/rizal-trial.jpg" 
                    alt="Illustration of Rizal's Trial"
                    className="rounded-lg shadow-md w-full md:w-1/3 h-auto mb-4 md:mb-0"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Rizal's+Trial";
                    }}
                  />
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">El Filibusterismo: The Darker Sequel</h3>
                    <p className="mb-4">El Filibusterismo (The Subversion) is the second novel written by José Rizal, published in 1891. It is a sequel to his first novel, Noli Me Tangere, continuing the story of the characters 13 years later. While Noli Me Tangere exposed the corruption and abuses of the Spanish colonial government and clergy, El Filibusterismo explored themes of revenge, revolution, and reform.</p>
                    <p>The novel follows the return of Crisostomo Ibarra, now disguised as the wealthy jeweler Simoun, who plans a violent revolution against the Spanish colonial authorities. Unlike the idealistic Ibarra of the first novel, Simoun is bitter and vengeful, seeking to overthrow the government through violent means.</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                  <h4 className="text-xl font-semibold mb-4">About El Filibusterismo</h4>
                  <p className="mb-4">Rizal began writing El Filibusterismo in October 1887 in Calamba, Laguna, and completed it three years later on March 29, 1891, in Biarritz. The novel was published on September 18, 1891, in Ghent, Belgium, with the financial assistance of his friend Valentin Ventura when Rizal ran out of funds to complete its printing.</p>
                  <p className="mb-4">The title "El Filibusterismo" has undergone multiple changes in meaning. According to Blumentritt, "filibusterismo" refers to the concept of the colony separating from the mother country, and "filibusteros" are individuals who desire to achieve this idea.</p>
                  <p className="mb-4">Unlike the ornate cover of Noli Me Tangere, El Filibusterismo's cover is notably plain. This simplicity is symbolic in itself, conveying a fresh start for the Philippines and Filipinos without traces of symbols from the events in Noli Me Tangere. It signifies the beginning of a new chapter in the country's history, free from the past and ready to move toward a brighter future.</p>
                  <p>The novel was dedicated to the three martyred priests: Mariano Gomez, José Burgos, and Jacinto Zamora, who were executed in 1872 after being falsely accused of treason.</p>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Synopsis of El Filibusterismo</h3>
                
                <div className="bg-white p-6 rounded-lg border border-primary mb-6">
                  <h4 className="text-xl font-semibold mb-4">Chapter 1: On the Upper Deck</h4>
                  <p>The novel begins aboard the steamer Tabo, traveling up the Pasig River to Laguna de Bay. Among the passengers is a mysterious jeweler named Simoun, who is actually Crisostomo Ibarra in disguise, returned after thirteen years. Also aboard are other characters including Isagani (a young idealistic student), Basilio (now a medical student), and several Spanish officials. Simoun has become an influential figure, a friend and adviser to the Captain-General, using this position to corrupt the government system and sow dissension among the people, all in preparation for a planned revolution.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-primary mb-6">
                  <h4 className="text-xl font-semibold mb-4">Chapter 2: At the Governor's</h4>
                  <p>Simoun visits the governor general at his residence and provides jewelry for sale. He manipulates events and advises the Spanish official, all while secretly planning to use his influence for his revolutionary agenda. His wealth and mysterious past have made him a figure of both respect and fear.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-primary mb-6">
                  <h4 className="text-xl font-semibold mb-4">Chapter 3: The Legend of Lake Bai</h4>
                  <p>During a reception, the guests discuss various legends, including the origins of the lake that forms the backdrop of many scenes in the novel. The chapter highlights Filipino mythology and introduces social commentary through the conversations of the characters.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-primary mb-6">
                  <h4 className="text-xl font-semibold mb-4">Chapter 4: Christmas Eve</h4>
                  <p>Basilio, now a medical student, returns to the forest where years ago his mother Sisa died and where Elias helped him bury her. He visits the grave and reminisces. Suddenly, he encounters a badly wounded man who turns out to be Simoun. Learning that Basilio is the son of Sisa, Simoun reveals his true identity as Ibarra and describes his return and plans for revolution.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-primary mb-6">
                  <h4 className="text-xl font-semibold mb-4">Chapter 5: The Academic Year Opens</h4>
                  <p>The chapter focuses on the university students, particularly Isagani, Basilio, and their companions who dream of establishing an academy to teach Spanish to Filipinos. They face opposition from conservatives who fear that educating the natives will lead to rebellion. The students' idealism and the opposition they face form a central conflict.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-primary mb-6">
                  <h4 className="text-xl font-semibold mb-4">Chapter 6: Simoun</h4>
                  <p>Simoun meets with Basilio again, attempting to recruit him to his revolutionary cause by exploiting his resentment over his mother's fate and the injustices he has experienced. Simoun elaborates on his grand plan to trigger a revolution that will overthrow the Spanish regime.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-primary mb-6">
                  <h4 className="text-xl font-semibold mb-4">Chapter 7-13: The Student Movement</h4>
                  <p>These chapters detail the students' efforts to establish a Spanish academy against significant opposition from the friars and colonial officials. The narrative introduces several student characters including Makaraig, Pelaez, and Sandoval, each representing different perspectives and social classes. Their interactions with the authorities reveal the complex social dynamics of colonial Manila.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-primary mb-6">
                  <h4 className="text-xl font-semibold mb-4">Chapter 14-20: Plots and Counterplots</h4>
                  <p>As the narrative progresses, Simoun's machinations become more elaborate. He manipulates various factions, stirring up conflicts between the civil government and the religious orders. Meanwhile, the love story between Isagani and Paulita Gomez develops, complicated by the competition from Juanito Pelaez. These chapters also explore the corrupt judicial system through the character of Don Custodio and the oppressive education system that stifles Filipino students.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-primary mb-6">
                  <h4 className="text-xl font-semibold mb-4">Chapter 21-29: The Failed Revolution</h4>
                  <p>Simoun's plans for revolution take concrete form as he organizes a conspiracy involving explosives disguised as a lamp, which will be detonated during a wedding celebration attended by Manila's elite. Basilio, initially recruited by Simoun, is arrested due to his association with the student movement, preventing him from stopping the plot. Isagani, learning of the planned bombing at the last moment, throws the lamp into the river, thwarting Simoun's plan.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-primary mb-6">
                  <h4 className="text-xl font-semibold mb-4">Chapter 30-39: Aftermath and Redemption</h4>
                  <p>With his revolutionary plot in shambles, a wounded Simoun flees to the house of Padre Florentino, a Filipino priest. There, as he lies dying from poison he has taken, Simoun confesses his true identity and the motivation behind his vengeful actions. Padre Florentino provides the novel's moral center, delivering a powerful speech about the futility of violence and revenge, and the need for education, hard work, and clear vision to achieve true freedom. The novel ends with Padre Florentino throwing Simoun's treasure chest of jewelry into the sea, symbolically rejecting ill-gotten wealth as the foundation for a new society.</p>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Rizal's Arrest and Trial</h3>
                <p className="mb-4">In 1892, after returning to the Philippines from Hong Kong, Rizal was arrested and exiled to Dapitan in Mindanao. Four years later, in 1896, while the Philippine Revolution was beginning, Rizal requested to serve as a doctor for the Spanish army in Cuba. While en route to Spain, he was arrested and brought back to Manila.</p>
                
                <p className="mb-4">Rizal was charged with rebellion, sedition, and conspiracy for his alleged involvement with the revolutionary Katipunan movement. The primary evidence against him was his association with the revolutionary group and his writings, particularly Noli Me Tangere and El Filibusterismo, which were considered seditious.</p>
                
                <p className="mb-4">The trial was conducted by a military court and was largely considered a show trial, with the outcome predetermined. Despite a spirited defense by his counsel, Lieutenant Luis Taviel de Andrade (brother of his former bodyguard), Rizal was found guilty and sentenced to death by firing squad.</p>
                
                <div className="bg-white p-6 rounded-lg border border-primary">
                  <h4 className="text-xl font-semibold mb-4">Rizal's Final Days</h4>
                  <p className="mb-4">In his final hours, Rizal wrote several important documents:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Mi Último Adiós (My Last Farewell):</strong> A poignant poem expressing his love for his country and his acceptance of death</li>
                    <li><strong>Retraction document:</strong> The authenticity of this document, in which Rizal allegedly retracted his anti-Catholic writings, remains contested by historians</li>
                    <li><strong>Letter to his family:</strong> A moving farewell expressing his love and gratitude</li>
                  </ul>
                  <p className="mt-4">On December 30, 1896, at 7:03 AM, Jose Rizal was executed by firing squad at Bagumbayan (now Luneta Park). His last words were reportedly "Consummatum est" (It is finished). His execution made him a martyr of the Philippine Revolution and cemented his status as a national hero.</p>
                </div>
              </div>
            }
            keyPoints={
              <div>
                <h3 className="text-xl font-bold mb-4">Key Points</h3>
                <ul className="space-y-3">
                  <li><strong>El Filibusterismo:</strong> Written while Rizal was in Europe, published in 1891 in Ghent, Belgium with help from Valentin Ventura.</li>
                  <li><strong>Darker Themes:</strong> Unlike the relatively hopeful Noli Me Tangere, El Filibusterismo explored themes of vengeance, revolution, and the corrupting influence of power.</li>
                  <li><strong>Dedication:</strong> Rizal dedicated the novel to the memory of the three martyred priests: Gomez, Burgos, and Zamora.</li>
                  <li><strong>Real-Life Inspiration:</strong> Many elements of the novel were inspired by real events and people that Rizal encountered in the Philippines and Europe.</li>
                  <li><strong>Trial:</strong> Rizal's trial was largely a formality, with the Spanish authorities determined to make an example of him to quell the growing revolutionary sentiment.</li>
                  <li><strong>Main Characters:</strong> Simoun (Ibarra in disguise), Basilio, Isagani, Padre Florentino, and various students represent different approaches to social change.</li>
                  <li><strong>Central Message:</strong> The novel questions whether violent revolution is the appropriate means to achieve freedom, ultimately suggesting that education, virtue, and selfless sacrifice are necessary foundations for national liberation.</li>
                </ul>
              </div>
            }
            additionalInfo={
              <div>
                <h3 className="text-xl font-bold mb-4">The Legacy of Rizal's Writings</h3>
                <p className="mb-4">Rizal's writings continue to influence Philippine society and politics today:</p>
                <ul className="space-y-3">
                  <li>They are required reading in Filipino schools under Republic Act 1425 (Rizal Law).</li>
                  <li>They have been adapted into various media, including films, television series, and theatrical productions.</li>
                  <li>They have influenced generations of Filipino writers, intellectuals, and political leaders.</li>
                  <li>They serve as a reminder of the struggles for independence and the importance of national identity.</li>
                  <li>They continue to be relevant in discussions about social justice, governance, and Philippine-foreign relations.</li>
                  <li>The contrast between Noli Me Tangere and El Filibusterismo offers an ongoing debate about reform versus revolution that remains relevant in political discourse.</li>
                  <li>El Filibusterismo in particular poses important questions about the ethics of violent resistance and the responsibilities of the educated class.</li>
                </ul>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Chapter4;
