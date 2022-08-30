import React from "react";

class AddBtn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="text-pd-accent-blue lg:h-16 lg:w-64 sm:h-12 sm:w-48 h-12 w-12 flex items-center justify-center bg-pd-fade-blue rounded-xl border border-solid border-pd-stroke-blue cursor-pointer select-none ml-3">
                <div className="material-icons-round">add_circle</div>
            </div>
        );
    }
}

export default AddBtn;