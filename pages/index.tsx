import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../src/components/about/About'
import ServicesContent from '../src/components/servicesContent/servicesContent';
import OurProject from '../src/components/ourProject/ourProject';
import SomeFacts from '../src/components/someFacts/someFacts';
import OurTeam from '../src/components/ourTeam/ourTeam';
import Mark from '../src/components/marks/marks';

const Home: NextPage = () => {

  return (
   <>
    <Head>
    <title>
      mauriciadas
    </title>
    </Head>
    <About></About>
    <ServicesContent></ServicesContent>
    <OurProject></OurProject>
    <OurTeam></OurTeam>
    <Mark></Mark>
    <SomeFacts></SomeFacts>

   </>
  )
}

export default Home;

