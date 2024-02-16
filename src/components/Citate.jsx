import React from "react"

export const Citate = ({citate, author}) => {
    return <div className="row">
        <div className="col col-md-12 text-center">
            <div className="citate ">
                „{citate}“
            </div>
            <div className="author">
                {author}
            </div>
        </div>
    </div>
}