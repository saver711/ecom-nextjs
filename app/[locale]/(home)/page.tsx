import { HomeCarousel } from "@/components/shared/home/home-carousel"
import { CAROUSELS } from "@/lib/ecom/consts/carousels.const"

export default function Home() {
  return <HomeCarousel items={CAROUSELS} />
}
