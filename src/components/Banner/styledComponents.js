import styled from 'styled-components/macro'

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  height: 45vh;
`

export const BannerResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 80%;
  height: 100%;
`

export const BannerTitle = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: 500;
  margin: 0px;
  margin-bottom: 10px;
`

export const BannerProfession = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  margin: 0px;
  margin-bottom: 30px;
`
