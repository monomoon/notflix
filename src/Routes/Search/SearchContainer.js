import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from '../../api';

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null
  };

  handleSubmit = event => {
  event.preventDefault();
  const { searchTerm } = this.state;
  if(searchTerm !== ""){
    this.searchByTerm(searchTerm);
  }
  
};

updateTerm = event => {
  const{
    target: { value }
  } = event;
  console.log(value);
  this.setState({
    searchTerm: value
  });
};

searchByTerm = async() => {
  const { searchTerm } = this.state;
  try {
    const {data:{results : movieResults}} = await movieApi.search(searchTerm);
    const {data:{results : tvResults}} = await tvApi.search(searchTerm);
    
    this.setState({ 
      movieResults,
      tvResults
    });
    
  } catch {
    this.setState({error : "Can't find resultes"})    
  } finally {
    this.setState({loading: false});
    }
  }
  
  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        searchterm={searchTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    )
  };
};

