import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../src/components/about/About'
import ServicesContent from '../src/components/servicesContent/servicesContent';
import OurProject from '../src/components/ourProject/ourProject';
import SomeFacts from '../src/components/someFacts/someFacts';
import OurTeam from '../src/components/ourTeam/ourTeam';
import Mark from '../src/components/marks/marks';
import HappyClients from '../src/components/happyClients/happyClients';
import Price from '../src/components/price/price';
import Premium from '../src/components/premium/premium';
import SocialMedia from '../src/components/socialMedia/socialMedia';

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
    <HappyClients></HappyClients>
    <Mark></Mark>
    <Price></Price>
    <Premium></Premium>
    <SomeFacts></SomeFacts>
    <SocialMedia></SocialMedia>
   </>
  )
}

export default Home;

