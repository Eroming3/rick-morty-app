import {useQuery} from "@apollo/client";
import {Character__GetCharacters} from "./gql/character.jsx";
import {Col, Input, Row, Table, Tooltip} from "antd";
import {IdcardOutlined, ManOutlined, SearchOutlined, WomanOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";


const DashboardPage = () => {
  const navigate = useNavigate();
  const { loading, error, data: {characters: {results: characterData} = {}} = {} } = useQuery(Character__GetCharacters);
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
      key: 'gender',
      dataIndex: 'gender',
      render: (gender) => (
        <>
          {
            gender === 'Male' ? (
              <ManOutlined style={{fontSize: '2em'}} />
            ) : (
              <WomanOutlined style={{fontSize: '2em'}} />
            )
          }
        </>
      )
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status) => (
        <Tooltip title={status}>
          <div className="indicator" style={{backgroundColor: status === 'Alive' ? '#62f680' : (status === 'Dead' ? '#ff5e5e' : '#dddd17'),  border: status === 'Alive' ? '1px solid #62f680' : (status === 'Dead' ? '1px solid #ff5e5e' : '1px solid #dddd17')}} />
        </Tooltip>
      )
    },
    {
      key: 'view details',
      render: (row) => (
        <Tooltip title={'View Character Details'}>
          <IdcardOutlined
            onClick={() => {
              console.log(row, 'row');
              navigate(`/bio/${row.id}`)
            }}
            style={{fontSize: '1.5em'}}
          />
        </Tooltip>
      )
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
