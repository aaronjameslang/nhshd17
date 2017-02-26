// @flow
import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { ipcRenderer } from 'electron';
import uuid from 'uuid/v4';

const paperStyle = {
  paddingLeft: '100px',
  paddingRight: '50px',
  paddingTop: '20px',
  paddingBottom: '20px',
  height: '80vh',
  overflow: 'scroll',
}

export default class Patients extends Component {
  props: {
    getFilePath: () => void,
    saveFilePath: () => void,
    filePath: string
  };

  constructor(props) {
    super(props)

    this.state = {
      patients: []
    }

    const { getFilePath } = props
    const filePath = getFilePath() + 'Patient.csv'
    ipcRenderer.send("load_from_file", filePath)
    ipcRenderer.on('file_contents', (event, records) => {
      this.loadLoadPatients(records)
    })
  }

  loadLoadPatients(records) {
    this.setState({'patients': records})
  }

  render() {
    return (
      <div>
        <Paper style={ paperStyle } zDepth={1}>
          <div>
            <Table fixedHeader={ true } fixedFooter={ false } selectable={ true } multiSelectable={ false } >
              <TableHeader displaySelectAll={ false } adjustForCheckbox={ true } enableSelectAll={ false } >
                <TableRow>
                  <TableHeaderColumn tooltip="Patient Id">ID</TableHeaderColumn>
                  <TableHeaderColumn tooltip="NHS Number">NHS Number</TableHeaderColumn>
                  <TableHeaderColumn tooltip="First Name">First Name</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Surname">Second Name</TableHeaderColumn>
                  <TableHeaderColumn tooltip="DOB">Date Of Birth</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={ true } deselectOnClickaway={ false } showRowHover={ true } stripedRows={ false } >
                {this.state.patients.map( (row, index) => (
                  <TableRow key={row.id} selected={row.selected}>
                    <TableRowColumn>{row.id}</TableRowColumn>
                    <TableRowColumn>{row.nhs_number}</TableRowColumn>
                    <TableRowColumn>{row.first_name}</TableRowColumn>
                    <TableRowColumn>{row.second_name}</TableRowColumn>
                    <TableRowColumn>{row.dob}</TableRowColumn>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <br />
            <RaisedButton
              label="Load Patient"
              primary={ true }
              style={{ margin: 12 }}
              onClick={() => console.log('duck')}
            />
          </div>
        </Paper>
      </div>
    );
  }
}
