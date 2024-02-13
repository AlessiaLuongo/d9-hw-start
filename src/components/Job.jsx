import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { useDispatch } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={2}>
        <Button
          onClick={() =>
            dispatch({
              type: "ADD_TO_FAV",
              payload: data.company_name,
            })
          }
        >
          Salva
        </Button>
      </Col>

      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>

      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};
export default Job;
