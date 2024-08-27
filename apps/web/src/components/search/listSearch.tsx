import React from 'react'
import CardSearch from './CardSearch'

export const ListSearch = ({ api }: { api: any }) => {
    console.log(api)
    return (
        <div>
            <CardSearch list={api} />
        </div>
    )
}
