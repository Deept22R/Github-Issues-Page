import React from 'react';
import { Badge, InputGroup, FormControl, Button } from "react-bootstrap";
import './styles.css';
const Filter = () => {
    return (
        <div>
            <div className="form-group row" id="search">
        <div className="col-xs-2">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button variant="outline-secondary">Filters</Button>
            </InputGroup.Prepend>
            <FormControl
              aria-describedby="basic-addon1"
              placeholder="is:issue is:open"
            />
          </InputGroup>
        </div>
        <div className="btnn">
          <button className="buttons">Labels</button>
          <button className="buttons">Milestones</button>
        </div>
        <div>
          <Button variant="success" size="md" id="new-issue">
            New Issue
          </Button>
        </div>
        </div></div>
    );
};

export default Filter;
