import React, { Component, Fragment } from 'react';
import { Box, Column, Title } from "rbx";
import WaitingImage from '../../assets/images/health-icons-orgainic-icon.png';
import "../../styles/show_order.scss";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadOrder } from "../../actions/order"; 

class ShowOrder extends Component {
  componentWillMount() {
    this.props.loadOrder(this.props.match.params.id);
  }

  render() {

    return (
      <Column.Group className="status_box">
        <Column size={4} offset={4} textAlign="centered">
          <Column.Group>
            <Column size={8} offset={2} textAlign="centered">
              <Box>         
                  { 
                    (this.props.order.status == 'waiting') ? (
                      <Fragment>
                        <Title size={4} className="has-text-custom-green-darker status_msg">
                          Pedido a caminho
                        </Title>
                        <p className="status_description">Em breve você recebera sua comida saudável em casa</p>
                      </Fragment>
                    ) : (
                      <Title size={4} className="has-text-custom-gray-darker status_msg">
                        Pedido entregue
                      </Title>
                    )
                  }
                <img src={WaitingImage} className="status_img" alt="new"/>
              </Box>
            </Column>
          </Column.Group>
        </Column>
      </Column.Group>
    )
  } 
}

const mapStateToProps = store => ({
  order: store.orderState.order
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadOrder }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ShowOrder);