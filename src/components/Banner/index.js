import {
  BannerContainer,
  BannerResponsiveContainer,
  BannerTitle,
  BannerProfession,
} from './styledComponents'

const Banner = () => (
  <BannerContainer>
    <BannerResponsiveContainer>
      <BannerTitle>Ed Sheeran</BannerTitle>
      <BannerProfession>Singer</BannerProfession>
    </BannerResponsiveContainer>
  </BannerContainer>
)

export default Banner
