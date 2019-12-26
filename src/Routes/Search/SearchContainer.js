import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null
  };

  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if(searchTerm !=="") {
      this.searchByTerm(searchTerm);
    }
  }

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try{
      const {data: {result: movieResults}} = await moviesApi.search(searchTerm);
      const {data: {result: tvResults}} = await tvApi.search(searchTerm);
      this.setState({movieResults, tvResults});
    }catch {
      this.setState({ 
        error: "Can't find TV infomation."
      });
    } finally {
      this.setState ({ loading: false });
    }
  }

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}