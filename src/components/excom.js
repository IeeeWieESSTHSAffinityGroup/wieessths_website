'use client';
import './exCome.css';
import { HoverIcon } from '@/components/hovericon';
import { useState } from "react";

export default function ExCom() {
  
      const [hoveredIndex, setHoveredIndex] = useState(null); // track hovered card

  return (
    <div className="mx-auto flex w-full flex-1 flex-col items-center md:justify-center  md:px-10 lg:px-12
   p-0  content-center  gap-4 lg:max-xl:px-0 sm:max-md:px-6  md:max-lg:px-8      "
    >
      <div className="flex flex-col content-center items-center gap-2 max-sm:p-0 sm:p-0 lg:px-14">
          <h2 className="fontheader  font-color lg:mb-7 text-right lg:text-6xl md:text-4xl sm:text-5xl   max-sm:text-2xl max-sm:font-bold">Team</h2>
       
        </div>
      <div className="grid w-full max-lg:grid-cols-4 max-md:grid-cols-1 max-sm:grid-cols-6 max-sm:gap-4 sm:grid-cols-8 sm:gap-4 md:max-lg:grid-cols-4 md:max-lg:gap-2 lg:grid-cols-4 lg:gap-10
      max-md:bg-blue
       gap-2
      ">
    {teamData
  ?.filter((s) => !!s?.active)
  ?.map((speaker, index) => (
 <div className='cardex items-left flex justify-start rounded-2xl md:col-span-2 max-md:col-span-4 lg:col-span-1 max-lg:col-span-1 sm:col-span-4 max-sm:col-span-6 md:max-lg:h-80 max-sm:h-40 w-full text-white lg:max-xl:h-80 lg:h-100 gap-8 max-sm:gap-4 ' key={speaker.name} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
     <div className="rounded-xl border-2 border-none w-full h-full flex flex-row justify-start max-md:items-center max-md:bg-right lg:bg-bottom max-lg:bg-right "  style={{
                backgroundImage: `url(${speaker.imageSmall.url})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              
                aspectRatio:"2"
              }} >
      
        <div className="text-left max-sm:p-4 sm:gap-4 sm:p-4">
          <div className="fontheader text-wrap md:text-xl">{speaker.name}</div>
          <div className="text-sm">
            {speaker.title}
          </div>

          <div
            className={`x transition-all duration-500 
              ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
          >
            <div className="relative flex md:flex-col lg:flex-col max-md:flex-col sm:flex-row max-sm:flex-row items-start lg:justify-center gap-2">
              <HoverIcon
                objectfit="lg:p-2 md:max-lg:p-2 max-sm:p-2 sm:p-2"
                className="flex cursor-pointer items-center justify-center   hover:bg-[#CA608A] max-sm:p-5 sm:p-5 md:max-lg:p-5 lg:p-5 border-1 border-amber-50 rounded-lg"
                href="https://www.facebook.com/profile.php?id=100068599066993"
                src="Facebook_hover.svg"
                hoverSrc="Facebook_hover.svg"
                alt="Facebook"
              />
              <HoverIcon
                objectfit="lg:p-2 md:max-lg:p-2 max-sm:p-2 sm:p-2"
                className="flex cursor-pointer items-center justify-center   hover:bg-[#CA608A]  max-sm:p-5 sm:p-5 md:max-lg:p-5 lg:p-5 border-1 border-amber-50 rounded-lg"
                href={speaker.company.email}
                src="email.svg"
                hoverSrc="email.svg"
                alt="Instagram"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
}

      </div>
    </div>
  );
}

export const teamData = [
  {
    active: true,
    name: 'Salma Ghedamsi',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Chair',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    email:'salmaghedamsi19@ieee.org',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: 'excom/chair.png',
    },
  },
  // {
  //   active: true,
  //   name: 'Rahma Mghayeth',
  //   bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
  //   title: 'Vice Chair',
  //   talk: {
  //     title: 'Keynote',
  //     description:
  //       "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
  //     youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
  //   },
  //   slug: 'rauchg',
  //   twitterUsername: 'rauchg',
  //   company: {
  //     name: 'Vercel',
  //   },
  //   image: {
  //     url: 'https://res.cloudinary.com/dytybjqwb/image/upload/v1741222794/yomna_vhkxfs.png',
  //   },
  //   imageSmall: {
  //     url: 'excom/vice.png',
  //   },
  // },
  {
    active: true,
    name: 'Fatma Ben Jdida',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'General Secretary',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
      email:'salmaghedamsi19@ieee.org',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://res.cloudinary.com/dytybjqwb/image/upload/v1741222794/yassmine_jszfdz.png',
    },
    imageSmall: {
      url: 'excom/sg.png',
    },
  },
  {
    active: true,
    name: 'Mohamed Guizani',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Treasurer',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
      email:'guizanimohamed@ieee.org',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://res.cloudinary.com/dytybjqwb/image/upload/v1741222796/arije_fi9u5i.png',
    },
    imageSmall: {
      url: 'excom/treso.png',
    },
  },
  {
    active: true,
    name: 'Ghassen Mekki',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Webmaster',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
      email:'ghassen.mekki@ieee.org',

    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: 'excom/webmaster.png',
    },
  },
];
export const teamData2024 = [
  {
    active: true,
    name: 'Nour Jeday',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Chair',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: '/assets/people/Nour Jeday-Chair.jpg',
    },
  },
  {
    active: true,
    name: 'Ameni Chokri',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Vice Chair',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: '/assets/people/Ameni Chokri Vice-Chair.png',
    },
  },
  {
    active: true,
    name: 'Farah Fassi',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'General Secretary',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: '/assets/people/Farah Fassi-SG.jpg',
    },
  },
  {
    active: true,
    name: 'Treasurer',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Ons Lassoued',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: '/assets/people/OnsLassoued-Treasurer .jpeg',
    },
  },
  {
    active: true,
    name: 'Hichem Fantar',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Webmaster',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: '/assets/people/Hichem Fantar - Webmaster.jpeg',
    },
  },
  {
    active: true,
    name: 'Arije Ben Abdel Hamid',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Human Resources Chief',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: '/assets/people/Arije Ben bdel Hamid -HR Chief .jpeg',
    },
  },

  {
    active: true,
    name: 'Med Amine Achour',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Media Chief',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: '/assets/people/Med Amine Achour - Media Chief.jpg',
    },
  },
];

