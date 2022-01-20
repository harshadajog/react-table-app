import MaterialTable from "material-table";

import './Requests.css';


const data = [
  { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
];

const columns = [
  { title: "Name", field: "name" },
  { title: "Date", field: "surname" },
  { title: "Item", field: "birthYear", type: "numeric" },
];

const Requests = () => {
        return (
        <div className="demo">
      <h1>Material-Table Demo</h1>
      <div className="requests-div">
          <div className="add-request">
              <button>New Request</button>
          </div>
        <MaterialTable
          columns={columns}
          data={data}
          title="Material-Table Demo"
        />
      </div>
    </div>
          
        );
};

export default BasicTable;