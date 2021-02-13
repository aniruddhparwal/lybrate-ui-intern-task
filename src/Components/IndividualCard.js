import { Avatar } from '@material-ui/core'
import { Email, Person } from '@material-ui/icons'
import React from 'react'

function IndividualCard({ first_name, last_name, avatar, email }) {
    return (
        <div className="individualcard">
            <div className="individualcard__left">
                <Avatar src={avatar} />
            </div>
            <div className="individualcard__right">
                <Person />
                {first_name} {last_name}
                <Email />{email}
            </div>
        </div>
    )
}

export default IndividualCard
