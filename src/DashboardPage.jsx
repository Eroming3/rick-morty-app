import {useQuery} from "@apollo/client";
import {Character__GetCharacters} from "./gql/character.jsx";
import {Col, Input, Row, Table} from "antd";
import {SearchOutlined} from "@ant-design/icons";

const DashboardPage = () => {
  const { loading, error, data: {characters: {results: characterData} = {}} = {}, refetch } = useQuery(Character__GetCharacters);
  const columns = [
    {
      dataIndex: 'image',
      key: 'image',
      render: (img) => (
        <img src={img} alt="Profile Image" width="50" height="50"/>
      )
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];


  return (
    <>
      <div className="app-container">
        <Row>
          <Col span={6}>
            <Input
              prefix={<SearchOutlined />}
              className="mb-3"
              placeholder="Search character..."
              onChange={(e) => {
                refetch({
                  name: e.target.value
                })
              }}
            />
          </Col>
          <Col span={24}>
            <Table
              dataSource={characterData ?? []}
              columns={columns}
              loading={loading}
              rowKey={record => record.id}
            />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default DashboardPage;
