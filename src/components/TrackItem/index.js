import {
  TrackListItem,
  ThumbnailTitleGenreContainer,
  Thumbnail,
  TitleAndGenreContainer,
  Title,
  Genre,
  DurationDeleteContainer,
  Duration,
  DeleteIconButton,
  DeleteIcon,
} from './styledComponents'

const TrackItem = props => {
  const {trackDetails, onDelete} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const onClickDelete = () => onDelete(id)

  return (
    <TrackListItem>
      <ThumbnailTitleGenreContainer>
        <Thumbnail src={imageUrl} alt="track" />
        <TitleAndGenreContainer>
          <Title>{name}</Title>
          <Genre>{genre}</Genre>
        </TitleAndGenreContainer>
      </ThumbnailTitleGenreContainer>
      <DurationDeleteContainer>
        <Duration>{duration}</Duration>
        <DeleteIconButton
          type="button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <DeleteIcon />
        </DeleteIconButton>
      </DurationDeleteContainer>
    </TrackListItem>
  )
}

export default TrackItem
