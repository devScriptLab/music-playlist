import styled from 'styled-components/macro'

import {AiOutlineDelete} from 'react-icons/ai'

export const TrackListItem = styled.li`
  list-style-type: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const ThumbnailTitleGenreContainer = styled.div`
  display: flex;
`

export const Thumbnail = styled.img`
  width: 150px;
  height: 100px;
  border-radius: 12px;
`

export const TitleAndGenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
`

export const Title = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  margin: 0px;
  margin-top: 12px;
`

export const Genre = styled(Title)`
  color: #3b82f6;
  font-size: 16px;
  font-weight: 400;
`

export const DurationDeleteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`

export const Duration = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
`

export const DeleteIconButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0px;
`

export const DeleteIcon = styled(AiOutlineDelete)`
  color: #ffffff;
  width: 18px;
  height: 18px;
`
