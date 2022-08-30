import React from "react";
import AddBtn from "./AddBtn/AddBtn";
import Note from "./Note/Note";
import BackgroundDiv from "../Utils/BackgroundDiv/BackgroundDiv";
import Like from "./Like/Like";
import PublicNote from "./PublicNote/PublicNote";


class DiaryPage extends React.Component {
    constructor(props) {
        super(props);
        this.getLikes = this.getLikes.bind(this);
        this.getPublicNotes = this.getPublicNotes.bind(this);
        this.onClickLikeCountsHandler = this.onClickLikeCountsHandler.bind(this);
        this.onClickPublicNoteHandler = this.onClickPublicNoteHandler.bind(this);
        this.state = { displayLikes: false, displayPublicNotes: false };
    }

    getLikes() {
        try {
            // call to the publicdiary.api.com/dirary_pages/likes
            const likes = [{by: "Rajitha Kumara"},{by: "Osura De Silva"}];
            return likes.map(like => <Like {...like} />);

        }catch(error) {
            // signaling the error rendering component
            // temp
            console.error(`[Error occured while attempting to fetch information : ${error} at ${this.constructor.name}]`);
        }
    }

    getPublicNotes() {
        try {
            // call to the publicdiary.api.com/diary_pages/public_notes
            const notes = [{
                note: "Nisi est sit amet facilisis magna etiam tempor orci eu Nulla posuere sollicitudin.",
                timeString: "1:42:56 PM",
                from: "Rajitha Kumara"
            },
            {
                note: "facilisis magna etiam tempor orci eu Nulla posuere.",
                timeString: "5:34:09 PM",
                from: "Osura De Silva"
            }];
            return notes.map(note => <PublicNote {...note} />);
        }catch(error) {
            console.error(`[Error occured while attempting to fetch information : ${error} at ${this.constructor.name}]`);
        }
    }

    onClickPublicNoteHandler(event) {
        this.setState({displayPublicNotes: !this.state.displayPublicNotes, displayLikes: false});
    }

    onClickLikeCountsHandler(event) {
        this.setState({displayLikes: !this.state.displayLikes, displayPublicNotes: false});
    }

    render() {
        return (
            <BackgroundDiv className="font-pd-sans-body p-6 bg-pd-pure-white border border-solid border-pd-stroke-blue rounded-2xl">
                <div className="flex items-top justify-between align-top mb-9">
                    <div className="text-pd-text-gray">
                        <h1 className="font-semibold font-pd-sans-heading sm:text-2xl text-xl">{this.props.title}</h1>
                        <div className="flex items-center">
                            <div className="text-sm font-normal font-pd-sans-body mr-3">{this.props.dateString}</div>
                            <div className="material-icons-round cursor-pointer select-none font-thin">more_horiz</div>
                        </div>
                    </div>
                    <AddBtn />
                </div>
                <div>
                    <Note
                        note="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        timeString="2:14:42 PM"
                    />
                    <Note 
                        note="Donec pretium vulputate sapien nec sagittis."
                        timeString="1:23:12 PM"
                    />
                </div>
                <div className="flex items-center select-none mt-9">
                    <div className="text-pd-lotus-red text-sm flex items-center mr-3 cursor-pointer"><div className="material-icons-round text-pd-lotus-red mr-2">favorite</div><div className="underline font-normal" onClick={this.onClickLikeCountsHandler}>{this.props.likesCount+" Likes"}</div></div>
                    <div className="text-pd-accent-blue text-sm font-nomral underline cursor-pointer" onClick={this.onClickPublicNoteHandler}>{this.props.publicNotesCount+" Public Notes"}</div>
                </div>
                <div className="mt-9">
                    <div className="flex flex-wrap gap-3">
                        { this.state.displayLikes ? this.getLikes() : false }
                    </div>
                    <div>
                        {this.state.displayPublicNotes ? 
                        <form className="border border-solid border-pd-stroke-blue rounded-xl bg-pd-fade-blue p-3 flex items-end text-pd-text-gray mb-2 text-base">
                            <textarea type="text" className="w-full focus:border-transparent focus:ring-0 border-transparent bg-transparent p-0 placeholder:text-pd-text-gray placeholder:text-xs placeholder:font-norma resize-none h-20" placeholder="Write A Public Note ..."></textarea>
                            <button type="submit" className="bg-pd-accent-blue pl-3 pr-3 pt-2 pb-2 rounded-xl text-pd-pure-white font-medium text-sm ml-3">Publish</button>
                        </form>
                        : false }
                        { this.state.displayPublicNotes ? this.getPublicNotes() : false }
                    </div>
                </div>
            </BackgroundDiv>
        );
    }
}

export default DiaryPage;