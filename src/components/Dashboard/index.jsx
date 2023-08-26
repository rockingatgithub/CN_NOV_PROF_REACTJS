import Company from "../Company"

const Dashboard = props => {

    return <div>
        <h2> Welcome {props.user.name} </h2>
        <Company/>
    </div>

}

export default Dashboard