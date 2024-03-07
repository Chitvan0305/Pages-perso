import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import DatePara from './DatePara';
import EntitledPara from './EntitledPara';
import EstablishmentPara from './EstablishmentPara';
import Container from 'react-bootstrap/Container';

function HistoryItem(props) {
  console.log(props)
  const item = props.item;
  const datePara = item.querySelector("simpara[role='date']");
  const entitled = item.querySelector("simpara[role='entitled']");
  const establishment = item.querySelector("simpara[role='establishment']")

  return (
    <Container>
      <Row className='history-item'>
        <DatePara datePara={datePara} />
        <Col>
          {
            entitled
              ? <EntitledPara entitled={entitled} />
              : ""
          }
          {
            establishment
              ? <EstablishmentPara establishment={establishment} />
              : ""
          }
        </Col>
      </Row>
    </Container>
  )

}

export default HistoryItem;