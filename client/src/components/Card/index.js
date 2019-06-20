import React from "react";
import { defaultCipherList } from "constants";

function Card({children}) {
    return (
    <div class="card">
        <div class="card-header">{listItem ? <h5>{cardTitle}</h5> : {cardTitle}}
        </div>
        <div class="card-body" id="cardBody"></div>
    </div>
    )
}

export default Card;