import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Column, Icon, Title } from "rbx";
import { bindActionCreators } from 'redux';
import { hideModal } from "../../actions/modal";
import { FaTimes } from 'react-icons/fa';

import AddressForm from '../address_form'

class AddressModal extends Component {

  render() {
    return (
      <Column.Group centered>
        <Column size="3" mobile={{ 'size': 10, 'offset': 1 }}>
          <Box>
            <Column.Group>
              <Column size={12} textAlign="right">
                <Icon color="has-custom-black" onClick={() => this.props.hideModal('ADDRESS_MODAL')}>
                  <FaTimes />
                </Icon>
              </Column>
            </Column.Group>
            <AddressForm />
          </Box>
        </Column>
      </Column.Group>
    )
  }

}

const mapDispatchToProps = dispatch => bindActionCreators({ hideModal }, dispatch);

export default connect(null, mapDispatchToProps)(AddressModal);