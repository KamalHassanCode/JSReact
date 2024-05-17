import React from "react";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchResult: null,
      error: null
    };
  }

  handleSearch = () => {
    let searchTerm = this.state.searchTerm.trim().toLowerCase();
    if (searchTerm === "hello" || searchTerm === "wow") {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data); // Log the response data
          this.setState({ searchResult: data, error: null });
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          this.setState({ searchResult: null, error: "Error fetching search results" });
        });
    } else {
      alert("Please enter 'hello' or 'wow' to trigger the API call.");
    }
  };

  render() {
    let { searchTerm, searchResult, error } = this.state;
    return (
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => this.setState({ searchTerm: e.target.value })}
          placeholder="Enter search term"
        />
        <button onClick={this.handleSearch}>Submit</button>
        {error && <p>{error}</p>}
        {searchResult && (
          <div>
            <h2></h2>
            <ul>
              {searchResult.map((entry, index) => (
                <div key={index}>
                  <h3>{entry.word}</h3>
                  {entry.meanings && (
                    <ul>
                      {entry.meanings.map((meaning, index) => (
                        <li key={index}>
                          <strong>Part of Speech:</strong> {meaning.partOfSpeech}<br />
                          <strong>Definition:</strong> {meaning.definitions[0].definition}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Hello;







