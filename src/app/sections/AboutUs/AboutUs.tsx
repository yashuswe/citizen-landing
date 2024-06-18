import React from "react";
import Image from "next/image";
import Title from "@/app/components/Title";
import Arpan from "../../../../public/assets/arpan-sri.jpg";
import Bala from "../../../../public/assets/bal.jpg";
import Vivek from "../../../../public/assets/vivek.jpg";

const AboutUs = () => {
  return (
    <div className="px-4">
      <Title id="about" text="About Us" />
      <p className="mt-6 text-lg leading-8 text-gray-800 sm:text-left dark:text-gray-200 mb-10 px-10 italic">
        Welcome to Citizenwave Consulting, where we are dedicated to
        revolutionizing the political consulting landscape in India. We provide
        end-to-end political consulting services, including campaign strategy
        and management, digital campaigns, messaging and communication,
        booth-level management, and war room operations. Our team comprises
        political experts with extensive experience, ensuring that every
        campaign we handle is executed with precision and effectiveness. Our
        mission is to empower political candidates with the strategies,
        insights, and tools they need to succeed in elections, enhancing
        democratic processes by ensuring every voice is heard and every vote
        counts.
        <br />
        Citizenwave Consulting has successfully managed campaigns for multiple
        Lok Sabha candidates across India and Vidhan Sabha candidates in Odisha.
        A notable achievement includes the comprehensive management of Pravati
        Parida&apos;s campaign in the Nimapara constituency, which played a crucial
        role in her election as Deputy Chief Minister of Odisha. We combine
        traditional political know-how with modern digital techniques to deliver
        impactful results. As we continue to expand our reach and influence, we
        invite you to join us in shaping the future of Indian politics. Contact
        us today to learn more about how we can help you achieve your political
        ambitions. Together, we can create a wave of change.
      </p>
      <div className="p-8">
        <Title id="founders" text="Founders" />
      </div>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="mt-12 md:mt-0">
              <Image
                src={Bala}
                alt="Priyadarsi Bal"
                width={600}
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Priyadarsi Bal
              </h2>
              <h3 className="text-lg font-extrabold text-gray-900 sm:text-xl">
                Founder & CEO
              </h3>
              <p className="mt-4 text-gray-600 text-lg">
                Mr. Priyadarsi Bal is a seasoned stock market expert and has
                headed the country operations of Pace Stock Broking. He helmed
                the operations for marketing of the company and is widely
                regarded among traders across India. Mr. Bal has a great
                understanding of operations, finances, and crisis management. He
                is the founder and CEO of Citizenwave Consulting.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="py-6 w-full h-5"></div>
      <section className="bg-gray-100 mb-10">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Arpan Srivastava
              </h2>
              <h3 className="text-lg font-extrabold text-gray-900 sm:text-xl">
                Founder & Director
              </h3>
              <p className="mt-4 text-gray-600 text-lg">
                Arpan Srivastava is a co-founder and Director at Citizenwave. He
                is also the CEO of DigitalWins, one of India&apos;s leading Martech
                companies with clients including Indian Terrain, FabIndia, and
                Aditya Birla Group. In his prior role at Cadentic Consulting
                Inc. in the US, he spearheaded sales, securing partnerships with
                notable clients like IBM, Shell, and Verizon. During his college
                days, Arpan founded Praan Industries, specializing in reputation
                management for clients such as Vedanta and Vodafone.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <Image
                src={Arpan}
                alt="Arpan Srivastava"
                height={450}
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="mt-12 md:mt-0">
              <Image
                src={Vivek}
                alt="Vivek Singh"
                className="object-cover rounded-lg shadow-md"
                width={600}
              />
            </div>
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Vivek Singh
              </h2>
              <h3 className="text-lg font-extrabold text-gray-900 sm:text-xl">
                CEO
              </h3>
              <p className="mt-4 text-gray-600 text-lg">
                Vivek Singh is a Political Anthropologist whose work focuses on
                contextualizing the force and consequences of governance through
                Time, Space, and Bodies. His research and writing are rooted in
                international politics and cross the fields of anthropology,
                indigenous studies, Civilization, Religion, Race, and Gender
                studies, as well as Politics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
