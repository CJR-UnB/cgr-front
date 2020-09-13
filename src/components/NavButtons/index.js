import React from 'react'
import { TabsContainer, Tab } from './styles'
import { Link } from 'react-router-dom'

export default function NavButtons({page}){

    let tabItems = [
        {name:"Equipes", route:"/teams"},
        {name:"Membros", route:"/"}
    ]

    return(
        <TabsContainer>
            {tabItems.map ((tab, idx) =>
                <Tab style={page === tab.name ? {borderBottom: '2px solid #454555'} : {}} key={idx}>
                    <Link to={tab.route} style={{textDecoration: 'none', color: '#454555'}} >
                        {tab.name}
                    </Link>
                </Tab>
            )}
        </TabsContainer>
    )
}