import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/Card';
import Navbar from '@/components/Navbar';
import ProfilePicture from '@/components/ProfilePicture';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';

export const revalidate = 0;

async function getEducationItems(){
  const res = await fetch(`${process.env.BASE_URL}/api/education`);
  const items = await res.json();
  return items;
}

async function getSkills(){
  const res = await fetch(`${process.env.BASE_URL}/api/skills`);
  const skills = await res.json();
  return skills;
}

export default async function Home() {

  const items = await getEducationItems();
  const skills = await getSkills();

  return (
    <div className='mx-6 flex items-center flex-col'>
      <Navbar/>
      <main className="flex min-h-screen gap-4 items-center flex-col pt-10 md:pt-20 pb-8">
        <div className='flex flex-col gap-7 animate-[fade-in-up_1s_ease-in-out_1] mb-10'>
          <ProfilePicture/>
          <div className='flex justify-center gap-2'>
            <div className='p-2 rounded-full bg-gradient-to-t from-slate-900 to-sky-950/40 backdrop-blur-md'>
              <Link href='https://github.com/Valo21'>
                <Image className='rounded-full' alt='Github logo' width={25} height={25} src='/github-mark-white.png'/>
              </Link>
            </div>
            <div className='p-2 rounded-full bg-gradient-to-t from-slate-900 to-sky-950/40 backdrop-blur-md'>
              <Link href='https://www.linkedin.com/in/marcelo-valentin-faciano-54a028176/'>
                <Image className='rounded-full' alt='Linkedin logo' width={25} height={25} src='/linkedin.png'/>
              </Link>
            </div>
          </div>
          <h1 className='text-center font-bold text-xl'>Valentin Faciano</h1>
        </div>
        <Card>
          <h1 className='text-center text-lg font-semibold mb-2'>About me</h1>
          <p className='text-justify'>
            Hi! My name is Valentin, i'm mainly a ReactJS developer.
            My story with coding started approximately in 2017 when i discovered the <Link href='https://www.lua.org/'>Lua</Link> language in the multiplayer game <Link href='https://multitheftauto.com/'>MTA San Andreas</Link>.
            I was immediately fascinated by all the things that i could do with only writing some lines of code so i spend some time self learning lua till in 2020-2021 i met Javascript.
            I started learning from <Link href='https://www.codecademy.com/profiles/valentnFaciano2901023803'>Codecademy</Link> and then i continued self learning from internet and the documentation.
            I'm also a med studed, in 2021 i started my degree in combination with a degree in Computer Engineering but i only spend a year in engineering so i left it and kept my coding life as a hobby.
            In 2023 i did the Codo a Codo 4.0 course in Full Stack Development given by the goverment of Buenos Aires, Argentina, where i reaffirmed mi knowledge in JS, HTML, CSS and MYSQL.
            I've been learning some things of other languages like C, C++, C# and Phyton but the one that i really appreciate is Javascript.
          </p>  
        </Card>
        <SkillsSection skills={skills}/>
        <EducationSection items={items}/>
      </main>
    </div>
  )
}