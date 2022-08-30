import React from "react";
import BackgroundDiv from "../../Utils/BackgroundDiv/BackgroundDiv";
import Readings from "./Readings/Readings";


class ReadingDiaries extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <BackgroundDiv>
                <div>
                    <div className="font-pd-sans-heading sm:text-2xl text-xl font-semibold text-pd-text-gray">Reading Diaries</div>
                    <div className="mt-6">
                        <Readings 
                            name="Kelum Priyasad"
                        />
                    </div>
                </div>
            </BackgroundDiv>
        );
    }
}

export default ReadingDiaries;