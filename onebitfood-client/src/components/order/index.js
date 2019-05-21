import React, { Component, Fragment } from 'react';
import { Title, Column, Button } from "rbx";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { removeOrderItem } from "../../actions/new_order";
import { hideModal } from "../../actions/modal";
import "../../styles/order.scss";

class Order extends Component {
  orderItemAmount = (orderItem) => {
    return orderItem.quantity * orderItem.product.price
  } 

  totalOrder = () => {
    const arrayToSum = this.props.order.map((orderItem) => { return this.orderItemAmount(orderItem) })
    return arrayToSum.reduce((a, b) => a + b, 0)
  }

  totalCart = () => {
    return this.totalOrder() + this.props.restaurant.delivery_tax
  }

  removeItem = (orderItem) => {
    this.props.removeOrderItem(orderItem);
  }

  closeOrder = () => {
    this.props.hideModal('ORDER_MODAL');
  }

  render() {
    console.log(this.props)
    if(this.props.restaurant == undefined || this.props.order.length <= 0){
      return (
        <Column size={6} offset={3}>
          <Title size={5} className="has-text-custom-gray-darker">Carrinho Vazio</Title>
          <Title size={6} subtitle className="has-text-custom-gray-darker">Escolha um produto</Title>
          <br/>
        </Column>
      )
    } else{
      return (
        <Fragment>
          <Column size={12}>
          
            <div className="order-box">
              <Title size={5} className="has-text-custom-green-darker">Restaurante</Title>
              <Title size={6}>{ this.props.restaurant.name }</Title>
    
              <hr />
    
              { this.props.order.map(orderItem => {
                return  <Fragment>
                          <Column.Group multiline gapless>
                            <Column size="four-fifths">
                              <Title size={6} className="has-text-custom-orange">
                                { orderItem.quantity}x {orderItem.product.name }
                              </Title>
                            </Column>
                            <Column size="one-fifth" className="has-text-weight-bold has-text-right">
                              r${ this.orderItemAmount(orderItem).toFixed(2) }
                            </Column>
                            <Column size="three-fifths">
                              <Title size={7} className="has-text-weight-normal has-text-custom-gray-darker">
                                { orderItem.product.description }
                              </Title>
                            </Column>
                            <Column size="two-fifth" className="has-text-right">
                              <button className="dashed_box is-size-7 remove-button" 
                                      onClick={ () => this.removeItem(orderItem) }>
                                Remover
                              </button>
                            </Column>
                          </Column.Group>
                        </Fragment>
              }) }
    
              <hr />
    
              <Column.Group className="subtotal">
                <Column size="three-fifths">
                  <Title size={6} className="has-text-custom-gray-darker">
                    Subtotal
                  </Title>
                </Column>
                <Column size="two-fifths">
                  <Title size={6} className="has-text-custom-gray-darker has-text-right">
                    r${ this.totalOrder().toFixed(2) }
                  </Title>
                </Column>
              </Column.Group>
    
              <Column.Group>
                <Column size="three-fifths">
                  <Title size={6} className="has-text-custom-gray-darker">
                    Taxa de Entrega
                  </Title>
                </Column>
                <Column size="two-fifths">
                  <Title size={6} className="has-text-custom-gray-darker has-text-right">
                    r${ this.props.restaurant.delivery_tax.toFixed(2) }
                  </Title>
                </Column>
              </Column.Group>
    
              <hr />
    
              <Column.Group>
                <Column size="three-fifths">
                  <Title size={6} className="has-text-custom-gray-darker">
                    Total
                  </Title>
                </Column>
                <Column size="two-fifths">
                  <Title size={6} className="has-text-custom-gray-darker has-text-right">
                    r${ this.totalCart().toFixed(2) }
                  </Title>
                </Column>
              </Column.Group>
            </div>
          </Column>
          { this.props.finish_btn_active != false &&
            <Column size={12} align="center">
              <Button size="medium" color="custom-orange" className="has-text-white" onClick={ () => this.closeOrder() }>
                Finalizar Pedido
              </Button>
            </Column>
          }
        </Fragment>
      )
    }
  }
}

const mapStateToProps = store => ({
  restaurant: store.newOrderState.restaurant,
  order: store.newOrderState.order
});

const mapDispatchToProps = dispatch => bindActionCreators({ removeOrderItem, hideModal }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Order);