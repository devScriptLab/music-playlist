import {Component} from 'react'

import Banner from '../Banner'
import TrackItem from '../TrackItem'

import {
  Container,
  PlaylistContainer,
  ResponsivePlaylistContainer,
  SongsPlaylistAndSearchContainer,
  SongsPlaylistHeading,
  SearchContainer,
  InputSearch,
  SearchIcon,
  SongsList,
  SongNotFoundContainer,
  SongNotFound,
} from './styledComponents'

class MusicPlayListApp extends Component {
  constructor(props) {
    super(props)
    const {initialTracksList} = props
    this.state = {
      tracksList: initialTracksList,
      inputSearch: '',
    }
  }

  onDelete = trackId => {
    const {tracksList} = this.state

    const newTrackList = tracksList.filter(
      eachTrack => eachTrack.id !== trackId,
    )
    this.setState({tracksList: newTrackList})
  }

  onChangeSearchInput = event =>
    this.setState({inputSearch: event.target.value})

  renderPlaylistHeadingAndSearch = () => {
    const {inputSearch} = this.state

    return (
      <SongsPlaylistAndSearchContainer>
        <SongsPlaylistHeading>Songs Playlist</SongsPlaylistHeading>
        <SearchContainer>
          <InputSearch
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
            value={inputSearch}
          />
          <SearchIcon />
        </SearchContainer>
      </SongsPlaylistAndSearchContainer>
    )
  }

  renderPlaylist = () => {
    const {tracksList, inputSearch} = this.state

    const searchResult = tracksList.filter(eachTrack =>
      eachTrack.name.toLowerCase().includes(inputSearch.toLowerCase()),
    )

    if (searchResult.length === 0) {
      return (
        <SongNotFoundContainer>
          <SongNotFound>No Songs Found</SongNotFound>
        </SongNotFoundContainer>
      )
    }

    return (
      <SongsList>
        {searchResult.map(eachTrack => (
          <TrackItem
            key={eachTrack.id}
            trackDetails={eachTrack}
            onDelete={this.onDelete}
          />
        ))}
      </SongsList>
    )
  }

  render() {
    return (
      <Container>
        <Banner />
        <PlaylistContainer>
          <ResponsivePlaylistContainer>
            {this.renderPlaylistHeadingAndSearch()}
            {this.renderPlaylist()}
          </ResponsivePlaylistContainer>
        </PlaylistContainer>
      </Container>
    )
  }
}

export default MusicPlayListApp
