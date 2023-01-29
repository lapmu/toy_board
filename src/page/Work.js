import React from "react";
import List from '../components/List'
import Write from '../page/Write'

const Work = ({ data }) => {

    return(
        <div>
            <Write />
            {data.map(datas => (
                <List datas={datas} key={datas.id} />
            ))}
        </div>
    )
}

export default Work;