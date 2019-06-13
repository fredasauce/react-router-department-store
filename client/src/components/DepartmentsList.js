import React, { useState, useEffect, } from "react"
import axios from "axios"
import { Link, } from "react-router-dom"
import { Button, Card, Header, } from "semantic-ui-react"

const DepartmentsList = (props) => {
  const [departments, setDepartments] = useState([]);

  useEffect( () => {
    axios.get("/api/departments")
      .then( res => {
        setDepartments(res.data);
      })
  }, []);

  const deleteDep = (department) => {
    axios.delete(`/api/departments/${department.id}`)
    .then( res => {
      const { departments, } = this.state;
      this.setState({ departments: departments.filter(d => d.id !==id), })
    })
  }

  const renderDepartments = () => {
    if ( departments.length <= 0 )
      return <Header as="h2">No Departments</Header>
    return departments.map ( department => (
      <Card key={department.id}>
        <Card.Content>
          <Card.Header>{department.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button.Group>
            <Button basic as={Link} to={`/departments/${department.id}`} color="blue">
              View
            </Button>
            <Button basic color="red" onClick={ () => deleteDep(${department.id})}>
              Delete
            </Button>
          </Button.Group>
        </Card.Content>
      </Card>
    ))
  }

  return (
    <div>
      <Header as="h1">Departments</Header>
      <Button as={Link} to="/departments/new" color="purple">
        Add a Department
      </Button>
      <br />
      <br />
      <hr />
      <br />
      <Card.Group itemsPerRow={4}>
        { renderDepartments() }
      </Card.Group>
    </div>
  )
};

export default DepartmentsList;
