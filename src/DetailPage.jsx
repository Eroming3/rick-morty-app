import React from 'react';
import {useQuery} from "@apollo/client";
import {Character__GetCharacterDetails} from "./gql/character.jsx";
import {useMatch} from "react-router-dom";
import {Avatar, Col, Descriptions, Row, Skeleton} from "antd";


const DetailPage = () => {
  const match = useMatch('/bio/:characterid');
  const { loading, data: {character} = {}, error} = useQuery(Character__GetCharacterDetails,{
    variables: {
      id: match.params.characterid
    }});
if(loading) {
  return (
    <div className="app-container">
      <div className="layout-container">
        <Row>
          <Col span={5}>
            <Skeleton.Avatar alt="Avatar Image" shape="circle" size={200} active />
            <Skeleton.Input size="large" active className="mt-2"/>
          </Col>
          <Col span={19}>
            <Skeleton className="mt-2" paragraph={{rows: 5}}/>
          </Col>
        </Row>
      </div>
    </div>
  )
}
  return (
    <div className="app-container">
      <div className="layout-container">
        <Row>
          <Col span={5}>
            <Avatar alt="Avatar Image" shape="circle" size={200} src={character.image}/>
            <h3 className="text-center"> {character.name} </h3>
          </Col>
          <Col span={19}>
            <Descriptions title={<h3> Character Info </h3>} style={{fontSize: '1.5em'}}>
              <Descriptions.Item label="Status"><div className="indicator" style={{backgroundColor: character.status === 'Alive' ? '#62f680' : (character.status === 'Dead' ? '#ff5e5e' : '#dddd17'),  border: character.status === 'Alive' ? '1px solid #62f680' : (character.status === 'Dead' ? '1px solid #ff5e5e' : '1px solid #dddd17')}} /></Descriptions.Item>
              <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
              <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
              <Descriptions.Item label="Remark">empty</Descriptions.Item>
              <Descriptions.Item label="Address">
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </div>
    </div>
  )
}


export default DetailPage
