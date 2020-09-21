import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "./components/navigation/navigation.component";

import PersonsPage from "./pages/persons/persons.component";
import AddPersonPage from "./pages/add-person/add-person.component";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Container fluid>
        <Row>
          <Col>
            <Switch>
              <Route exact path="/" component={PersonsPage} />
              <Route exact path="/add-person" component={AddPersonPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
