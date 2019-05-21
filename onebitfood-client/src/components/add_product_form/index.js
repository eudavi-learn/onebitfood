import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Input, Column, Title, Button, Field, Control, Label, Select } from "rbx";
import { bindActionCreators } from 'redux';
import { hideModal } from "../../actions/modal";
import { addOrderItem } from "../../actions/new_order";

class AddProductForm extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      quantity:  1,
      product_id: props.product.id,
      restaurant_id: props.restaurant.id,
      comment: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addOrderItem(this.props.restaurant, this.props.product, this.state.quantity, this.state.comment)
    this.props.hideModal('ADD_PRODUCT')
  }

  render(){
    return(
      <Fragment>
        <Column.Group>
          <Column size={10} offset={1}>
            <img src={this.props.product.image_url}/>
            <Title size={6} className="has-text-custom-black-darker">
              {this.props.product.name}
            </Title>
            <Title size={6} subtitle className="has-text-custom-black-darker">
              {this.props.product.description}
            </Title>

            <form onSubmit={this.handleSubmit}>
              <Field>
                  <Label>Algum comentário?</Label>
                  <Control>
                    <Input 
                      type="text" 
                      name="comment"
                      value={this.state.comment}
                      onChange={this.handleInputChange}
                      />
                </Control>
              </Field>
              <Field>
                <Label>Quantidade</Label>
                <Control>
                  <Select.Container fullwidth>
                    <Select required name="quantity" value={this.state.qauntity} onChange={this.handleInputChange}>
                      {[...Array(30).keys()].map((number, i) => {
                        return <Select.Option key={number} value={number + 1}>{number + 1}</Select.Option>
                      })}
                      </Select>
                  </Select.Container>
                </Control>
              </Field>
             
              <br/>
              <Field kind="group" align="centered">
                <Control>
                  <Button size="medium" color="custom-orange">
                    <span className="has-text-white">Adicionar Produto</span>
                  </Button>
                </Control>
              </Field>
            </form>
          </Column>
        </Column.Group>
      </Fragment>
    )
  }

}

const mapStateToProps = store => ({
  modal: store.modalState.modal
});

const mapDispatchToProps = dispatch => bindActionCreators({ hideModal, addOrderItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm);