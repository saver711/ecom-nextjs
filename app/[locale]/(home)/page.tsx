import { HomeCarousel } from "@/components/shared/home/home-carousel"
import data from "@/lib/ecom/consts/data.const"

export default function Home() {
  return <HomeCarousel items={data.carousels} />
}
