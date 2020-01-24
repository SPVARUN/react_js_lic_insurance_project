import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community';


export default class File extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [

        {
          headerName: "TherapyArea",
          field: "TherapyArea",
          width: 90,
          filter: "name",
          sortable: true,
          pinned: 'left',
          pivot: 'true'
        }, {
          headerName: "DeviceSeries",
          field: "DeviceSeries",
          width: 100,
          filter: "agTextColumnFilter",
          sortable: true,
          pinned: 'left',
          pivot: true
        }, {
          headerName: "Segment",
          field: "Segment",
          width: 100,
          filter: "agTextColumnFilter",
          sortable: true,
          pinned: 'left',
          pivot: true
        }, {
          headerName: "Brand",
          width: 90,
          field: "Brand",
          filter: "agTextColumnFilter",
          sortable: true,
          pinned: 'left',
          // setQuickFilter('new filter text')
        }, {
          headerName: "Catheter",
          width: 100,
          field: "Catheter",
          filter: "date",
          sortable: true,
          pinned: 'left'
        }, {
          headerName: "Diameter",
          width: 100,
          field: "Diameter",
          filter: "agTextColumnFilter",
          sortable: true,
          pinned: true
        }, {
          headerName: "Length",
          width: 90,
          field: "Length",
          filter: 'number',
          sortable: true,
          pinned: true
        },
        {
          headerName: 'Year',
          field: "Year",
          children: [
            {
              headerName: "2010",
              children: [
                {
                  headerName: "Revenue",
                  field: "Year.2010.Revenue",
                },
                {
                  headerName: "Units",
                  field: "Year.2010.Units",
                },
                {
                  headerName: "Average Selling Price per Unit",
                  field: "Year.2010.Average Selling Price per Unit",
                }
              ]
            },
            {
              headerName: "2011",
              children: [
                {
                  headerName: "Revenue",
                  field: "Year.2011.Revenue",
                },
                {
                  headerName: "Units",
                  field: "Year.2011.Units",
                },
                {
                  headerName: "Average Selling Price per Unit",
                  field: "Year.2011.Average Selling Price per Unit",
                }
              ]

            }, {
              headerName: "2012",
              children: [
                {
                  headerName: "Revenue",
                  field: "Year.2012.Revenue",
                },
                {
                  headerName: "Units",
                  field: "Year.2012.Units",
                },
                {
                  headerName: "Average Selling Price per Unit",
                  field: "Year.2012.Average Selling Price per Unit",
                }
              ]
            }, {
              headerName: "2013",
              children: [
                {
                  headerName: "Revenue",
                  field: "Year.2013.Revenue",
                },
                {
                  headerName: "Units",
                  field: "Year.2013.Units",
                },
                {
                  headerName: "Average Selling Price per Unit",
                  field: "Year.2013.Average Selling Price per Unit",
                }
              ]
            }
            , {
              headerName: "2014",
              children: [
                {
                  headerName: "Revenue",
                  field: "Year.2014.Revenue",
                },
                {
                  headerName: "Units",
                  field: "Year.2014.Units",
                },
                {
                  headerName: "Average Selling Price per Unit",
                  field: "Year.2014.Average Selling Price per Unit",
                }
              ]
            },
            {
              headerName: "2015",
              children: [
                {
                  headerName: "Revenue",
                  field: "Year.2015.Revenue",
                },
                {
                  headerName: "Units",
                  field: "Year.2015.Units",
                },
                {
                  headerName: "Average Selling Price per Unit",
                  field: "Year.2015.Average Selling Price per Unit",
                }
              ]
            },
            {
              headerName: "2016",
              children: [
                {
                  headerName: "Revenue",
                  field: "Year.2016.Revenue",
                },
                {
                  headerName: "Units",
                  field: "Year.2016.Units",
                },
                {
                  headerName: "Average Selling Price per Unit",
                  field: "Year.2016.Average Selling Price per Unit",
                }
              ]
            },
            {
              headerName: "2017",
              children: [
                {
                  headerName: "Revenue",
                  field: "Year.2017.Revenue",
                },
                {
                  headerName: "Units",
                  field: "Year.2017.Units",
                },
                {
                  headerName: "Average Selling Price per Unit",
                  field: "Year.2017.Average Selling Price per Unit",
                }
              ]
            }
          ]

        }]

    }

  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/wpsl7')
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }))
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '3000px',
          width: '3500px',
          color: 'green'


        }} >
        <AgGridReact
          onGridReady={params => this.gridApi = params.api}
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          defaultColDef={this.state.defaultColDef}
          groupDefaultExpanded={this.state.groupDefaultExpanded}
          debug={true}
        />

      </div>

    );
  }
}

