import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.getSuggestions = this.getSuggestions.bind(this);
    }

    getSuggestions(event) {
        // use formik for validation
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    render() {
        return(
            <div className="bg-pd-fade-blue max-h-16 flex item-center border-pd-stroke-blue border-solid border rounded-xl w-full md:mr-0 md:ml-0 mr-6 ml-6">
                <form className="flex w-full">
                    <input type="search" className="form-input border-none outline-none bg-transparent w-full" placeholder="Search Users" value={this.state.value} onChange={this.getSuggestions}></input>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="material-icons-round md-24 text-pd-accent-blue">search</button>
                        <button className="material-icons-round text-pd-accent-blue hidden">search_off</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;