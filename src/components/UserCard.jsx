import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { users } from "../context";


const UserCard = ({ username, name, id }) => {
	const LINK_ADDRESS = `/users/${id}`

	const { deleteUser } = useContext(users.usersDispatcherContext)

	const handleDeleteWithId = () => {
		return deleteUser(id)
	}

	return (
		<div className="card mb-2">
			<div className="card-body">
				<h5 className="card-title">
					{username}
				</h5>
				<p className="card-text">
					{name} y tengo el id: {id}
				</p>
				<Link className='btn btn-primary' to={LINK_ADDRESS} >
					Editar
				</Link>
				<button onClick={handleDeleteWithId} className="btn btn-danger">
					eliminar
				</button>
			</div>
		</div>
	)

}

export default UserCard