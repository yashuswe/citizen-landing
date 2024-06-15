import React from "react";
import Arpan from "../../../../public/assets/arpan-sri.jpg";
import Bala from "../../../../public/assets/bal.jpg";
import Image from "next/image";
import Title from "@/app/components/Title";

const AboutUs = () => {
  return (
    <div className="px-4">
      <Title id="about" text="About Us" />
      <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center dark:text-gray-200 mb-10 px-10 italic">
        Citizenwave Consulting is a political consulting and campaign management
        company. The firm&apos;s expertise in digital campaigning, booth
        management, reputation management, and surveys have been a game-changer
        in the fiercely competitive political landscape. Founded by Priyadarsi
        Bal, a seasoned stock market expert, and Arpan Srivastava, a prominent
        digital entrepreneur, Citizen Wave leverages a unique blend of financial
        insight and digital innovation to craft winning strategies. Their
        leadership has been pivotal in the firm&apos;s ability to offer tailored
        consultancy services that meet the specific needs of each candidate.
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
                alt="About Us Image"
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
                is also the CEO of DigitalWins, one of India&apos;s leading
                Martech companies with clients including Indian Terrain,
                FabIndia, and Aditya Birla Group. In his prior role at Cadentic
                Consulting Inc. in the US, he spearheaded sales, securing
                partnerships with notable clients like IBM, Shell, and Verizon.
                During his college days, Arpan founded Praan Industries,
                specializing in reputation management for clients such as
                Vedanta and Vodafone.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <Image
                src={Arpan}
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
