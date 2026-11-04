import styled from 'styled-components/macro'

import {FiSearch} from 'react-icons/fi'

export const Container = styled.div`
  height: 100vh;
`

export const PlaylistContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #13274d;
  height: 55vh;
  overflow-y: auto;
`

export const ResponsivePlaylistContainer = styled.div`
  width: 90%;
`

export const SongsPlaylistAndSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SongsPlaylistHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 400;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  padding-left: 8px;
  padding-right: 8px;
`

export const InputSearch = styled.input`
  background: transparent;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  border: none;
  outline: none;
  height: 35px;
  width: 210px;
`

export const SearchIcon = styled(FiSearch)`
  color: #ffffff;
  width: 20px;
  height: 20px;
  margin-left: 10px;
`

export const SongsList = styled.ul`
  padding-left: 0px;
`

export const SongNotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`

export const SongNotFound = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 700;
`
