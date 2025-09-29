import Banner from "../ui/Banner";
import Carousel from "../ui/Carousel";
import { fakeMovies } from "../fakeData";

export default function Home() {
  return (
    <div>
      <Banner />

      <Carousel title="Films populaires" items={fakeMovies} />
      <Carousel title="Films mieux notés" items={fakeMovies} />
      <Carousel title="Films à venir" items={fakeMovies} />
    </div>
  );
}
