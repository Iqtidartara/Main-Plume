import Collections from "@/components/Collections";
import Demo from "@/components/Demo";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
   <main>
    <div style={
      {
        background :'url("/herobg.png")',
        backgroundPosition : "center",
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain',
      }
    }>
   <Navbar />
   <HomeSection />
   </div>
  <Demo />
  <Collections />
   </main>
  )
}
