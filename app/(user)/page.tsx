import Banner from "@/components/Banner";
import Container from "@/components/Container";
import Credibility from "@/components/Credibility";
import Products from "@/components/Products";
import LoadPage from "./loading";

export default function Home() {
  return (
    <Container className="py-10">
      <Banner/>
      <Credibility/>
      <Products/>
    </Container>
    
  );
}
