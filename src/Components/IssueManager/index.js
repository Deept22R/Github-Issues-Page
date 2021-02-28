import React from 'react';
import { Badge } from 'react-bootstrap';
import "./styles.css";
let count = 0;
const IssueManager = ({issue,setIssue,fetchIssues,issueApi}) => {
    return (
        <div>
            <ul id="ul">
                {issueApi!=undefined?issueApi.result.map((item,index)=>{
        return <li className='list' key={index}><img src="https://t3.ftcdn.net/jpg/01/89/75/78/240_F_189757839_LmjpECXmbUy5GPxxiz0IwVlByNt0ghqs.jpg" height="25px" ></img>&nbsp;&nbsp;
            {issueApi.result[index].title}<Badge id="badge">bug</Badge>
        </li>
        }):null}
            </ul>
        </div>
    );
};

export default IssueManager;