export const teamData2023 = [
  {
    active: true,
    name: 'Rima Fathallah',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Chair',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: 'https://essths.ieee.tn/excoms/chair.jpg',
    },
  },
  {
    active: true,
    name: 'Ahmed Hmila',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Vice Chair',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: '/assets/OC pictures/ahmed_hmila.jpg',
    },
  },
  {
    active: true,
    name: 'Fedi Nabli',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Webmaster',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: 'https://essths.ieee.tn/excoms/webmaster.jpg',
    },
  },
  {
    active: true,
    name: 'Ahmed Hmila',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Human Resources Chief',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: '/assets/OC pictures/ahmed_hmila.jpg',
    },
  },

  {
    active: true,
    name: 'Yasmine Douik',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'General Secretary',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: 'https://essths.ieee.tn/excoms/sg.jpg',
    },
  },
  {
    active: true,
    name: 'Treasurer',
    bio: 'Lydia Hallie is a Staff Developer Advocate who primarily works with JavaScript, React, Node, GraphQL, and serverless technologies. She also spends her time mentoring and doing in-person training sessions.',
    title: 'Aymen Lassouad',
    talk: {
      title: 'Keynote',
      description:
        "TSYP 11 Conf kicks off with Vercel CEO Guillermo Rauch (@rauchg) revealing the latest announcements, features, and improvements. He's joined by Lee, Lydia, and Delba to hear the latest Next.js updates.",
      youtube: 'https://www.youtube.com/watch?v=NiknNI_0J48',
    },
    slug: 'rauchg',
    twitterUsername: 'rauchg',
    company: {
      name: 'Vercel',
    },
    image: {
      url: 'https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png',
    },
    imageSmall: {
      url: 'https://essths.ieee.tn/excoms/treasurer.jpg',
    },
  },
];
