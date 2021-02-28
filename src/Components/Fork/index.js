import React from 'react';
import { Badge} from "react-bootstrap";
import './styles.css';
const Fork = () => {
    return (
        <div>
             <div className="aligns">
        <a className="title">facebookincubator / create-react-app</a>
        <div className="btn">
          <button>
            Watch<Badge variant="light">319</Badge>
          </button>
          &nbsp;&nbsp;
          <button>
            Unstar<Badge variant="light">1219</Badge>
          </button>
          &nbsp;&nbsp;
          <button>
            Fork<Badge variant="light">5619</Badge>
          </button>
        </div>
      </div>
        </div>
    );
};

export default Fork;