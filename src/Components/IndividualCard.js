import { Email, Person } from '@material-ui/icons'
import React from 'react'

function IndividualCard({ first_name, last_name, avatar, email }) {
    return (
        <div className="individualcard">
            <div className="individualcard__left">
                <img src={avatar} />
            </div>
            <div className="individualcard__right">
                <div className="individual__right--Name">
                    <Person />
                    {first_name} {last_name}
                </div>
                <div className="individual__right--email">
                    <Email />{email}
                </div>
            </div>
        </div>
    )
}

export default IndividualCard
