import React from "react";
import List from '../components/List'
import Write from '../page/Write'

const Work = ({ data }) => {

    return(
        <div>
            {data.map(datas => (
                <List datas={datas} key={datas.id} />
                ))}
                {/* <Write /> */}
        </div>
    )
}

export default Work;